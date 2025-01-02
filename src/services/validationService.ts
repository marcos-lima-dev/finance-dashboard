// src/services/validationService.ts
import { ValidationError } from "@/types/financial";

// Lista de categorias válidas baseada nos dados
const VALID_CATEGORIES = [
    "Salário",
    "Alimentação",
    "Transporte",
    "Freelance",
    "Lazer",
    "Saúde",
    "Vendas",
    "Aluguel",
    "Bônus",
];

export const validateCSVData = (data: any[]): ValidationError[] => {
    const errors: ValidationError[] = [];

    data.forEach((row, index) => {
        const rowNumber = index + 2; // +2 porque índice começa em 0 e linha 1 é cabeçalho

        // Validar Data
        if (!row.data) {
            errors.push({
                row: rowNumber,
                column: "data",
                value: "vazio",
                message: "Data é obrigatória",
            });
        } else {
            const [day, month, year] = row.data.split("/");
            const date = new Date(year, month - 1, day);
            if (
                isNaN(date.getTime()) ||
                day.length !== 2 ||
                month.length !== 2 ||
                year.length !== 4
            ) {
                errors.push({
                    row: rowNumber,
                    column: "data",
                    value: row.data,
                    message: "Data deve estar no formato DD/MM/YYYY",
                });
            }
        }

        // Validar Tipo
        if (!row.tipo) {
            errors.push({
                row: rowNumber,
                column: "tipo",
                value: "vazio",
                message: "Tipo é obrigatório",
            });
        } else if (!["receita", "despesa"].includes(row.tipo.toLowerCase())) {
            errors.push({
                row: rowNumber,
                column: "tipo",
                value: row.tipo,
                message: 'Tipo deve ser "receita" ou "despesa"',
            });
        }

        // Validar Valor
        if (!row.valor && row.valor !== 0) {
            errors.push({
                row: rowNumber,
                column: "valor",
                value: "vazio",
                message: "Valor é obrigatório",
            });
        } else {
            const value =
                typeof row.valor === "string"
                    ? Number(
                          row.valor
                              .replace("R$", "")
                              .replace(/\./g, "")
                              .replace(",", ".")
                              .trim()
                      )
                    : row.valor;

            if (isNaN(value) || value <= 0) {
                errors.push({
                    row: rowNumber,
                    column: "valor",
                    value: row.valor.toString(),
                    message: "Valor deve ser um número positivo",
                });
            }
        }

        // Validar Categoria
        if (!row.categoria) {
            errors.push({
                row: rowNumber,
                column: "categoria",
                value: "vazio",
                message: "Categoria é obrigatória",
            });
        } else if (!VALID_CATEGORIES.includes(row.categoria)) {
            errors.push({
                row: rowNumber,
                column: "categoria",
                value: row.categoria,
                message: `Categoria inválida. Categorias válidas: ${VALID_CATEGORIES.join(
                    ", "
                )}`,
            });
        }

        // Validar tamanho máximo da descrição
        if (row.descricao && row.descricao.length > 100) {
            errors.push({
                row: rowNumber,
                column: "descricao",
                value: row.descricao,
                message: "Descrição não pode ter mais que 100 caracteres",
            });
        }
    });

    return errors;
};
