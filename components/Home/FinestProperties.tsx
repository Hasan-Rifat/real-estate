import React from "react";

import {
  MdOutlineBedroomParent,
  MdOutlineBathroom,
  MdOutlineSquareFoot,
  MdPersonPin,
} from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RxPlusCircled } from "react-icons/rx";

import img1 from "../../images/Properties/006.jpg";
import img2 from "../../images/Properties/008.jpg";
import img3 from "../../images/Properties/012.jpg";
import img4 from "../../images/Properties/030.jpg";
import img5 from "../../images/Properties/035.jpg";
import img6 from "../../images/Properties/036.jpg";
import img7 from "../../images/Properties/040.jpg";
import img8 from "../../images/Properties/045.jpg";
import img9 from "../../images/Properties/047.jpg";
import Image from "next/image";

type FinestPropertiesProps = {};

const FinestProperties: React.FC<FinestPropertiesProps> = () => {
  const data = [
    {
      feature: "for Rent",
      id: 1,
      img: img1,
      title: "Light And Modern Apartment",
      description: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
      `,
      address: "2436 SW 8th St",
      City: "Miami",
      State: "Florida",
      ZipPostalCode: "33140",
      Area: "West Flagger",
      County: "United States  ",
      Apartment: "Property Type ",
      Bedrooms: 4,
      Bathrooms: 2,
      Garage: 1,
      YearBuilt: 2016,
      squareFt: "Property Type ",
      GarageSize: "200 SqFt",
      price: "4,500",
      PropertySize: "1200 Sq Ft",
      PropertyType: "Apartment",
      PropertyStatus: "For Rent",
    },
    {
      feature: "for sale",
      id: 2,
      img: img2,
      title: "Light And Modern Apartment",
      description: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
      `,
      address: "2436 SW 8th St",
      City: "Miami",
      State: "Florida",
      ZipPostalCode: "33140",
      Area: "West Flagger",
      County: "United States  ",
      Apartment: "Property Type ",
      Bedrooms: 4,
      Bathrooms: 2,
      Garage: 1,
      YearBuilt: 2016,
      squareFt: "Property Type ",
      GarageSize: "200 SqFt",
      price: "4,500",
      PropertySize: "1200 Sq Ft",
      PropertyType: "Apartment",
      PropertyStatus: "For Rent",
    },
    {
      feature: "for rent",
      id: 3,
      img: img3,
      title: "Light And Modern Apartment",
      description: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
      `,
      address: "2436 SW 8th St",
      City: "Miami",
      State: "Florida",
      ZipPostalCode: "33140",
      Area: "West Flagger",
      County: "United States  ",
      Apartment: "Property Type ",
      Bedrooms: 4,
      Bathrooms: 2,
      Garage: 1,
      YearBuilt: 2016,
      squareFt: "Property Type ",
      GarageSize: "200 SqFt",
      price: "4,500",
      PropertySize: "1200 Sq Ft",
      PropertyType: "Apartment",
      PropertyStatus: "For Rent",
    },
    {
      feature: "for sale",
      id: 4,
      img: img4,
      title: "Light And Modern Apartment",
      description: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
      `,
      address: "2436 SW 8th St",
      City: "Miami",
      State: "Florida",
      ZipPostalCode: "33140",
      Area: "West Flagger",
      County: "United States  ",
      Apartment: "Property Type ",
      Bedrooms: 4,
      Bathrooms: 2,
      Garage: 1,
      YearBuilt: 2016,
      squareFt: "Property Type ",
      GarageSize: "200 SqFt",
      price: "4,500",
      PropertySize: "1200 Sq Ft",
      PropertyType: "Apartment",
      PropertyStatus: "For Rent",
    },
    {
      feature: "for rent",
      id: 5,
      img: img5,
      title: "Light And Modern Apartment",
      description: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
      `,
      address: "2436 SW 8th St",
      City: "Miami",
      State: "Florida",
      ZipPostalCode: "33140",
      Area: "West Flagger",
      County: "United States  ",
      Apartment: "Property Type ",
      Bedrooms: 4,
      Bathrooms: 2,
      Garage: 1,
      YearBuilt: 2016,
      squareFt: "Property Type ",
      GarageSize: "200 SqFt",
      price: "4,500",
      PropertySize: "1200 Sq Ft",
      PropertyType: "Apartment",
      PropertyStatus: "For Rent",
    },
    {
      feature: "for sale",
      id: 6,
      img: img6,
      title: "Light And Modern Apartment",
      description: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
      `,
      address: "2436 SW 8th St",
      City: "Miami",
      State: "Florida",
      ZipPostalCode: "33140",
      Area: "West Flagger",
      County: "United States  ",
      Apartment: "Property Type ",
      Bedrooms: 4,
      Bathrooms: 2,
      Garage: 1,
      YearBuilt: 2016,
      squareFt: "Property Type ",
      GarageSize: "200 SqFt",
      price: "4,500",
      PropertySize: "1200 Sq Ft",
      PropertyType: "Apartment",
      PropertyStatus: "For Rent",
    },
  ];
  return (
    <section className="py-[70px]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="pb-[100px] mx-auto">
          <h2 className="font-normal text-center text-[35px] leading-[42px] text-[#000]">
            Discover Our Featured Listings
          </h2>
          <p className="mt-3 text-center text-[16px] leading-[25px] text-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        {/* 6 properties start*/}
        <div className="flex flex-wrap -m-4">
          {data.map((item) => (
            <div key={item.id} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="shadow-xl bg-white rounded-[.25rem]  ">
                <div className="relative">
                  <Image
                    className="rounded-lg w-full h-full"
                    src={item.img}
                    alt={"slider img"}
                  />
                  <div className="bg-[#000] rounded-lg  opacity-40 absolute w-full h-full bottom-0 left-0 -z-1"></div>
                  <div className="absolute left-0 top-0 p-[15px] w-full h-full">
                    <div className="flex justify-between flex-col w-full h-full">
                      <div>
                        <div className="flex justify-between ">
                          <span className="bg-[#77c720] text-white rounded-[2px] py-[3px] px-[5px] text-[10px] leading-[15px] font-semibold">
                            FEATUERD
                          </span>
                          <span className="bg-black opacity-[0.6] rounded-[2px] py-[3px] px-[5px] text-white text-[10px] leading-[15px] font-semibold uppercase">
                            {item.feature}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="flex h-full w-full justify-between working text-left text-white">
                            <div>
                              <p className="text-[16px] leading-[19px]">
                                {item.title}
                              </p>
                              <h2 className="font-semibold text-[16px] leading-[25px]">
                                $ {item.price}
                              </h2>
                              <p>{item.squareFt}</p>
                            </div>
                            <div className="flex gap-2">
                              <VscOpenPreview className="bg-[#3f4041] p-1 w-[30px] rounded-[4px] h-[30px] text-white" />
                              <MdOutlineFavoriteBorder className="bg-[#3f4041] p-1 w-[30px] rounded-[4px] h-[30px] text-white" />
                              <RxPlusCircled className="bg-[#3f4041] p-1 w-[30px] rounded-[4px] h-[30px] text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-secondary text-[14px] leading-[16px] flex gap-4">
                            <div className="flex gap-1 my-[12px] items-center">
                              <span>
                                <MdOutlineBedroomParent className="text-white text-[24px]" />
                              </span>{" "}
                              <span className="text-white text-[16px]">
                                {item.Bathrooms}
                              </span>
                            </div>

                            <div className="flex gap-1 my-[12px] items-center">
                              <span>
                                <MdOutlineBathroom className="text-white text-[24px]" />
                              </span>{" "}
                              <span className="text-white text-[16px]">
                                {item.Bathrooms}
                              </span>
                            </div>

                            <div className="flex gap-1 my-[12px] items-center">
                              <span>
                                <AiFillCar className="text-white text-[24px]" />
                              </span>{" "}
                              <span className="text-white text-[16px]">
                                {item.Garage}
                              </span>
                            </div>
                            <div className="flex gap-1 my-[12px] items-center">
                              <span>
                                <MdOutlineSquareFoot className="text-white text-[24px]" />
                              </span>{" "}
                              <span className="text-white text-[16px]">
                                {item.Garage}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 6 properties end*/}
        <button
          // type="submite"
          className="mx-auto mt-[50px] rounded-[4px] border-[1px] font-medium border-[#00aeff] hover:bg-[#00aeff] text-[#00aeff]  text-[16px] hover:text-white px-[30px] py-[5px]"
        >
          Load More
        </button>
      </div>
    </section>
  );
};
export default FinestProperties;
