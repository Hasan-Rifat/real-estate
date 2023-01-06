import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import SelectOption from "./SelectOption";

type InquiryFormProps = {};

const InquiryForm: React.FC<InquiryFormProps> = () => {
  const [inquiryType, setInquiryType] = useState("");
  const [allInformation, setAllInformation] = useState("");
  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [inquiryTypeData] = useState([
    {
      id: 1,
      value: "Select",
    },
    {
      id: 2,
      value: "Purchase",
    },
    {
      id: 3,
      value: "Rent",
    },
    {
      id: 4,
      value: "Sell",
    },
    {
      id: 5,
      value: "Miss",
    },
    {
      id: 6,
      value: "Evaluation",
    },
    {
      id: 7,
      value: "Mortgage",
    },
  ]);
  const [locationData] = useState([
    {
      id: 1,
      value: "Select",
    },
    {
      id: 2,
      value: "Chicago",
    },
    {
      id: 3,
      value: "Los Angeles",
    },
    {
      id: 4,
      value: "Miami",
    },
    {
      id: 5,
      value: "New York",
    },
  ]);
  const [propertyData] = useState([
    {
      id: 1,
      value: "Select type",
    },
    {
      id: 2,
      value: "Commercial",
    },
    {
      id: 3,
      value: "- Office",
    },
    {
      id: 4,
      value: "- Shop",
    },
    {
      id: 5,
      value: "Residential",
    },
    {
      id: 6,
      value: "- Apartment",
    },
    {
      id: 7,
      value: "- Condo",
    },
    {
      id: 8,
      value: "- Multi Family Home",
    },
    {
      id: 9,
      value: "- Single Family Home",
    },
    {
      id: 10,
      value: "- Studio",
    },
    {
      id: 11,
      value: "- Villa",
    },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // perform form submission logic here
  };

  return (
    <div>
      <div className="bg-white px-[50px] pt-[50px] pb-[30px]">
        <h2 className="text-[25px] leading-[30px] text-black mb-4 font-normal">
          Real Estate Inquiry Form
        </h2>
        <p className="text-[18px] leading-[27px] text-black font-light mb-5">
          Design custom lead capture forms that integrate with the Houzez CRM
        </p>
        <form className="">
          {/* Inquiry Type */}
          <div className="">
            <Label label={"Inquiry Type"} />
            <SelectOption
              onChange={""}
              selectData={inquiryTypeData}
              className={"w-full"}
            />
          </div>
          <div>
            <Label label={"Information"} />
            <Input
              className={"w-full mb-2"}
              name={"imA"}
              type={"text"}
              placeholder={"I'm a"}
            />
          </div>
          <div className="flex gap-[10px]">
            <Input
              className={"w-[50%] mb-2"}
              name={"firstName"}
              type={"text"}
              placeholder={"First Name"}
            />

            <Input
              className={"w-[50%] mb-2"}
              name={"LastName"}
              type={"text"}
              placeholder={"Last Name"}
            />
          </div>
          <div>
            <Input
              className={"w-full mb-2"}
              name={"email"}
              type={"email"}
              placeholder={"Email Address"}
            />
          </div>
          {/* Location */}
          <div>
            <Label label={"Location"} />
            <div className="flex gap-[10px]">
              <SelectOption
                onChange={""}
                selectData={inquiryTypeData}
                className={"w-[50%]"}
              />
              <Input
                placeholder={"zipCode"}
                type={"text"}
                name={"zipCode"}
                className={"w-[50%] mb-2"}
              />
            </div>
          </div>

          {/* property */}
          <div className="mb-4">
            <Label label={"Property"} />
            <SelectOption
              onChange={""}
              selectData={propertyData}
              className={"w-full"}
            />
            <div>
              <div className="flex gap-[10px]">
                <Input
                  placeholder={"Max price"}
                  type={"number"}
                  name={"maxPrice"}
                  className={"w-[50%] mb-2"}
                />
                <Input
                  placeholder={"Minimum size (Sq Ft)"}
                  type={"number"}
                  name={"minimumSize"}
                  className={"w-[50%] mb-2"}
                />
              </div>
              <div className="flex gap-[10px]">
                <Input
                  placeholder={"Number of beds"}
                  type={"number"}
                  name={"numberOfBeds"}
                  className={"w-[50%] mb-2"}
                />
                <Input
                  placeholder={"Number of baths"}
                  type={"number"}
                  name={"numberOfBaths"}
                  className={"w-[50%] mb-2"}
                />
              </div>
            </div>
          </div>
          {/* GDPR Agreement */}
          <div>
            <Label label={"GDPR Agreement"} />
            <input type="checkbox" />{" "}
            <span className="text-[15px] leading-[25px] text-secondary">
              I consent to having this website store my submitted <br />{" "}
              information
            </span>
          </div>
          <div className="mt-[30px]">
            <button
              type="submit"
              className="rounded-[4px]  bg-[#00aeff] hover:bg-[#33beff] text-[16px] text-white px-[30px] py-[15px] w-full"
            >
              submite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InquiryForm;
