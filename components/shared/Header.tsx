import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isTrue, setTrue] = useState<boolean>(false);
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
      text: "About",
      path: "/about",
    },
    {
      id: 4,
      text: "Inquiry Form",
      path: "/inquiry-form",
    },
    {
      id: 5,
      text: "Contact",
      path: "/contact",
    },
    {
      id: 6,
      text: "Blog",
      path: "/blog",
    },
  ];

  const navigation = (
    <>
      {navigate.map((link) => (
        <Link
          key={link.id}
          href={`${link.path}`}
          className={`mx-5 hover:text-primary font-semibold ${
            isTrue ? "text-black" : " text-white"
          }`}
        >
          {link.text}
        </Link>
      ))}
      <div className="flex justify-between items-center gap-5 ">
        <Link
          className={`mx-5 hover:text-primary font-semibold ${
            isTrue ? "text-black" : " text-white"
          }`}
          href={"tel:+8801768227738"}
        >
          <span>+8801768227738</span>
        </Link>
        <Link
          href="/"
          className={`mx-5 hover:text-primary font-semibold ${
            isTrue ? "text-black" : " text-white"
          }`}
        >
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

  const router = useRouter();

  useEffect(() => {
    const headerHandler = () => {
      if (window.scrollY >= 120) {
        return setTrue(true);
      } else {
        return setTrue(false);
      }
    };
    window.addEventListener("scroll", headerHandler);
    return () => {
      window.removeEventListener("scroll", headerHandler);
    };
  }, [isTrue]);

  return (
    <header
      className={`z-50 absolute top-0 left-0 w-full  ${
        isTrue
          ? "bg-white sticky left-0 top-0 transition ease-in-out  delay-150"
          : "shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  text-white"
      }`}
    >
      <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link className="text-primary" href="/">
          <span
            className={`mx-5 hover:text-primary font-semibold ${
              isTrue ? "text-black" : " text-white"
            }`}
          >
            Hasan Rifat
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigation}
        </nav>
      </div>
    </header>
  );
};
export default Header;
