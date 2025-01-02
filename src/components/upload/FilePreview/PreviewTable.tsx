// src/components/upload/FilePreview/PreviewTable.tsx
import React from "react";

interface PreviewTableProps {
    data: any[];
    errors?: any[];
}

const PreviewTable: React.FC<PreviewTableProps> = ({ data, errors }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {Object.keys(data[0] || {}).map((column) => (
                        <th
                            key={column}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.slice(0, 5).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.entries(row).map(([column, value]) => {
                            const hasError = errors?.some(
                                (error) =>
                                    error.row === rowIndex + 2 &&
                                    error.column === column
                            );

                            return (
                                <td
                                    key={`${rowIndex}-${column}`}
                                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                                        hasError
                                            ? "text-red-500 bg-red-50"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {value?.toString() || ""}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default PreviewTable;
