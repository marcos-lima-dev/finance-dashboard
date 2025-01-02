import React from "react";

interface AlertProps {
    children: React.ReactNode;
    variant?: "default" | "destructive" | "success";
    className?: string;
}

interface AlertDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const Alert = ({
    children,
    variant = "default",
    className = "",
}: AlertProps) => {
    const variants = {
        default: "bg-gray-100 text-gray-800 border-gray-200",
        destructive: "bg-red-50 text-red-800 border-red-200",
        success: "bg-green-50 text-green-800 border-green-200",
    };

    return (
        <div
            className={`rounded-lg border p-4 ${variants[variant]} ${className}`}
        >
            {children}
        </div>
    );
};

export const AlertDescription = ({
    children,
    className = "",
}: AlertDescriptionProps) => {
    return <div className={`text-sm mt-1 ${className}`}>{children}</div>;
};
