import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface AppRadioProps {
  options: RadioOption[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
}

const AppRadio: React.FC<AppRadioProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleRadioChange(option.value)}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default AppRadio;
