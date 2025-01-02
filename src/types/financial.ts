// src/types/financial.ts

export interface FinancialTransaction {
    date: string;
    type: "income" | "expense";
    amount: number;
    category: string;
    description?: string;
}

export interface ProcessedFinancialData {
    transactions: FinancialTransaction[];
    summary: {
        totalIncome: number;
        totalExpense: number;
        balance: number;
        categorySummary: Record<string, number>;
    };
    monthlyData: Array<{
        date: string;
        income: number;
        expense: number;
    }>;
}

export interface ValidationError {
    row: number;
    column: string;
    value: string;
    message: string;
}

export interface PreviewData {
    data: any[];
    errors: ValidationError[];
}
