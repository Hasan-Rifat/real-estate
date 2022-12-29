import React from "react";

type ResidentialProps = {};

const Residential: React.FC<ResidentialProps> = () => {
  const tagData = [
    { id: 1, img: "" },
    { id: 2, img: "" },
    { id: 3, img: "" },
    { id: 4, img: "" },
    { id: 5, img: "" },
    { id: 6, img: "" },
  ];
  return (
    <section className="">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-3 gap-7">
            <div className="p-[15px]">
              <h2>Residential </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi dunt
              </p>
            </div>
            <div className="p-[15px]"></div>
            <div className="p-[15px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Residential;
