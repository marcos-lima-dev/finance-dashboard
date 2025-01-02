// src/pages/Dashboard.tsx
import React, { useState } from "react";
import SummaryCards from "@/components/dashboard/SummaryCards";
import FinancialChart from "@/components/charts/FinancialChart";
import CategoryChart from "@/components/charts/CategoryChart";
import CSVUpload from "@/components/upload/CSVUpload";
import { ProcessedFinancialData } from "@/types/financial";

const Dashboard = () => {
    const [dashboardData, setDashboardData] =
        useState<ProcessedFinancialData | null>(null);

    const handleDataProcessed = (data: ProcessedFinancialData) => {
        setDashboardData(data);
    };

    // Preparar dados para o gráfico de categorias
    const categoryChartData = dashboardData
        ? Object.entries(dashboardData.summary.categorySummary).map(
              ([name, value]) => ({
                  name,
                  value,
                  percent: (value / dashboardData.summary.totalExpense) * 100,
              })
          )
        : [];

    return (
        <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
                {dashboardData && (
                    <button
                        onClick={() => setDashboardData(null)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                    >
                        Carregar Novo Arquivo
                    </button>
                )}
            </div>

            {!dashboardData ? (
                <CSVUpload onDataProcessed={handleDataProcessed} />
            ) : (
                <>
                    <SummaryCards
                        data={{
                            totalIncome: dashboardData.summary.totalIncome,
                            totalExpense: dashboardData.summary.totalExpense,
                            balance: dashboardData.summary.balance,
                        }}
                    />

                    <div className="grid gap-6 md:grid-cols-2">
                        <FinancialChart data={dashboardData.monthlyData} />
                        <CategoryChart data={categoryChartData} />
                    </div>

                    {/* Botão para mobile que já existe */}
                    <div className="fixed bottom-4 right-4 md:hidden">
                        <button
                            onClick={() => setDashboardData(null)}
                            className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
                        >
                            Carregar Novo Arquivo
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
