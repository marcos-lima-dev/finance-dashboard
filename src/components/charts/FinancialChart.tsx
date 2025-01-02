// src/components/charts/FinancialChart.tsx
import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const FinancialChart = ({ data }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
        });
    };

    // Encontrar valor máximo para definir o domínio do eixo Y
    const maxValue = Math.max(
        ...data.map((item) => Math.max(item.income || 0, item.expense || 0))
    );
    const yAxisDomain = [0, Math.ceil(maxValue * 1.1)]; // 10% a mais para margem

    // Customização do Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                    <p className="font-medium mb-2">{formatDate(label)}</p>
                    {payload.map((entry, index) => (
                        <p
                            key={index}
                            className={`text-sm ${
                                entry.name === "Receitas"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {entry.name}: {formatCurrency(entry.value || 0)}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Receitas e Despesas</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                className="stroke-gray-200"
                                horizontal={true}
                                vertical={false}
                            />
                            <XAxis
                                dataKey="date"
                                tickFormatter={formatDate}
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                interval="preserveStartEnd"
                            />
                            <YAxis
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                tickFormatter={formatCurrency}
                                domain={yAxisDomain}
                                width={80}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend
                                verticalAlign="top"
                                height={36}
                                iconType="circle"
                            />
                            <Line
                                type="monotone"
                                dataKey="income"
                                name="Receitas"
                                stroke="#22c55e"
                                activeDot={{ r: 8 }}
                                strokeWidth={2}
                                dot={{ r: 4, strokeWidth: 2 }}
                                connectNulls
                            />
                            <Line
                                type="monotone"
                                dataKey="expense"
                                name="Despesas"
                                stroke="#ef4444"
                                activeDot={{ r: 8 }}
                                strokeWidth={2}
                                dot={{ r: 4, strokeWidth: 2 }}
                                connectNulls
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default FinancialChart;
