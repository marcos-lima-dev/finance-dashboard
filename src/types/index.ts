// Tipos para dados financeiros
export interface FinancialTransaction {
    id: string;
    date: string;
    amount: number;
    type: "income" | "expense";
    category: string;
    description: string;
    status: "completed" | "pending" | "cancelled";
}

export interface FinancialSummary {
    totalRevenue: number;
    totalExpenses: number;
    netProfit: number;
    profitMargin: number;
    period: {
        start: string;
        end: string;
    };
}

export interface CategorySummary {
    category: string;
    amount: number;
    percentage: number;
    transactions: number;
}

// Tipos para análise e tendências
export interface Trend {
    value: number;
    isPositive: boolean;
    percentage: number;
    period: string;
}

export interface ChartData {
    label: string;
    value: number;
    date: string;
}

// Tipos para configurações e preferências
export interface UserPreferences {
    currency: string;
    dateFormat: string;
    theme: "light" | "dark" | "system";
    notifications: {
        email: boolean;
        push: boolean;
    };
}

// Tipos para upload e processamento de arquivos
export interface FileUpload {
    id: string;
    filename: string;
    status: "uploading" | "processing" | "completed" | "error";
    progress: number;
    error?: string;
    timestamp: string;
}

// Tipos para dashboard e layout
export interface DashboardFilter {
    period: "day" | "week" | "month" | "year" | "custom";
    startDate?: string;
    endDate?: string;
    categories?: string[];
    transactionType?: "all" | "income" | "expense";
}

export interface MenuItem {
    id: string;
    label: string;
    icon?: string;
    path: string;
    badge?: {
        value: string | number;
        variant: "default" | "success" | "warning" | "error";
    };
}

// Tipos para notificações e alertas
export interface Notification {
    id: string;
    type: "info" | "success" | "warning" | "error";
    title: string;
    message: string;
    timestamp: string;
    read: boolean;
    actionUrl?: string;
}

// Tipos para API responses
export interface ApiResponse<T> {
    data: T;
    status: "success" | "error";
    message?: string;
    timestamp: string;
}

export interface ErrorResponse {
    code: string;
    message: string;
    details?: Record<string, any>;
}

// Utility types
export type TimeRange =
    | "today"
    | "yesterday"
    | "last7days"
    | "last30days"
    | "thisMonth"
    | "lastMonth"
    | "custom";

export type SortDirection = "asc" | "desc";

export type LoadingState = "idle" | "loading" | "success" | "error";
