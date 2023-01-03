import React from "react";

type AdvanceSearchProps = {};

const AdvanceSearch: React.FC<AdvanceSearchProps> = () => {
  const selectOne = [
    { id: 0, tag: "Properly Type " },
    { id: 1, tag: "Commercial " },
    { id: 2, tag: "-Office" },
    { id: 3, tag: "-Shop" },
    { id: 4, tag: "Residential " },
    { id: 5, tag: "-Apartment" },
    { id: 6, tag: "-Condo" },
    { id: 7, tag: "-Multi Family Home" },
    { id: 8, tag: "-Single Family Home " },
    { id: 9, tag: "-Studio" },
    { id: 10, tag: "-Villa" },
  ];
  const selectTwo = [
    { id: 1, tag: "All Cities" },
    { id: 2, tag: "Chicago Illinois" },
    { id: 3, tag: "Los Angeles California" },
    { id: 4, tag: "Miami Florida" },
    { id: 5, tag: "New York New York" },
  ];
  const selectThree = [
    { id: 0, number: "Bedrooms" },
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 10, number: 10 },
    { id: 11, number: "any" },
  ];

  const selectFours = [
    { id: 0, number: "Max. Price" },
    { id: 1, number: "Any" },
    { id: 2, number: "5,000" },
    { id: 3, number: "10,000" },
    { id: 4, number: "50,000" },
    { id: 5, number: "100,000" },
    { id: 6, number: "200,000" },
    { id: 7, number: "300,000" },
    { id: 8, number: "400,000" },
    { id: 9, number: "500,000" },
    { id: 10, number: "600,000" },
    { id: 11, number: "700,000" },
    { id: 12, number: "800,000" },
    { id: 13, number: "900,000" },
    { id: 14, number: "1,000,000" },
    { id: 15, number: "1,500,000" },
    { id: 16, number: "2,000,000" },
    { id: 17, number: "5,000,000" },
    { id: 18, number: "10,000,000" },
  ];
  return (
    <div className="absolute top-[50%] md:top-[78%] left-0 right-0 ">
      <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center ">
        <div className="p-[20px] lg:p-[30px] bg-white shadow-2xl rounded-[5px] grid sm:grid-cols-1 md:grid-cols-5 gap-5 mx-auto items-end w-full">
          {/* single item */}
          <div className="flex flex-col">
            <label className="font-semibold text-[#222222]" htmlFor="">
              Looking for
            </label>
            <select className="mt-3 border-[#dce0e0] border-[1px] p-[10px] rounded-[5px]">
              {selectOne.map((item) => (
                <option className="p-[10px] " key={item.id}>
                  {item.tag}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-[#222222]" htmlFor="">
              Location
            </label>
            <select className="mt-3 border-[#dce0e0] border-[1px] p-[10px] rounded-[5px]">
              {selectTwo.map((item) => (
                <option className="p-[10px] " key={item.id}>
                  {item.tag}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-[#222222]" htmlFor="">
              PROPERTY SIZE
            </label>
            <select className="mt-3 border-[#dce0e0] border-[1px] p-[10px] rounded-[5px]">
              {selectThree.map((item) => (
                <option className="p-[10px] " key={item.id}>
                  {item.number}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-[#222222]" htmlFor="">
              YOUR BUDGET
            </label>
            <select className="mt-3 border-[#dce0e0] border-[1px] p-[10px] rounded-[5px]">
              {selectFours.map((item) => (
                <option className="p-[10px] " key={item.id}>
                  {item.number}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <button className="bg-[#00aeff] px-[24px] py-[12px] text-[15px] rounded-[3px] text-white font-medium">
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvanceSearch;
