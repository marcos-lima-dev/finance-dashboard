import React from "react";
import { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "left",
    fullWidth = false,
    loading = false,
    disabled,
    className = "",
    children,
    ...props
}) => {
    // Base classes sempre aplicadas
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

    // Classes específicas para cada variante
    const variantClasses = {
        primary:
            "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
        secondary:
            "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500",
        outline:
            "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500",
        ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    // Classes específicas para cada tamanho
    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    // Classes para o ícone baseadas no tamanho
    const iconSizeClasses = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-5 w-5",
    };

    // Classes para o espaçamento do ícone
    const iconSpacingClasses = {
        left: "mr-2",
        right: "ml-2",
    };

    const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

    return (
        <button
            className={buttonClasses}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                    Processing...
                </>
            ) : (
                <>
                    {Icon && iconPosition === "left" && (
                        <Icon
                            className={`${iconSizeClasses[size]} ${iconSpacingClasses[iconPosition]}`}
                        />
                    )}
                    {children}
                    {Icon && iconPosition === "right" && (
                        <Icon
                            className={`${iconSizeClasses[size]} ${iconSpacingClasses[iconPosition]}`}
                        />
                    )}
                </>
            )}
        </button>
    );
};

export default Button;
