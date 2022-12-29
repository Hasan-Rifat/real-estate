import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  interface navigateInterface {
    id: number;
    text: string;
    path: string;
  }

  const navigate: Array<navigateInterface> = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "Properties",
      path: "/properties",
    },
    {
      id: 3,
      text: "Property",
      path: "/property",
    },
    {
      id: 4,
      text: "Realtor",
      path: "/realtor",
    },
    {
      id: 5,
      text: "Others",
      path: "/others",
    },
  ];
  const navigation = (
    <>
      {navigate.map((link) => (
        <Link
          key={link.id}
          href={`${link.path}`}
          className="mx-5 text-accent hover:text-primary font-semibold"
        >
          {link.text}
        </Link>
      ))}
      <div className="flex justify-between items-center gap-5 ">
        <Link
          className="text-accent hover:text-primary font-semibold"
          href={"tel:+8801768227738"}
        >
          <span>+8801768227738</span>
        </Link>
        <Link href="/" className="text-accent hover:text-primary font-semibold">
          <CgProfile className="text-[24px]" />
        </Link>
        <Link href={"/"}>
          <button
            className=" text-white bg-secondary border-[1px] border-white py-2 
              px-[15px] text-[15px] font-medium leading-[20px] rounded-[5px]"
          >
            Create a Listing
          </button>
        </Link>
      </div>
    </>
  );
  return (
    <header className="text-gray-600 body-font">
      <div
        className="container mx-auto flex flex-wrap p-5 
  flex-col md:flex-row items-center"
      >
        <Link className="text-primary" href="/">
          <span className="text-xl">Hasan Rifat</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigation}
        </nav>
      </div>
    </header>
  );
};
export default Header;
