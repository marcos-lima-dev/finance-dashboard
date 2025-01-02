// src/components/upload/StatusIndicator/types.ts
export type StatusType = "reading" | "processing" | "success";

export interface BaseStatusProps {
    className?: string;
}

export interface ReadingStatusProps extends BaseStatusProps {
    fileName: string;
}

export interface ProcessingStatusProps extends BaseStatusProps {
    progress?: number; // opcional, para futuras melhorias
}

export interface SuccessStatusProps extends BaseStatusProps {
    message?: string; // opcional, para mensagens customizadas
}

export interface StatusIndicatorProps {
    status: StatusType;
    fileName: string;
    className?: string;
}
