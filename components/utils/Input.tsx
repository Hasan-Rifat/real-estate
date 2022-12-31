import React from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  className,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`px-[16px] py-3 border-[#dce0e0] border-[1px] rounded-[2px] mb-2 ${className}`}
    />
  );
};
export default Input;
