import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
    title?: string;
    icon?: LucideIcon;
    loading?: boolean;
    error?: string;
    children: React.ReactNode;
    className?: string;
    fullHeight?: boolean;
    onClick?: () => void;
    // Para dados estatísticos
    value?: string | number;
    subtitle?: string;
    trend?: {
        value: number;
        isPositive: boolean;
    };
}

const Card: React.FC<CardProps> = ({
    title,
    icon: Icon,
    loading,
    error,
    children,
    className = "",
    fullHeight = false,
    onClick,
    value,
    subtitle,
    trend,
}) => {
    // Renderiza o esqueleto de loading
    if (loading) {
        return (
            <div
                className={`
        bg-white rounded-lg border border-gray-200 shadow-sm p-6
        ${fullHeight ? "h-full" : ""}
        animate-pulse
      `}
            >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
            </div>
        );
    }

    // Renderiza mensagem de erro
    if (error) {
        return (
            <div className="bg-red-50 rounded-lg border border-red-200 p-6">
                <p className="text-red-600 text-sm">{error}</p>
            </div>
        );
    }

    // Card estatístico
    if (value !== undefined) {
        return (
            <div
                className={`
        bg-white rounded-lg border border-gray-200 shadow-sm p-6
        ${fullHeight ? "h-full" : ""}
        ${
            onClick
                ? "cursor-pointer hover:border-primary-300 transition-colors"
                : ""
        }
        ${className}
      `}
                onClick={onClick}
            >
                <div className="flex items-center justify-between">
                    <div>
                        {title && (
                            <h3 className="text-sm font-medium text-gray-500">
                                {title}
                            </h3>
                        )}
                        <div className="mt-2 flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">
                                {value}
                            </p>
                            {trend && (
                                <span
                                    className={`
                  ml-2 text-sm font-medium
                  ${trend.isPositive ? "text-green-600" : "text-red-600"}
                `}
                                >
                                    {trend.isPositive ? "↑" : "↓"}{" "}
                                    {Math.abs(trend.value)}%
                                </span>
                            )}
                        </div>
                        {subtitle && (
                            <p className="mt-1 text-sm text-gray-500">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {Icon && (
                        <div className="bg-primary-50 rounded-lg p-3">
                            <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Card padrão
    return (
        <div
            className={`
      bg-white rounded-lg border border-gray-200 shadow-sm
      ${fullHeight ? "h-full" : ""}
      ${
          onClick
              ? "cursor-pointer hover:border-primary-300 transition-colors"
              : ""
      }
      ${className}
    `}
            onClick={onClick}
        >
            {(title || Icon) && (
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        {title && (
                            <h3 className="text-lg font-medium text-gray-900">
                                {title}
                            </h3>
                        )}
                        {Icon && <Icon className="h-5 w-5 text-gray-500" />}
                    </div>
                </div>
            )}
            <div className="p-6">{children}</div>
        </div>
    );
};

export default Card;
