// src/pages/Dashboard.tsx
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import DashboardGrid from "../components/dashboard/DashboardGrid";
import PeriodSelector from "../components/dashboard/PeriodSelector";
import { Upload, RefreshCw } from "lucide-react";

const Dashboard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState<
        "day" | "week" | "month" | "year"
    >("week");

    const handleRefresh = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <Layout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Financial Overview
                            </h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Monitor your financial performance and insights
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleRefresh}
                                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <RefreshCw className="h-4 w-4" />
                                Refresh
                            </button>

                            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                                <Upload className="h-4 w-4" />
                                Upload Data
                            </button>
                        </div>
                    </div>

                    {/* Period Selector */}
                    <PeriodSelector
                        selected={selectedPeriod}
                        onChange={setSelectedPeriod}
                    />
                </div>

                {/* Main Dashboard Content */}
                <DashboardGrid isLoading={isLoading} />

                {/* Footer */}
                <div className="text-center text-sm text-gray-500">
                    <p>
                        Last updated: {new Date().toLocaleDateString()}{" "}
                        {new Date().toLocaleTimeString()}
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
