import React from "react";

const Select = ({options,name,className}) => {
  return (
    <select
      name={name}
      className={`text-xs text-gren-gray-scale-700 ${className}`}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
