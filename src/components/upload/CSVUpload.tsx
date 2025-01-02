import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/Alert";
import { processCSV, previewCSV } from "@/services/csvService";
import { ProcessedFinancialData, ValidationError } from "@/types/financial";
import UploadZone from "./UploadZone";
import FilePreview from "./FilePreview";
import StatusIndicator from "./StatusIndicator";
import { FileInstructions } from "./FileInstructions";

interface CSVUploadProps {
    onDataProcessed: (data: ProcessedFinancialData) => void;
}

interface PreviewData {
    data: any[];
    errors: ValidationError[];
}

export type UploadStatus =
    | "idle"
    | "reading"
    | "processing"
    | "preview"
    | "success"
    | "error";

const CSVUpload: React.FC<CSVUploadProps> = ({ onDataProcessed }) => {
    const [status, setStatus] = useState<UploadStatus>("idle");
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState<string>("");
    const [previewData, setPreviewData] = useState<PreviewData | null>(null);

    const handleFileProcess = async (file: File) => {
        setStatus("reading");
        setFileName(file.name);
        setError("");

        try {
            if (!file.name.endsWith(".csv")) {
                throw new Error("Por favor, envie apenas arquivos CSV");
            }

            const preview = await previewCSV(file);
            setPreviewData(preview);
            setStatus("preview");
        } catch (error) {
            setStatus("error");
            setError(
                error instanceof Error
                    ? error.message
                    : "Erro ao processar arquivo"
            );
        }
    };

    const handleConfirmProcessing = async () => {
        if (!previewData?.data) return;

        setStatus("processing");
        try {
            const processedData = await processCSV(previewData.data);
            setStatus("success");
            onDataProcessed(processedData);
        } catch (error) {
            setStatus("error");
            setError(
                error instanceof Error
                    ? error.message
                    : "Erro ao processar arquivo"
            );
        }
    };

    const handleCancelProcessing = () => {
        setPreviewData(null);
        setStatus("idle");
        setError("");
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            {status !== "preview" && (
                <UploadZone status={status} onFileSelect={handleFileProcess} />
            )}

            {status === "preview" && previewData && (
                <FilePreview
                    data={previewData}
                    onConfirm={handleConfirmProcessing}
                    onCancel={handleCancelProcessing}
                />
            )}

            {status !== "preview" && (
                <StatusIndicator status={status} fileName={fileName} />
            )}

            {error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {status !== "preview" && <FileInstructions />}
        </div>
    );
};

export default CSVUpload;
