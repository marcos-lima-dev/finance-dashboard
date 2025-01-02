// src/components/upload/FileInstructions.tsx
import React from "react";

export const FileInstructions: React.FC = () => (
    <div className="mt-4 text-sm text-gray-500">
        <p className="font-medium mb-2">
            O arquivo CSV deve conter as seguintes colunas:
        </p>
        <ul className="list-disc list-inside space-y-1">
            <li>data (DD/MM/YYYY)</li>
            <li>tipo (receita ou despesa)</li>
            <li>valor (número positivo)</li>
            <li>categoria</li>
            <li>descrição (opcional)</li>
        </ul>
    </div>
);

export default FileInstructions;
