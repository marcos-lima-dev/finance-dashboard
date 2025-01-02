// src/components/upload/FilePreview/index.tsx
import React from "react";
import PreviewTable from "./PreviewTable";
import ErrorList from "./ErrorList";
import ActionButtons from "./ActionButtons";

interface FilePreviewProps {
    data: {
        data: any[];
        errors: any[];
    };
    onConfirm: () => void;
    onCancel: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({
    data,
    onConfirm,
    onCancel,
}) => {
    return (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Preview do arquivo</h3>

            {data.errors && data.errors.length > 0 && (
                <ErrorList errors={data.errors} />
            )}

            <PreviewTable data={data.data} errors={data.errors} />

            <div className="mt-4 text-sm text-gray-500">
                Mostrando {Math.min(5, data.data.length)} de {data.data.length}{" "}
                linhas
            </div>

            <ActionButtons
                hasErrors={data.errors?.length > 0}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </div>
    );
};

export default FilePreview;
