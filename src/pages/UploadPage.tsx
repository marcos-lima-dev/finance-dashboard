import React from "react";
import CSVUpload from "../components/upload/CSVUpload";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../components/ui/Card";
const UploadPage = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Upload de Dados</h1>
                <p className="text-gray-600">
                    Faça upload do seu arquivo CSV com dados financeiros
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Upload de CSV</CardTitle>
                </CardHeader>
                <CardContent>
                    <CSVUpload />
                </CardContent>
            </Card>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Instruções</h2>
                <ul className="space-y-2 text-gray-600">
                    <li>• O arquivo deve estar no formato CSV</li>
                    <li>
                        • As colunas devem incluir: data, tipo, valor, categoria
                    </li>
                    <li>
                        • Os valores devem usar ponto como separador decimal
                    </li>
                    <li>• As datas devem estar no formato DD/MM/YYYY</li>
                </ul>
            </div>
        </div>
    );
};

export default UploadPage;
