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
        <title>BitZup VIP — Lower Fees, Higher Limits, Elite Perks</title>
        <meta
          name="description"
          content="Become a BitZup VIP. Unlock the lowest trading fees, higher withdrawal limits, priority support, and exclusive rewards built for high-volume traders."
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
                  Maximum Perks, Minimum Fees.
                </div>
                <div className="md:text-base text-xs font-bold leading-[100%]  text-center">
                  Reach 30,000 USDT in asset balance to become a VIP and enjoy
                  fee discounts!
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
                    Try Out VIP
                  </div>
                  <div
                    onClick={() => setActiveItem("Sell")}
                    className={`relative md:px-6 px-2 py-[1px] cursor-pointer text-sm rounded-full whitespace-nowrap flex items-center justify-center w-full
          ${activeItem === "Sell" ? "bg-brand-amber text-black" : "bg-transparent"}
          transition-all duration-300
        `}
                  >
                    View Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="md:text-3xl text-2xl font-bold md:text-left text-center leading-[100%]">
                Elite VIP Privileges
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            <div className="border-border border-[1px] rounded-xl min-h-[200px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-3xl text-brand-amber font-bold">67%</div>
                <div className="text-muted text-xs font-bold">Off</div>
                <div className="text-lg font-bold text-white">
                  Lowest fee rate{" "}
                </div>
                <div className="text-primary text-xs font-bold">
                  Ultra-low VIP transaction fees
                </div>
              </div>
            </div>
            <div className="border-border border-[1px] rounded-xl  min-h-[200px]">
              <div className="flex flex-col gap-2 items-center text-center justify-center h-full w-full">
                <div className="text-3xl  text-brand-amber font-bold">300+</div>
                <div className="text-muted text-xs font-bold">
                  USDT Per user
                </div>
                <div className="text-lg font-bold text-white">
                  Free airdrops{" "}
                </div>
                <div className="text-primary text-xs font-bold">
                  VIP3 and above can claim new <br /> token airdrops twice a
                  month
                </div>
              </div>
            </div>
            <div className="border-border border-[1px] rounded-xl  min-h-[200px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-3xl  text-brand-amber font-bold">3M+</div>
                <div className="text-muted text-xs font-bold">
                  {" "}
                  Quarterly promotion pool
                </div>
                <div className="text-lg font-bold text-white">
                  Trade to claim airdrops{" "}
                </div>
                <div className="text-primary text-xs font-bold">
                  Exclusive trading rewards for VIPs
                </div>
              </div>
            </div>
            <div className="border-border border-[1px] rounded-xl  min-h-[200px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-3xl  text-brand-amber font-bold">
                  100K+
                </div>
                <div className="text-muted text-xs font-bold">
                  High-net-worth users
                </div>
                <div className="text-lg font-bold text-white">
                  VIP Premier Wealth Hub{" "}
                </div>
                <div className="text-primary text-xs font-bold">
                  Exclusive trading rewards for VIPs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col justify-between items-center mt-20 p-10">
          <div></div>
          <div className="flex items-center gap-5">
            <div className="font-bold md:text-3xl text-base text-white ">
              Requirement
            </div>
            <div className="font-bold md:text-3xl text-base text-muted">
              Transaction Fees
            </div>
          </div>
          <div className="font-normal text-muted text-xs">
            Check VIP requirements
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
          Trading volume from 
          <span className="text-brand-amber"> zero-fee trading pairs </span>will
          not be counted toward VIP trading volume. For VIP6 and VIP7,
          API-generated trading volume must not exceed 20% of their total
          spot/futures trading volume.
        </div>
        <div className="md:text-3xl text-2xl font-bold md:text-center text-center leading-[100%] mt-30">
          Apply for a VIP Pass
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
                  Additional perks for VIP+1 pass
                </div>
                <ul className="list-disc pl-6 leading-[32px] space-y-2 text-left text-muted">
                  <li>
                    Get the BitZup VIP+1 Pass and unlock the lowest fees on the
                    platform (down to 33% of standard),
                  </li>
                  <li>VIP-only Earn products</li>
                  <li>
                    and 2× the Launchpool staking allocation — for as long as
                    you trade with us.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex max-md:justify-center mb-10">
              <button className="btn-secondary w-44">
                <FaTelegramPlane className="size-5" /> Contact Us
              </button>
            </div>
          </div>
          <div className="w-[55%] max-md:w-full  text-left md:p-15 p-2">
            <div className="text-lg font-bold whitespace-nowrap mb-5 max-md:hidden">
              How to apply
            </div>
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
              Upload a screenshot showing your VIP status from another exchange,
              along with proof of your 30-day trading volume or assets.
            </div>
            <div className="bg-surface flex justify-center items-center md:h-28 h-20 w-20 md:w-28  rounded-xl cursor-pointer  mt-5 border-[0.8px]  border-dashed">
              <IoIosAdd />
            </div>
            <div className="text-muted mt-5">
              Only PNG, JPG, and JPEG formats are supported. Max size of 10MB
              per file, up to 3 files.
            </div>
            <div className="w-full flex max-md:justify-center mt-5">
              <button className="btn-secondary w-full">Submit</button>
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
        <div className="flex flex-col mt-32 gap-12 items-center py-16 bg-surface">
          <h2 className="font-bold text-2xl md:text-3xl text-primary text-center">
            Become a BitZup VIP to enjoy high fee discounts
          </h2>
          <button
            className="btn-primary px-12"
            onClick={() => (window.location.href = "/trade/register")}
          >
            Join Now
          </button>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
