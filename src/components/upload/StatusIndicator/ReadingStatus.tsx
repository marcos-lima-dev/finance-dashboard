// src/components/upload/StatusIndicator/ReadingStatus.tsx
import React from "react";
import { Loader2 } from "lucide-react";

interface ReadingStatusProps {
    fileName: string;
}

const ReadingStatus: React.FC<ReadingStatusProps> = ({ fileName }) => (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
            <div>
                <h4 className="font-semibold text-blue-700">Lendo arquivo</h4>
                <p className="text-sm text-blue-600">
                    Arquivo selecionado: {fileName}
                </p>
            </div>
        </div>
        <div className="mt-2 w-full bg-blue-100 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-1/3 transition-all duration-500"></div>
        </div>
    </div>
);

export default ReadingStatus;
