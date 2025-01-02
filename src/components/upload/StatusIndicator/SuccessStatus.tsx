// src/components/upload/StatusIndicator/SuccessStatus.tsx
import React from "react";
import { Check } from "lucide-react";

const SuccessStatus: React.FC = () => (
    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
            </div>
            <div>
                <h4 className="font-semibold text-green-700">
                    Processamento concluído!
                </h4>
                <p className="text-sm text-green-600">
                    Arquivo processado com sucesso. Gerando visualizações...
                </p>
            </div>
        </div>
        <div className="mt-2 w-full bg-green-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-full transition-all duration-500"></div>
        </div>
    </div>
);

export default SuccessStatus;
