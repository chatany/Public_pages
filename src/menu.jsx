import React, { useState } from "react";
import { BiChevronDown, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./foooter";
import { FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Menu = ({ children }) => {
  const [show, setShow] = useState(false);
  const menuItems = [
    { name: "AML & CFT Policy Statement", link: "/aml-policy" },
    { name: "Trading policy", link: "/trading-policy" },
    { name: "Risk Disclosure", link: "/risk-disclosure" },
    { name: "Cookies Policy", link: "/cookies-policy" },
    {name: "User Agreement",link:"/user-agreement"},
    {name: "Terms of use",link:"/terms-of-use"},
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-black">
      <Navbar />

      <div className="md:p-15 p-5">
        <div className="flex flex-col gap-5">
          <div className="flex justify-end ">
            <input
              type="text"
              placeholder="Search"
              className={`
            w-80 capitalize rounded-[40px]
            h-6 p-4 text-[1rem] 
            border
            hover:border-[#2EDBAD] border-[#2EDBAD] focus:outline-none `}
            />
          </div>
          <div className="flex max-md:flex-col gap-20 w-full">
            <div className="text-left">
              <div className="text-[20px] font-bold mb-10 mt-5 whitespace-nowrap max-md:hidden">
                Articles in this Section{" "}
              </div>
              <div
                onClick={() => setShow(!show)}
                className="md:hidden flex justify-between p-5 border-b border-t p-2 border-[#525252]"
              >
                <div>Articles in this Section </div>
                <div>
                  {show ? (
                    <IoMdClose className="size-6" />
                  ) : (
                    <FaAngleDown className="size-6" />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-10 max-md:hidden ">
                <ul className="list-disc list-inside flex flex-col gap-4 ">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-[#2EDBAD] hover:underline cursor-pointer whitespace-nowrap text-[20px]"
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {show && (
                <div className="flex flex-col gap-10 md:hidden ">
                  <ul className="list-disc list-inside flex flex-col gap-4 ">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className="text-[#2EDBAD] hover:underline cursor-pointer whitespace-nowrap text-[20px]"
                      >
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex gap-10">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer isShow={false} />
    </div>
  );
};

//
