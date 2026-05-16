import { Helmet } from "react-helmet-async";
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
      title: "Data-Driven",
      subtitle:
        "Accurately understanding user needs through data-driven decisions and keenly sensing industry changes.",
    },
  ];
  const whyBitzupArr1 = [
    {
      src: "/compensation.svg",
      title: "Web3 Compensation",
      subtitle:
        "Top-of-market base pay, USDT or USDC compensation option, equity in early-stage Web3 projects.",
    },
    {
      src: "/vision.svg",
      title: "Global Team",
      subtitle:
        "Distributed team across 12+ countries. Annual offsites. Real ownership over what you ship.",
    },
  ];
  const whyBitzupArr = [
    {
      src: "/flexible.svg",
      title: "Work-Life Balance",
      subtitle:
        "Flexible hours, four-day work weeks during quiet seasons, no on-call rotations outside of engineering.",
    },
    {
      src: "/pathways.svg",
      title: "Rapid Growth",
      subtitle:
        "Promotion cycles every six months. Clear leveling bands published internally. Internal mobility across teams.",
    },
    {
      src: "/reward.svg",
      title: "Elite Ecosystem",
      subtitle:
        "Build with people who've shipped at Binance, Coinbase, Stripe, and Goldman. 18 languages spoken in the company Slack.",
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
      <Helmet>
        <title>Careers at BitZup — Build Your Future in Crypto</title>
        <meta
          name="description"
          content="Explore open roles at BitZup. Join a global team building the next generation of crypto trading, earn, and Web3 products — with competitive pay and flexible hours."
        />
      </Helmet>
      <Navbar />
      <div className="bg-background text-primary min-h-screen ">
        <div className="flex items-center max-md:flex-col justify-between md:px-16 p-5 ">
          <div className=" md:text-left text-center flex flex-col gap-10 mt-10">
            <div className="text-3xl md:text-5xl font-bold md:text-left text-center leading-tight">
              Join the Future of Crypto
            </div>
            <div className="text-base font-bold text-secondary max-md:hidden">
              Start your career journey with BitZup and explore unlimited
              opportunities.
            </div>
            <div className="w-full flex max-md:justify-center md:gap-10 gap-2 font-bold">
              <button className="bg-primary h-12 md:w-44 px-8 text-sm md:text-base font-bold text-bg rounded-md hover:opacity-90 transition-all">
                Job Openings
              </button>
              <button className="bg-surface-2 h-12 md:w-44 flex text-3xl items-center justify-center gap-2 font-bold text-primary rounded-md hover:bg-surface-2/80 transition-all">
                <AiFillLinkedin className="size-4" /> View LinkedIn
              </button>
            </div>
          </div>
          <div className="mt-10">
            <div className="bg-surface rounded-full md:size-96 size-64" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 font-bold md:px-16 p-5">
          <div
            className={`flex border-border bg-surface text-secondary rounded-full max-w-md overflow-hidden p-0.5 h-14 w-full`}
          >
            <div
              onClick={() => setActiveItem("Buy")}
              className={`relative md:px-6 px-2 py-[1px] rounded-full text-sm font-bold whitespace-nowrap cursor-pointer flex items-center justify-center w-full
          ${activeItem === "Buy" ? "bg-brand-green text-black" : " bg-transparent"}
          transition-all duration-300
        `}
            >
              Discover our Culture
            </div>
            <div
              onClick={() => setActiveItem("Sell")}
              className={`relative md:px-6 px-2 py-[1px] cursor-pointer text-sm font-bold rounded-full whitespace-nowrap flex items-center justify-center w-full
          ${activeItem === "Sell" ? "bg-brand-green text-black" : "bg-transparent"}
          transition-all duration-300
        `}
            >
              Explore our values
            </div>
          </div>
        </div>
        <div className="mt-20 md:px-16 p-5">
          <div className="text-2xl md:text-3xl text-center font-bold mb-10">
            Our Core Values
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {coreValues?.map((item, ind) => (
              <div
                className="flex flex-col gap-5 items-center p-8 rounded-xl border border-border min-h-[15.625rem] bg-surface"
                key={ind}
              >
                <div>
                  <img
                    src={item?.src}
                    alt={item.title}
                    className="size-12 md:size-16"
                  />
                </div>
                <div className="text-xl font-bold text-primary">
                  {item.title}
                </div>
                <div className="text-sm font-medium text-secondary text-center leading-relaxed">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 md:px-16 p-5">
          <div className="text-2xl md:text-3xl text-center font-bold mb-10">
            Why BitZup?
          </div>
          <div className="flex flex-col gap-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              {whyBitzupArr1?.map((item, ind) => (
                <div
                  className="flex flex-col gap-5 items-center justify-center p-8 rounded-xl border border-border min-h-[15.625rem] bg-surface"
                  key={ind}
                >
                  <div>
                    <img
                      src={item?.src}
                      alt={item.title}
                      className="size-12 md:size-16"
                    />
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {item.title}
                  </div>
                  <div className="text-sm font-medium text-secondary text-center leading-relaxed">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              {whyBitzupArr?.map((item, ind) => (
                <div
                  className="flex flex-col gap-5 items-center justify-center p-8 rounded-xl border border-border min-h-[15.625rem] bg-surface"
                  key={ind}
                >
                  <div>
                    <img
                      src={item?.src}
                      alt={item.title}
                      className="size-12 md:size-16"
                    />
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {item.title}
                  </div>
                  <div className="text-sm font-medium text-secondary text-center leading-relaxed">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 md:px-16 p-5">
          <div className="text-2xl md:text-3xl font-bold mb-10">
            Positions open, waiting just for you!
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {positions?.map((item, ind) => (
              <div
                className="flex md:flex-col md:gap-5 justify-between items-center p-8 rounded-xl border border-border md:h-64 h-24 bg-surface transition-all hover:border-brand-green group"
                key={ind}
              >
                <div>
                  <img
                    src={item?.src}
                    alt={item.title}
                    className="size-8 md:size-16"
                  />
                </div>
                <div className="md:text-xl text-base font-bold text-primary group-hover:text-brand-green transition-colors">
                  {item.title}
                </div>
                <button className="bg-surface-2 size-10 md:h-12 md:w-44 text-primary flex justify-center items-center rounded-full hover:bg-brand-green hover:text-black transition-all">
                  <LuMoveRight className="size-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-2xl md:text-3xl font-bold mt-20 md:px-16 p-5 leading-tight text-center">
          Discover More Media Reports and Build the{" "}
          <br className="max-md:hidden" /> Crypto Future Together with BitZup
        </div>
        <div className="flex justify-center items-center gap-5 mt-10 md:px-16 p-5">
          <div className="bg-surface p-3 rounded-xl border border-border hover:border-brand-green transition-all cursor-pointer">
            <FaYoutube className="size-8 text-primary" />
          </div>
          <div className="bg-surface p-3 rounded-xl border border-border hover:border-brand-green transition-all cursor-pointer">
            <BsTwitterX className="size-8 text-primary" />
          </div>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
