import * as React from "react";

interface OutlineInputProps {
  value: string;
  name: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
  type?: string;
}

const OutlineInput: React.FC<OutlineInputProps> = ({
  placeholder,
  value,
  name,
  onChange,
  type = "text",
}) => {
  return (
    <input
      className="border-b-[1px] border-transparent border-b-gray-300 w-full focus:border-b-gray-300 focus:border-none text-xl"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
    />
  );
};

export default OutlineInput;
