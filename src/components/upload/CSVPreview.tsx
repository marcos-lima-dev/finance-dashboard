//src/components/upload/CSVPreview.tsx
import React from "react";
import { Card } from "../ui/Card";

interface CSVPreviewProps {
    data: any[];
    onConfirm: () => void;
    onCancel: () => void;
}

const CSVPreview: React.FC<CSVPreviewProps> = ({
    data,
    onConfirm,
    onCancel,
}) => {
    const previewRows = data.slice(0, 5); // Mostra apenas as 5 primeiras linhas
    const columns = Object.keys(previewRows[0] || {});

    const formatValue = (value: any) => {
        if (typeof value === "number") {
            return new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(value);
        }
        return value;
    };

    return (
        <div className="mt-4">
            <Card>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">
                        Preview do arquivo
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {columns.map((column, index) => (
                                        <th
                                            key={index}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {previewRows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((column, colIndex) => (
                                            <td
                                                key={`${rowIndex}-${colIndex}`}
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            >
                                                {formatValue(row[column])}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                        Mostrando {previewRows.length} de {data.length} linhas
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Confirmar Processamento
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CSVPreview;
