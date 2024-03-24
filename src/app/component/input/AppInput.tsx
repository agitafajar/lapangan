import { EyeIcon, EyeOffIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";

interface InputFieldProps {
  type: "text" | "password" | "search";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const AppInput: React.FC<InputFieldProps> = ({
  type,
  placeholder = "",
  value = "",
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      {type === "search" && (
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </span>
      )}
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="pl-10 pr-4 py-2 w-full border rounded-md bg-[#F6F7FB] focus:outline-none focus:ring focus:ring-blue-400"
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOffIcon className="w-5 h-5 text-gray-400" />
          ) : (
            <EyeIcon className="w-5 h-5 text-gray-400" />
          )}
        </button>
      )}
    </div>
  );
};

export default AppInput;
