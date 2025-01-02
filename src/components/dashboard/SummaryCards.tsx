import React from "react";
import { Card, CardContent } from "../ui/Card";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

const SummaryCards = ({ data }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Receitas
                            </p>
                            <p className="text-2xl font-bold text-green-600">
                                {formatCurrency(data.totalIncome)}
                            </p>
                        </div>
                        <div className="bg-green-100 p-3 rounded-full">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Despesas
                            </p>
                            <p className="text-2xl font-bold text-red-600">
                                {formatCurrency(data.totalExpense)}
                            </p>
                        </div>
                        <div className="bg-red-100 p-3 rounded-full">
                            <TrendingDown className="h-6 w-6 text-red-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Saldo
                            </p>
                            <p
                                className={`text-2xl font-bold ${
                                    data.balance >= 0
                                        ? "text-blue-600"
                                        : "text-red-600"
                                }`}
                            >
                                {formatCurrency(data.balance)}
                            </p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-full">
                            <Wallet className="h-6 w-6 text-blue-600" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SummaryCards;
