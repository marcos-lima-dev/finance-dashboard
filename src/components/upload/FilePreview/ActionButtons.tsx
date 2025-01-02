// src/components/upload/FilePreview/ActionButtons.tsx
import React from "react";
import { FileUp, Check } from "lucide-react";

interface ActionButtonsProps {
    hasErrors: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
    hasErrors,
    onConfirm,
    onCancel,
}) => (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <button
            onClick={onConfirm}
            disabled={hasErrors}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transition-colors ${
                hasErrors
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
            }`}
            aria-label="Confirmar Processamento"
        >
            <Check className="w-6 h-6" />
        </button>

        <button
            onClick={onCancel}
            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Carregar Novo Arquivo"
        >
            <FileUp className="w-6 h-6" />
        </button>
    </div>
);

export default ActionButtons;
