import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";
import Navbar from "./Navbar";
import { Footer } from "./foooter";

export const AutoInvest = () => {
  const coreValues = [
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen ">
        <div className="flex items-center max-md:flex-col  justify-between md:p-15 p-5 ">
          <div className=" md:text-left text-center flex flex-col gap-10 mt-10">
            <div className="flex flex-col gap-4">
              <div className="md:text-[54px] text-[35px] font-bold md:text-left text-center leading-[100%]">
                Recurring Buys
              </div>
              <div className="text-[18px] font-bold leading-[100%] text-[#686868] ">
                The Smarter way to DCA
              </div>
            </div>
            <div className="w-full flex max-md:justify-center">
              <button className="bg-[#2EDBAD] h-[47px] w-[180px] text-[18px]  p-1 font-bold text-black rounded-[33px]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="mt-10">
            <div className="bg-[#131516] rounded-full  md:size-96.5 size-73" />
          </div>
        </div>
        <div className="mt-30 md:p-15 p-5">
          <div className="md:text-[45px] text-[32px] font-bold mb-10">
            Recurring buy advantages
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {coreValues?.map((item, ind) => (
              <div
                className="flex flex-col gap-5 items-center p-5 rounded-[10px] border-[1px] min-h-[250px] border-[#ffffff]"
                key={ind}
              >
                <div>
                  <img src={item?.src} className="md:size-16 size-12" />
                </div>
                <div className="text-[22px] font-bold">{item.title}</div>
                <div className="text-[14px] font-normal text-[#686868]">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:text-[45px] text-[32px] font-bold mt-30 md:p-15 p-5 text-[#686868]">
          Recurring buys give you the flexibility to decide how much and how
          often to invest.
          <br className="max-md:hidden" />
        </div>
        <div className="flex flex-col mt-30 gap-5 items-center bg-[#131516] md:p-[40px_0px_40px_0px] p-[40px_0px_40px_0px] mt-10">
          <div className="font-bold text-[35px] md:text-[50px]">
            Set up recurring buys on the Bitzup app
          </div>
          <button className="p-[10px_20px_10px_20px] cursor-pointer flex justify-center items-center bg-[#2EDBAD] md:h-[58px] h-[30px] w-fit rounded-[41px] rounded-[6px] gap-2">
            <div className="flex max-md:hidden font-semibold text-black gap-1 items-center justify-center md:w-[180px] text-[18px]">
              <button
                src="gift.svg"
                className="text-[20px] rounded-[20px] text-[16px]"
              >
                {" "}
                Log In
              </button>
            </div>
            <button
              className={`w-[120px] h-[47px] text-black md:hidden rounded-[33px] font-bold text-[16px] text-center`}
            >
              Invite Now
            </button>
          </button>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
