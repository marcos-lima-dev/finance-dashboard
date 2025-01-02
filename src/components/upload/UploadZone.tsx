// src/components/upload/UploadZone.tsx
import React, { useState } from "react";
import { FileUp } from "lucide-react";
import { UploadStatus } from "./CSVUpload";

interface UploadZoneProps {
    status: UploadStatus;
    onFileSelect: (file: File) => Promise<void>;
}

const UploadZone: React.FC<UploadZoneProps> = ({ status, onFileSelect }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.currentTarget.contains(e.relatedTarget as Node)) return;
        setIsDragging(false);
    };

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (!file) return;

        await onFileSelect(file);
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        await onFileSelect(file);
    };

    const isDisabled = status === "processing" || status === "reading";

    return (
        <div
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
            } ${
                isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
        >
            <div className="flex flex-col items-center gap-4">
                <FileUp className="w-12 h-12 text-gray-400" />
                <div className="text-lg font-medium">
                    {status === "idle"
                        ? "Arraste e solte seu arquivo CSV aqui"
                        : "Processando..."}
                </div>
                <div className="text-sm text-gray-500">ou</div>
                <label
                    className={`cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors ${
                        isDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Selecionar Arquivo
                    <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        onChange={handleFileSelect}
                        disabled={isDisabled}
                    />
                </label>
            </div>
        </div>
    );
};

export default UploadZone;
