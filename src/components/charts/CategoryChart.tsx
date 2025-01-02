import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

// Cores mais harmoniosas
const COLORS = [
    "#3b82f6", // blue-500
    "#22c55e", // green-500
    "#f59e0b", // amber-500
    "#ef4444", // red-500
    "#8b5cf6", // violet-500
    "#06b6d4", // cyan-500
];

const CategoryChart = ({ data }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    const formatPercent = (value) => {
        return `${value.toFixed(1)}%`;
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                    <p className="font-medium">{data.name}</p>
                    <p className="text-gray-600">{`Valor: ${formatCurrency(
                        data.value
                    )}`}</p>
                    <p className="text-gray-600">{`Percentual: ${formatPercent(
                        data.percent
                    )}`}</p>
                </div>
            );
        }
        return null;
    };

    // Calcula o total para os percentuais
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Recalcula os percentuais
    const processedData = data.map((item) => ({
        ...item,
        percent: (item.value / total) * 100,
    }));

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Distribuição por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={processedData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) =>
                                    `${name} (${formatPercent(percent)})`
                                }
                            >
                                {processedData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryChart;
