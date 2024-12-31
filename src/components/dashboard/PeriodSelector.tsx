// src/components/dashboard/PeriodSelector.tsx
import React from "react";

interface PeriodSelectorProps {
    selected: "day" | "week" | "month" | "year";
    onChange: (period: "day" | "week" | "month" | "year") => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
    selected,
    onChange,
}) => {
    const periods = [
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
        { value: "year", label: "Year" },
    ] as const;

    return (
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {periods.map((period) => (
                <button
                    key={period.value}
                    onClick={() => onChange(period.value)}
                    className={`
            px-4 py-1.5 text-sm font-medium rounded-md transition-colors
            ${
                selected === period.value
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }
          `}
                >
                    {period.label}
                </button>
            ))}
        </div>
    );
};

export default PeriodSelector;
