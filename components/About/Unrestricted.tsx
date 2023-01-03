import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";

type UnrestrictedProps = {};

const Unrestricted: React.FC<UnrestrictedProps> = () => {
  return (
    <SectionLayout
      title={"Your Vision Unrestricted"}
      className={"py-[70px] bg-white"}
      classTitle={"pb-[20px] text-[25px] leading-[35px] text-black"}
    >
      <div>
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <p className="leading-relaxed mb-8">
              Our membership is composed of residential and commercial brokers,
              salespeople, property managers, appraisers, counselors, and others
              engaged in the real estate industry. Members belong to one or more
              of approximately 1,200 local associations/boards and 54 state and
              territory associations of REALEST®.
            </p>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <p className="leading-relaxed mb-8">
              The term REALTOR® is a registered collective membership mark that
              identifies a real estate professional who is a member of the
              National Association of REAL ESTATE® and subscribes to its strict
              Code of Ethics.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
export default Unrestricted;
