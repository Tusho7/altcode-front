import React from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="bg-transparent border-b border-white focus:outline-none text-white placeholder-white pl-2 pb-2 w-full pt-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
