// src/services/csvService.ts
import Papa from "papaparse";
import {
    FinancialTransaction,
    ProcessedFinancialData,
    PreviewData,
} from "@/types/financial";
import { validateCSVData } from "./validationService";

export const previewCSV = async (file: File): Promise<PreviewData> => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            delimitersToGuess: [",", ";", "\t"],
            transformHeader: (header: string) => header.trim().toLowerCase(),
            complete: (results) => {
                try {
                    // Validar estrutura básica
                    if (results.errors.length > 0) {
                        throw new Error(
                            `Erro ao ler o arquivo: ${results.errors[0].message}`
                        );
                    }

                    // Validar colunas obrigatórias
                    const requiredColumns = [
                        "data",
                        "tipo",
                        "valor",
                        "categoria",
                    ];
                    const headers = results.meta.fields || [];
                    const missingColumns = requiredColumns.filter(
                        (col) => !headers.includes(col)
                    );

                    if (missingColumns.length > 0) {
                        throw new Error(
                            `Colunas obrigatórias ausentes: ${missingColumns.join(
                                ", "
                            )}`
                        );
                    }

                    // Validar dados
                    const validationErrors = validateCSVData(results.data);

                    resolve({
                        data: results.data,
                        errors: validationErrors,
                    });
                } catch (error) {
                    reject(error);
                }
            },
            error: (error) => {
                reject(new Error(`Erro ao processar CSV: ${error}`));
            },
        });
    });
};

export const processCSV = async (
    data: any[]
): Promise<ProcessedFinancialData> => {
    try {
        const transactions: FinancialTransaction[] = data.map((row) => ({
            date: row.data,
            type: row.tipo.toLowerCase() === "receita" ? "income" : "expense",
            amount:
                typeof row.valor === "string"
                    ? Number(
                          row.valor
                              .replace("R$", "")
                              .replace(/\./g, "")
                              .replace(",", ".")
                              .trim()
                      )
                    : row.valor,
            category: row.categoria,
            description: row.descricao || "",
        }));

        return calculateSummary(transactions);
    } catch (error) {
        throw new Error("Erro ao processar dados do CSV");
    }
};

const calculateSummary = (
    transactions: FinancialTransaction[]
): ProcessedFinancialData => {
    const summary = {
        totalIncome: 0,
        totalExpense: 0,
        balance: 0,
        categorySummary: {} as Record<string, number>,
    };

    const monthlyData: Record<string, { income: number; expense: number }> = {};

    transactions.forEach((transaction) => {
        const amount = transaction.amount;
        const date = transaction.date.split("T")[0]; // Pega apenas a data, remove o tempo

        // Calcular totais
        if (transaction.type === "income") {
            summary.totalIncome += amount;
        } else {
            summary.totalExpense += amount;
            // Atualizar categoria apenas para despesas
            summary.categorySummary[transaction.category] =
                (summary.categorySummary[transaction.category] || 0) + amount;
        }

        // Preparar dados mensais para o gráfico
        if (!monthlyData[date]) {
            monthlyData[date] = { income: 0, expense: 0 };
        }
        monthlyData[date][transaction.type] += amount;
    });

    summary.balance = summary.totalIncome - summary.totalExpense;

    return {
        transactions,
        summary,
        monthlyData: Object.entries(monthlyData)
            .map(([date, data]) => ({
                date,
                income: data.income,
                expense: data.expense,
            }))
            .sort((a, b) => a.date.localeCompare(b.date)),
    };
};
