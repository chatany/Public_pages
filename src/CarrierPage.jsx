import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";
import Navbar from "./Navbar";
import { Footer } from "./foooter";

export const CarrierPage = () => {
  const [activeItem, setActiveItem] = useState("Buy");
  const coreValues = [
    {
      src: "/innovation.svg",
      title: "Innovation",
      subtitle:
        "Reconstructing thought frameworks to find better solutions; challenging established notions to continuously evolve with agility.",
    },
    {
      src: "/Collaboration.svg",
      title: "Collaboration",
      subtitle:
        "Guided by mutual benefit, actively embracing openness and sharing, partnering with users and collaborators to foster a thriving and sustainable industry environment.",
    },
    {
      src: "/Insight.svg",
      title: "Insight",
      subtitle:
        "Accurately understanding user needs and keenly sensing industry changes.",
    },
  ];
  const whyBitzupArr1 = [
    {
      src: "/compensation.svg",
      title: "Competitive Compensation Package",
    },
    {
      src: "/vision.svg",
      title: "Broad and Far-reaching International Vision",
    },
  ];
  const whyBitzupArr = [
    { src: "/flexible.svg", title: "Flexible Working Hours" },
    {
      src: "/pathways.svg",
      title: "Fair and Transparent Promotion Pathways",
    },
    {
      src: "/reward.svg",
      title: "Innovative and Diverse Reward Mechanisms",
    },
  ];
  const positions = [
    { src: "/product.svg", title: "Product" },
    {
      src: "/Engineering.svg",
      title: "Engineering",
    },
    { src: "/marketing.svg", title: "Marketing" },
    {
      src: "/Technical Support.svg",
      title: "Technical Support",
    },
    { src: "/Legal.svg", title: "Legal & Compliance" },
    { src: "/Products.svg", title: "Investment Products" },
  ];
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white min-h-screen ">
      <div className="flex items-center max-md:flex-col  justify-between md:p-15 p-5 ">
        <div className=" md:text-left text-center flex flex-col gap-10 mt-10">
          <div className="md:text-[54px] text-[35px] font-bold md:text-left text-center leading-[100%]">
            Career Opportunities
          </div>
          <div className="text-[18px] font-bold leading-[100%] text-[#686868] max-md:hidden">
            Start your career journey with Gate and explore unlimited
            opportunities.
          </div>
          <div className="w-full flex max-md:justify-center md:gap-10 gap-2 font-bold">
            <button className="bg-[#FFFFFF] md:h-[53px] h-[38px] text-[11px] md:text-[18px] w-[110px] md:w-[180px] p-1 font-bold text-black rounded-[30px]">
              Job Openings
            </button>
            <button className="bg-[#4C4B4B] md:h-[53px] h-[38px] md:w-[180px]  flex items-center justify-center gap-0.5 w-[110px] text-[11px] md:text-[18px] w-f p-1 font-bold text-[#FFFFFF] rounded-[30px]">
              <AiFillLinkedin className="md:size-4 size-2.5" /> View Linkedin
            </button>
          </div>
          {/* <div className="text-[18px] font-bold leading-[100%] text-[#686868] md:hidden">
           Start your career journey with Gate and explore unlimited opportunities.
          </div> */}
        </div>
        <div className="mt-10">
          <div className="bg-[#131516] rounded-full  md:size-96.5 size-73" />
        </div>
      </div>
      <div className="flex  justify-center items-center mt-10 font-bold md:p-15 p-5">
        <div
          className={`flex  ${
            true
              ? "border-[#333B47] bg-[#131516]"
              : "border-[#EDEDED] bg-[#F4F5F7]"
          } border text-[#8E8E92] rounded-[43px] max-w-[447px] overflow-hidden p-0.5 h-[57px] w-full`}
        >
          <div
            onClick={() => setActiveItem("Buy")}
            className={`relative md:px-6 px-2 py-[1px] rounded-[43px] text-[13px] whitespace-nowrap cursor-pointer flex items-center justify-center w-full
          ${activeItem === "Buy" ? "bg-[#2EDBAD] text-black" : " bg-transparent"}
          transition-all duration-300
        `}
          >
            Discover our Culture
          </div>
          <div
            onClick={() => setActiveItem("Sell")}
            className={`relative md:px-6 px-2 py-[1px] cursor-pointer text-[13px] rounded-[43px] whitespace-nowrap flex items-center justify-center w-full
          ${activeItem === "Sell" ? "bg-[#2edbad] text-black" : "bg-transparent"}
          transition-all duration-300
        `}
          >
            Explore our values
          </div>
        </div>
      </div>
      <div className="mt-30 md:p-15 p-5">
        <div className="md:text-[45px] text-[32px] font-bold mb-10">Our Core Values</div>
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
      <div className="mt-30 md:p-15 p-5">
        <div className="md:text-[45px] text-[32px] font-bold mb-10">Why Bitzup ?</div>
        <div className="flex flex-col gap-10">
          <div className="grid md:grid-cols-2  grid-cols-1 gap-10">
            {whyBitzupArr1?.map((item, ind) => (
              <div
                className={`flex flex-col gap-5 items-center justify-center p-5 rounded-[10px] border-[1px] h-[250px] border-[#ffffff] `}
                key={ind}
              >
                <div>
                  <img src={item?.src} className="md:size-16 size-12" />
                </div>
                <div className="text-[22px] font-bold">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-6  grid-cols-1 gap-10">
            {whyBitzupArr?.map((item, ind) => (
              <div
                className={`flex flex-col gap-5 items-center justify-center p-5 rounded-[10px] border-[1px] h-[250px] border-[#ffffff] col-span-2`}
                key={ind}
              >
                <div>
                  <img src={item?.src} />
                </div>
                <div className="text-[22px] font-bold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-30 md:p-15 p-5">
        <div className="md:text-[45px] text-[32px] font-bold mb-10">
          Positions open, waiting just for you!
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {positions?.map((item, ind) => (
            <div
              className="flex md:flex-col md:gap-5 justify-between items-center p-5 rounded-[10px] md:h-[250px] h-[95px] border-[1px] border-[#ffffff]"
              key={ind}
            >
              <div>
                <img src={item?.src} className="max-md:size-8 size-16" />
              </div>
              <div className="md:text-[22px] text-[16px] font-bold">
                {item.title}
              </div>
              <button className="bg-[#353535] md:h-[47px] h-[33px] md:w-[180px] w-[120px] text-[#FFFFFF] flex justify-center items-center text-[18px] w-f p-1 font-bold  rounded-[33px]">
                <LuMoveRight cl />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="md:text-[45px] text-[32px] font-bold mt-30 md:p-15 p-5">
        Discover More Media Reports and Build the <br className="max-md:hidden" /> Crypto Future Together
        with Bitzup
      </div>
      <div className="flex  justify-center items-center gap-5 mt-10 md:p-15 p-5">
        <div className="bg-[#131516] p-2 rounded-[12px]">

        <FaYoutube className="size-8 max-md:size-6 bg-[#131516]" />
        </div>
        <div className="bg-[#131516] p-2 rounded-[12px]">

        <BsTwitterX className="size-8 max-md:size-6 bg-[#131516] " />
        </div>
      </div>
    <Footer isShow={false}/>
    </div>
    </>
  );
};
