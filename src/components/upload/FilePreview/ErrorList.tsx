// src/components/upload/FilePreview/ErrorList.tsx
import React from "react";
import { ValidationError } from "@/types/financial";

interface ErrorListProps {
    errors: ValidationError[];
}

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => (
    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <h4 className="font-semibold text-red-700 mb-2">
            Foram encontrados {errors.length} erros no arquivo:
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-red-600">
            {errors.map((error, index) => (
                <li key={index}>
                    Linha {error.row}: {error.message}
                </li>
            ))}
        </ul>
    </div>
);

export default ErrorList;
