"use client";

import React, { useState } from "react";
import AppButton from "../component/button/AppButton";
import AppDropdown from "../component/dropdown/AppDropdown";
import AppCheckbox from "../component/input/AppCheckbox";
import AppInput from "../component/input/AppInput";
import AppRadio from "../component/input/AppRadio";
import AppActionButton from "../component/button/AppActionButton";

export default function Guidepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const handleCheckboxChange = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  const [selectedRadioValue, setSelectedRadioValue] = useState("");

  const optionsRadio = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleRadioChange = (selectedValue: string) => {
    setSelectedRadioValue(selectedValue);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const optionsDropdown = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };

  return (
    <main>
      <div className="grid grid-cols-3 gap-4 w-full bg-fuchsia-50 mt-12">
        <AppButton
          label="Simpan"
          onClick={handleClick}
          type="primary"
          isLoading={isLoading}
          width="100%"
        />
        <AppButton
          label="Kembali"
          onClick={handleClick}
          type="outline"
          isLoading={isLoading}
        />
        <AppButton
          label="Error"
          onClick={handleClick}
          type="error"
          isLoading={isLoading}
          width="100%"
        />

        <AppInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <AppInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <AppInput
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />

        {username}
        {password}
        {search}
        <div>
          <h2>Select Fruits:</h2>
          <AppCheckbox
            options={options}
            selectedValues={selectedValues}
            onChange={handleCheckboxChange}
          />
          <h3>Selected Fruits:</h3>
          <ul>
            {selectedValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Select Gender:</h2>
          <AppRadio
            options={options}
            selectedValue={selectedRadioValue}
            onChange={handleRadioChange}
          />
          <h3>Selected Gender: {selectedRadioValue}</h3>
        </div>
      </div>

      <div>
        <h2>Select Fruit:</h2>
        <AppDropdown
          options={optionsDropdown}
          selectedValue={selectedValue}
          onChange={handleDropdownChange}
        />
        <h3>Selected Fruit: {selectedValue}</h3>
      </div>
      <div className="flex gap-6">
        <AppActionButton type="back" onClick={handleClick} />
        <AppActionButton type="create" onClick={handleClick} />
        <AppActionButton type="edit" onClick={handleClick} />
        <AppActionButton type="delete" onClick={handleClick} />
      </div>
    </main>
  );
}
