// src/components/dashboard/DashboardGrid.tsx
import React from "react";
// Removida importação não utilizada do Card
import {
    Wallet,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    DollarSign,
    PieChart,
} from "lucide-react";

// Interfaces
interface SummaryCard {
    title: string;
    value: string;
    trend: {
        value: number;
        isPositive: boolean;
    };
    icon: React.ElementType;
    subtitle: string;
}

interface DashboardGridProps {
    isLoading?: boolean;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ isLoading = false }) => {
    // Dados dos cards
    const summaryCards: SummaryCard[] = [
        {
            title: "Total Revenue",
            value: "R$ 48,500.00",
            trend: { value: 12.5, isPositive: true },
            icon: Wallet,
            subtitle: "Last 30 days",
        },
        {
            title: "Expenses",
            value: "R$ 15,200.00",
            trend: { value: 8.2, isPositive: false },
            icon: DollarSign,
            subtitle: "Last 30 days",
        },
        {
            title: "Net Profit",
            value: "R$ 33,300.00",
            trend: { value: 15.3, isPositive: true },
            icon: TrendingUp,
            subtitle: "Last 30 days",
        },
        {
            title: "Profit Margin",
            value: "68.7%",
            trend: { value: 5.1, isPositive: true },
            icon: PieChart,
            subtitle: "Last 30 days",
        },
    ];

    // Loading state
    if (isLoading) {
        return <div className="animate-pulse">Loading...</div>;
    }

    return (
        <div className="w-full space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {summaryCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 border border-gray-200"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    {card.title}
                                </p>
                                <h3 className="text-2xl font-semibold mt-2 text-gray-900">
                                    {card.value}
                                </h3>
                                <div className="flex items-center mt-2">
                                    <span
                                        className={`flex items-center text-sm ${
                                            card.trend.isPositive
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {card.trend.isPositive ? (
                                            <ArrowUpRight className="h-4 w-4 mr-1" />
                                        ) : (
                                            <ArrowDownRight className="h-4 w-4 mr-1" />
                                        )}
                                        {card.trend.value}%
                                    </span>
                                    <span className="text-gray-500 text-sm ml-2">
                                        {card.subtitle}
                                    </span>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <card.icon className="h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Chart Card */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="font-medium text-gray-900">
                                Revenue Overview
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
                                <p className="text-gray-500">
                                    Chart coming soon...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Cards */}
                <div className="space-y-4">
                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="font-medium text-gray-900">
                                Recent Activity
                            </h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            New Transaction
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Payment received
                                        </p>
                                    </div>
                                    <span className="text-green-600 text-sm font-medium">
                                        R$ 1,200.00
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Expense Added
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Monthly service
                                        </p>
                                    </div>
                                    <span className="text-red-600 text-sm font-medium">
                                        R$ 350.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="font-medium text-gray-900">
                                Quick Actions
                            </h3>
                        </div>
                        <div className="p-6 space-y-3">
                            <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                Add New Transaction
                            </button>
                            <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                Generate Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardGrid;
