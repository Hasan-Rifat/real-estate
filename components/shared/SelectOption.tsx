import React from "react";

type SelectOptionProps = {
  selectData: {
    id: number;
    value: string;
  }[];
  className?: string;
};

const SelectOption: React.FC<SelectOptionProps> = ({
  selectData: selactData,
  className,
}) => {
  return (
    <select
      className={`px-[16px] py-[14px] border-[#dce0e0] border-[1px] rounded-[2px] mb-2 ${className}`}
    >
      {selactData.map((item) => (
        <option
          className={`px-[16px]  border-[#dce0e0] border-[1px] rounded-[2px] mb-2 ${className}`}
          key={item.id}
        >
          {item.value}
        </option>
      ))}
    </select>
  );
};
export default SelectOption;
