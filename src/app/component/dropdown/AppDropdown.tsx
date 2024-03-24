import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface AppDropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  placeholder?: string;
}

const AppDropdown: React.FC<AppDropdownProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={toggleDropdown}
        className="ring-1 ring-primary rounded-md py-2 px-4 flex items-center justify-between w-full"
      >
        <span>{selectedValue || placeholder}</span>
        {isOpen ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronUp className="w-5 h-5" />
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`block py-2 px-4 w-full text-left hover:bg-gray-100 ${
                selectedValue === option.value ? "font-bold" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppDropdown;
