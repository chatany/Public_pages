import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaSortDown, FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  IoIosAdd,
  IoIosLink,
  IoIosMail,
  IoMdCheckmark,
  IoMdPhonePortrait,
} from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import Navbar from "./Navbar";
import { Footer } from "./foooter";
import Button from "./Common/Button";

export const Vip = () => {
  const [activeItem, setActiveItem] = useState("Sell");
  const popupRef = useRef(null);
  const vipLevels = Array.from({ length: 10 }, (_, i) => `VIP ${i}`);
  const methedsArr = [
    {
      name: "Website",
      icon: <IoIosLink className="size-5" />,
      placeholder: "Please enter the link",
    },
    {
      name: "Email",
      icon: <IoIosMail className="size-5" />,
      placeholder: "Please enter the full information to verify",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "X(Twitter)",
      icon: <FaSquareXTwitter className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "Wechat",
      icon: <IoLogoWechat className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "FaceBook",
      icon: <CiFacebook className="size-5" />,
      placeholder: "Please enter the link or @username",
    },
    {
      name: "Phone",
      icon: <IoMdPhonePortrait className="size-5" />,
      placeholder: "Please enter the phone number",
    },
  ];
  return (
    <>
      <Helmet>
        <title>BitZup VIP Program — Lowest Trading Fees & Elite Perks</title>
        <meta
          name="description"
          content="Unlock up to 67% off trading fees, free token airdrops and a dedicated wealth manager with BitZup VIP. Fast-track your tier with the VIP+1 Pass."
        />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-bg text-primary">
        <div
          className="  relative bg-cover  flex justify-center items-center  bg-center md:min-h-[860px] h-[560px] p-5"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 h-full"></div>
          <div className="relative flex flex-col md:gap-40  gap-20 p-5">
            <div>
              <div className="flex justify-center">
                <img
                  src="vip.svg"
                  alt="BitZup VIP Program Logo"
                  className="h-24 md:h-36 w-auto"
                />
              </div>
              <div className="flex items-center flex-col p-5 gap-5">
                <div className="md:text-3xl text-2xl font-bold md:text-left text-center leading-[100%]">
                  Trade more. Pay less. Get rewarded.
                </div>
                <div className="md:text-base text-xs font-bold leading-relaxed text-center max-w-xl">
                  Hold 30,000 USDT or trade at volume to unlock VIP — up to 67% off fees, exclusive airdrops, and white-glove support.
                </div>
              </div>
              <div className="flex  justify-center items-center mt-5 font-bold md:p-15 p-5">
                <div
                  className={`flex  ${
                    true
                      ? "border-border bg-surface"
                      : "border-border bg-surface-2"
                  } border text-secondary rounded-full max-w-md overflow-hidden p-0.5 h-14 w-full`}
                >
                  <div
                    onClick={() => setActiveItem("Buy")}
                    className={`relative md:px-6 px-2 py-[1px] rounded-full text-sm whitespace-nowrap cursor-pointer flex items-center justify-center w-full
          ${activeItem === "Buy" ? "bg-brand-amber text-black" : " bg-transparent"}
          transition-all duration-300
        `}
                  >
                    Become a VIP
                  </div>
                  <div
                    onClick={() => setActiveItem("Sell")}
                    className={`relative md:px-6 px-2 py-[1px] cursor-pointer text-sm rounded-full whitespace-nowrap flex items-center justify-center w-full
          ${activeItem === "Sell" ? "bg-brand-amber text-black" : "bg-transparent"}
          transition-all duration-300
        `}
                  >
                    View my progress
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="md:text-3xl text-2xl font-bold md:text-left text-center leading-[100%]">
                Privileges reserved for BitZup VIPs
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            <div className="border-border border-[1px] rounded-xl min-h-[200px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-3xl text-brand-amber font-bold">67% Off</div>
                <div className="text-lg font-bold text-white mt-2">
                  Up to 67% off fees
                </div>
                <div className="text-primary text-xs font-bold text-center px-4">
                  The lowest transaction fees on the platform, applied automatically.
                </div>
              </div>
            </div>
            <div className="border-border border-[1px] rounded-xl  min-h-[200px]">
              <div className="flex flex-col gap-2 items-center text-center justify-center h-full w-full">
                <div className="text-3xl  text-brand-amber font-bold">300+ USDT</div>
                <div className="text-lg font-bold text-white mt-2">
                  Free token airdrops
                </div>
                <div className="text-primary text-xs font-bold text-center px-4">
                  VIP3 and above claim new-token airdrops twice a month (300+ USDT in value).
                </div>
              </div>
            </div>
            <div className="border-border border-[1px] rounded-xl  min-h-[200px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-3xl  text-brand-amber font-bold">$3M+</div>
                <div className="text-lg font-bold text-white mt-2">
                  $3M+ quarterly reward pool
                </div>
                <div className="text-primary text-xs font-bold text-center px-4">
                  Trade to earn from VIP-only promotions and prize pools.
                </div>
              </div>
            </div>
            <div className="border-border border-[1px] rounded-xl  min-h-[200px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-3xl  text-brand-amber font-bold">100K+</div>
                <div className="text-lg font-bold text-white mt-2">
                  Premier Wealth Hub
                </div>
                <div className="text-primary text-xs font-bold text-center px-4">
                  Join 100K+ high-net-worth traders with dedicated support and market insights.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-20">
          <div className="font-bold md:text-3xl text-xl text-white text-center">
            Find your VIP level
          </div>
          <div className="text-sm text-secondary text-center px-4 max-w-xl">
            The more you hold and trade, the less you pay. Every tier lowers your maker and taker fees automatically.
          </div>
        </div>
        <div className=" flex items-center justify-center p-5">
          {/* Container */}
          <div className="w-full  rounded-xl p-6">
            {/* Header Bar */}
            <div className="bg-surface rounded-lg text-left flex items-center px-4 py-3 h-16 text-sm text-secondary mb-6">
              VIP Level
            </div>

            {/* VIP List */}
            <div className="flex flex-col gap-4">
              {vipLevels.map((vip, index) => (
                <button
                  key={index}
                  className={`w-24 py-2 rounded-lg text-sm font-medium transition
              ${
                index === 0 || index === 1
                  ? "bg-gradient-to-r from-surface via-muted to-surface "
                  : "bg-gradient-to-r from-surface via-brand-amber to-surface "
              }`}
                >
                  {vip}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="text-base font-medium leading-[29px] text-muted w-full p-[0px_40px_0px_40px] text-left">
          Volume from zero-fee pairs doesn't count toward VIP tiers. For VIP6–VIP7, API trading must stay under 20% of total spot/futures volume.
        </div>
        <div className="md:text-3xl text-2xl font-bold md:text-center text-center leading-[100%] mt-30">
          Fast-track with the VIP+1 Pass
        </div>
        <div className="flex mt-20 h-full">
          <div className="border-border border-r-[0.5px] w-[45%] p-10 max-md:hidden flex min-h-full flex-col justify-between">
            <div>
              {/* <div>
                <div className="text-left font-semibold text-lg leading-8 mt-8">
                  Eligibility
                </div>
                <ul className="list-disc leading-[32px] text-left pl-6 space-y-2 text-muted">
                  <li>
                    Existing VIPs on other exchanges (e.g., Binance, OKX, Bybit,
                    Gate.io, HTX, BingX, MEXC, KuCoin, Bitmart, etc.) or users
                    whose total trading volume or total assets meet Bitzup's VIP
                    requirements
                  </li>
                </ul>
              </div> */}
              <div>
                <div className="text-left font-semibold text-lg leading-8 mt-8">
                  Fast-track with the VIP+1 Pass
                </div>
                <p className="text-sm text-secondary text-left mt-2 leading-relaxed">
                  Already a VIP on another exchange? Bring your status to BitZup. The VIP+1 Pass unlocks our lowest fees (as low as 33% of standard), VIP-only Earn products, and 2× Launchpool allocation — for as long as you trade with us.
                </p>
              </div>
            </div>
            <div className="w-full flex max-md:justify-center mb-10">
              <Button variant="secondary" className="w-44">
                <FaTelegramPlane className="size-5" /> Contact Us
              </Button>
            </div>
          </div>
          <div className="w-[55%] max-md:w-full  text-left md:p-15 p-2">
            <div className="text-lg font-bold whitespace-nowrap mb-1">
              Apply in two minutes
            </div>
            <p className="text-xs text-muted mb-5 leading-relaxed">
              1. Enter your BitZup UID and preferred contact method (e.g. Telegram).<br />
              2. Upload proof of your current VIP status and 30-day trading volume or asset balance.<br />
              Accepted: PNG, JPG, JPEG — up to 3 files, max 10MB each. Our VIP team replies within 1–2 business days.
            </p>
            <div>
              <div className="form-label mb-4">BitZup UID</div>
              <div>
                <input
                  placeholder={"Retrieved automatically after login... "}
                  className="form-input"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-5 flex gap-3">
                Contact method
                <div className="text-sm text-muted border-b-[0.8px]  border-dashed">
                  View example
                </div>
              </div>
              <div className="flex max-md:flex-col gap-5">
                <div
                  className="max-w-[520px] max-md:w-full relative  cursor-pointer"
                  ref={popupRef}
                >
                  <div className="form-input flex items-center justify-between px-5 h-14 bg-surface">
                    <div
                      className="w-full flex justify-between h-full p-2 items-center"
                      onClick={() => setOpen(!open)}
                    >
                      <div className="text-sm font-normal capitalize">
                        <div className="flex gap-3 items-center text-secondary">
                          <div>
                            <FaTelegramPlane className="size-8 text-white bg-blue-500 p-[7px] rounded-full" />
                          </div>
                          {"Telegram"}
                        </div>
                      </div>

                      <FaSortDown
                        className={`size-5 mb-2 transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  {/* {open && (
                  <div
                    className={`absolute z-dropdown mt-2 w-full shadow-xl  ${
                      true
                        ? "bg-[#17181A] text-[#EAECEF]"
                        : "bg-[#FFFFFF] text-[#262030]"
                    } rounded-xl  max-h-[300px] custom-scroll overflow-y-auto`}
                  >
                    <ul>
                      {methedsArr.length > 0 ? (
                        methedsArr.map((coin, ind) => (
                          <li
                            key={ind}
                            className={`flex ${
                              true ? "" : "hover:bg-[#F5F5F5]"
                            } items-center justify-between w-full p-[16px_12px_16px_12px] rounded-lg cursor-pointer`}
                            onClick={() => {
                              setSelect(coin);
                              setOpen(!open);
                            }}
                          >
                            <div className="flex items-center justify-between w-full gap-2">
                              <div className="flex gap-2 items-center">
                                <div>{coin.icon}</div>
                                <span className="font-medium">{coin.name}</span>
                              </div>
                              {select?.name === coin.name && (
                                              <div>
                                                <IoMdCheckmark />
                                              </div>
                                            )}
                            </div>
                          </li>
                        ))
                      ) : (
                        <div className="h-full w-full flex justify-center items-center">
                          No Data Found
                        </div>
                      )}
                    </ul>
                  </div>
                )} */}
                </div>
                <input
                  placeholder={"Enter your contact details"}
                  className="form-input"
                />
              </div>
            </div>
            <div className="mt-5">
              Upload proof of VIP status and 30-day trading volume/balance
            </div>
            <div className="bg-surface flex justify-center items-center md:h-28 h-20 w-20 md:w-28  rounded-xl cursor-pointer  mt-5 border-[0.8px]  border-dashed">
              <IoIosAdd />
            </div>
            <div className="text-muted mt-5">
              Accepted: PNG, JPG, JPEG — up to 3 files, max 10MB each.
            </div>
            <div className="w-full flex max-md:justify-center mt-5">
              <Button type="submit" variant="secondary" className="w-full">Submit</Button>
            </div>
            <div className="flex w-full justify-center md:hidden gap-4 p-2">
              <div className="text-xs text-muted border-b-[0.8px]  border-dashed">
                Eligible
              </div>
              <div className="border-l "></div>
              <div className="text-sm flex gap-1 ">
                {" "}
                <FaTelegramPlane className="size-5 rounded-full" /> Contact us
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-32 gap-6 items-center py-16 bg-surface">
          <h2 className="font-bold text-2xl md:text-3xl text-primary text-center">
            Ready for VIP treatment?
          </h2>
          <p className="text-secondary text-sm md:text-base text-center max-md:px-4">
            Lower fees, bigger rewards and a team in your corner — start your VIP journey today.
          </p>
          <Button
            variant="primary"
            className="px-12 animate-pulse"
            onClick={() => (window.location.href = "/trade/register")}
          >
            Become a VIP
          </Button>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
