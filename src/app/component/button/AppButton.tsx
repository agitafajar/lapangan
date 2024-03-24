import { Loader2 } from "lucide-react";
import React from "react";

interface AppButtonProps {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "primary" | "outline" | "error";
  width?: string;
  px?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  type = "primary",
  width = "",
  px = "4",
}) => {
  const buttonClasses = `py-2 px-${px} rounded-md focus:outline-none ${
    isLoading ? "cursor-not-allowed" : ""
  }`;

  const primaryButtonClasses = `bg-primary  ring-1 ring-primary text-white font-semibold ${
    disabled || isLoading ? "opacity-50" : "hover:bg-blue-600"
  }`;
  const outlineButtonClasses = `ring-1 ring-primary text-primary font-semibold ${
    disabled || isLoading ? "opacity-50" : "hover:bg-blue-50"
  }`;
  const errorButtonClasses = `bg-error  ring-1 ring-error text-white font-semibold ${
    disabled || isLoading ? "opacity-50" : "hover:bg-blue-600"
  }`;
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${buttonClasses} ${
        type === "primary"
          ? primaryButtonClasses
          : type === "outline"
          ? outlineButtonClasses
          : errorButtonClasses
      }`}
      style={{ width: width }}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
        </span>
      ) : (
        label
      )}
    </button>
  );
};

export default AppButton;
