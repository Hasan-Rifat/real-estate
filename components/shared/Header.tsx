import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuRightAlt, CgProfile } from "react-icons/cg";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isTrue, setTrue] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);
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
    <div>
      <nav className="list-none flex items-center gap-2">
        {navigate.map((link) => (
          <li>
            <Link
              key={link.id}
              href={`${link.path}`}
              className={`mx-5 hover:text-primary font-semibold ${
                isTrue ? "text-black" : " text-white"
              }`}
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <Link
            className={`mx-5 hover:text-primary font-semibold ${
              isTrue ? "text-black" : " text-white"
            }`}
            href={"tel:+8801768227738"}
          >
            <span>+8801768227738</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`mx-5 hover:text-primary font-semibold ${
              isTrue ? "text-black" : " text-white"
            }`}
          >
            <CgProfile className="w-[38px] text-[20px]" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <button
              className={` border-[1px] border-white py-2 
            px-[15px] text-[15px] font-medium leading-[20px] rounded-[5px] ${
              isTrue ? "text-white bg-secondary" : "text-black bg-white"
            }`}
            >
              Create a Listing
            </button>
          </Link>
        </li>
      </nav>
    </div>
  );
  const navigateMobile: any = (
    <div className="relative p-8 w-full">
      {open && (
        <nav
          ref={modal}
          className="list-none absolute left-0 top-[-6px] w-full bg-white p-5 gap-4 flex flex-col"
        >
          {navigate.map((link) => (
            <li>
              <Link
                key={link.id}
                href={`${link.path}`}
                className={`mx-5 hover:text-primary font-semibold text-black `}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className={`mx-5 hover:text-primary font-semibold text-black`}
              href={"tel:+8801768227738"}
            >
              <span>+8801768227738</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`mx-5 hover:text-primary font-semibold text-black`}
            >
              <CgProfile className="w-[38px] mx-5" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <button
                className={`mx-5 border-[1px] border-white py-2 
        px-[15px] text-[15px] font-medium leading-[20px] rounded-[5px] text-white bg-black`}
              >
                Create a Listing
              </button>
            </Link>
          </li>
          <button
            className="absolute right-[20px] top-[20px] "
            onClick={() => setOpen(false)}
          >
            <AiFillCloseCircle className="text-[27px] text-black z-20" />
          </button>
        </nav>
      )}
      {!open && (
        <button
          className="absolute right-[20px] top-[14px] "
          onClick={() => setOpen(!open)}
        >
          <CgMenuRightAlt
            className={`text-[27px]  z-20 ${
              isTrue ? "text-black" : "text-white"
            }`}
          />
        </button>
      )}
    </div>
  );

  useEffect(() => {
    const headerHandler = () => {
      if (window.scrollY >= 120) {
        return setTrue(true);
      } else {
        return setTrue(false);
      }
    };

    const handler = (e: any) => {
      if (modal && modal.current && !modal.current.contains(e.target)) {
        return setOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);

    window.addEventListener("scroll", headerHandler);
    return () => {
      window.removeEventListener("scroll", headerHandler);
      window.removeEventListener("mousedown", handler);
    };
  }, [isTrue, open]);

  return (
    <header
      className={`z-50 absolute top-0 left-0 w-full  ${
        isTrue
          ? "bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] sticky left-0 top-0 transition ease-in-out  delay-150"
          : "shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  text-white"
      } `}
    >
      {/* me */}
      <div className="container p-4 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div className=" flex items-center justify-between w-full">
          <div>
            <Link className="text-primary w-full" href="/">
              <p
                className={`mx-5 hover:text-primary font-semibold w-full ${
                  isTrue ? "text-black" : " text-white"
                }`}
              >
                Hasan Rifat
              </p>
            </Link>
          </div>
          <div className="w-full hidden lg:block">
            <div className="w-full flex items-center justify-end">
              {navigation}
            </div>
          </div>
          <div className="w-full lg:hidden block">
            <div className="w-full flex items-center justify-end">
              {navigateMobile}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
