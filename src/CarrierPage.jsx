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
        "We question defaults and rebuild from first principles to ship better solutions, fast.",
    },
    {
      src: "/Collaboration.svg",
      title: "Collaboration",
      subtitle:
        "We win together: open by default, sharing freely with users and partners alike.",
    },
    {
      src: "/Insight.svg",
      title: "Data-driven",
      subtitle:
        "We let evidence lead, reading the market and our users to make sharper decisions.",
    },
  ];
  const whyBitzupArr1 = [
    {
      src: "/compensation.svg",
      title: "Web3-native pay",
      subtitle:
        "Top-of-market salaries, optional pay in USDT or USDC, and equity in early-stage Web3 upside.",
    },
    {
      src: "/vision.svg",
      title: "Truly global",
      subtitle:
        "A distributed team across 12+ countries, annual offsites, and real ownership of what you ship.",
    },
  ];
  const whyBitzupArr = [
    {
      src: "/flexible.svg",
      title: "Balance that's real",
      subtitle:
        "Flexible hours, four-day weeks in quiet seasons, and no on-call outside engineering.",
    },
    {
      src: "/pathways.svg",
      title: "Grow fast",
      subtitle:
        "Promotion cycles every six months, transparent leveling, and mobility across teams.",
    },
    {
      src: "/reward.svg",
      title: "Elite peers",
      subtitle:
        "Build alongside people who've shipped at Binance, Coinbase, Stripe and Goldman. 18 languages in our Slack.",
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
        <title>Careers at BitZup — Build the Future of Crypto</title>
        <meta
          name="description"
          content="Join BitZup and help build a crypto exchange used by millions. Remote-first roles in engineering, product, marketing and more. See open positions."
        />
      </Helmet>
      <Navbar />
      <div className="bg-background text-primary min-h-screen ">
        <div className="flex items-center max-md:flex-col justify-between md:px-16 p-5 ">
          <div className=" md:text-left text-center flex flex-col gap-10 mt-10">
            <div className="text-2xl md:text-3xl font-bold md:text-left text-center leading-tight">
              Build the future of crypto with us
            </div>
            <div className="text-base font-bold text-secondary max-md:hidden">
              We're a remote-first team building a crypto exchange for millions of traders. Bring your craft — we'll give you the ownership to do your best work.
            </div>
            <div className="w-full flex max-md:justify-center md:gap-10 gap-2 font-bold">
              <button className="bg-primary md:h-12 h-10 md:w-44 px-8 md:text-sm cursor-pointer text-xs md:text-base font-bold text-bg rounded-md hover:opacity-90 transition-all">
                See open roles
              </button>
              <button className="bg-surface-2 md:h-12 h-10 px-8 md:text-sm cursor-pointer text-xs flex items-center justify-center gap-2 font-bold text-primary rounded-md hover:bg-surface-2/80 transition-all">
                <AiFillLinkedin className="size-4" /> Follow us on LinkedIn
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
            What we value
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
            Why you'll love working here
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
          <div className="text-2xl md:text-3xl font-bold text-center mb-4">
            Find your role
          </div>
          <div className="text-sm md:text-base text-secondary text-center mb-10 max-w-xl mx-auto">
            We're hiring across Product, Engineering, Marketing, Technical Support, Legal & Compliance, and Investment Products.
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
          Don't see your role?
        </div>
        <div className="text-sm md:text-base text-secondary text-center mt-2 max-w-xl mx-auto">
          We're always meeting great people. Send us your profile and we'll reach out when there's a fit.
        </div>
        <div className="flex justify-center items-center mt-8 mb-10">
          <button className="btn-primary px-10">
            Submit your profile
          </button>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
