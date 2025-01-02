// src/components/upload/StatusIndicator/ProcessingStatus.tsx
import React from "react";
import { Loader2 } from "lucide-react";

const ProcessingStatus: React.FC = () => (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center space-x-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
            <div>
                <h4 className="font-semibold text-blue-700">
                    Processando dados
                </h4>
                <p className="text-sm text-blue-600">
                    Validando e organizando as informações
                </p>
            </div>
        </div>
        <div className="mt-2 w-full bg-blue-100 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-2/3 transition-all duration-500"></div>
        </div>
        <ul className="mt-2 text-sm text-blue-600 space-y-1">
            <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center text-xs">
                    ✓
                </span>
                <span>Arquivo carregado</span>
            </li>
            <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                    2
                </span>
                <span>Validando dados</span>
            </li>
            <li className="flex items-center space-x-2 text-blue-400">
                <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center text-xs">
                    3
                </span>
                <span>Gerando visualizações</span>
            </li>
        </ul>
    </div>
);

export default ProcessingStatus;
