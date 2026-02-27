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
      <Navbar />
      <div className="min-h-screen bg-black">
        <div
          className="  relative bg-cover  flex justify-center items-center  bg-center md:min-h-[860px] h-[560px] p-5"
          style={{
            backgroundImage: "url('/bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 h-full"></div>
          <div className="relative flex flex-col md:gap-40  gap-20 p-5">
            <div>
              <div className="flex justify-center">
                <img
                  src="vip.svg"
                  className="h-[100px] md:h-[150px] w-[220px] md:w-[360px]"
                />
              </div>
              <div className="flex items-center flex-col p-5 gap-5">
                <div className="md:text-[54px] text-[35px] font-bold md:text-left text-center leading-[100%]">
                  Maximum Perks, Minimum Fees.
                </div>
                <div className="md:text-[18px] text-[12px] font-bold leading-[100%]  text-center">
                  Reach 30,000 USDT in asset balance to become a VIP and enjoy
                  fee discounts!
                </div>
              </div>
              <div className="flex  justify-center items-center mt-5 font-bold md:p-15 p-5">
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
          ${activeItem === "Buy" ? "bg-[#FFDFAD] text-black" : " bg-transparent"}
          transition-all duration-300
        `}
                  >
                    Try Out VIP
                  </div>
                  <div
                    onClick={() => setActiveItem("Sell")}
                    className={`relative md:px-6 px-2 py-[1px] cursor-pointer text-[13px] rounded-[43px] whitespace-nowrap flex items-center justify-center w-full
          ${activeItem === "Sell" ? "bg-[#FFDFAD] text-black" : "bg-transparent"}
          transition-all duration-300
        `}
                  >
                    View Progress
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="md:text-[54px] text-[35px] font-bold md:text-left text-center leading-[100%]">
                Elite VIP Privileges
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            <div className="border-[#9C9C9C] border-[1px] rounded-[12px] min-h-[209px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-[45px] text-[#FFDFAD] font-bold">67%</div>
                <div className="text-[#686868] text-[12px] font-bold">Off</div>
                <div className="text-[20px] font-bold text-white">
                  Lowest fee rate{" "}
                </div>
                <div className="text-[#686868] text-[12px] font-bold">
                  Ultra-low VIP transaction fees
                </div>
              </div>
            </div>
            <div className="border-[#9C9C9C] border-[1px] rounded-[12px]  min-h-[209px]">
              <div className="flex flex-col gap-2 items-center text-center justify-center h-full w-full">
                <div className="text-[45px]  text-[#FFDFAD] font-bold">
                  300+
                </div>
                <div className="text-[#686868] text-[12px] font-bold">
                  USDT Per user
                </div>
                <div className="text-[20px] font-bold text-white">
                  Free airdrops{" "}
                </div>
                <div className="text-[#686868] text-[12px] font-bold">
                  VIP3 and above can claim new <br /> token airdrops twice a
                  month
                </div>
              </div>
            </div>
            <div className="border-[#9C9C9C] border-[1px] rounded-[12px]  min-h-[209px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-[45px]  text-[#FFDFAD] font-bold">3M+</div>
                <div className="text-[#686868] text-[12px] font-bold">
                  {" "}
                  Quarterly promotion pool
                </div>
                <div className="text-[20px] font-bold text-white">
                  Trade to claim airdrops{" "}
                </div>
                <div className="text-[#686868] text-[12px] font-bold">
                  Exclusive trading rewards for VIPs
                </div>
              </div>
            </div>
            <div className="border-[#9C9C9C] border-[1px] rounded-[12px]  min-h-[209px]">
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <div className="text-[45px]  text-[#FFDFAD] font-bold">
                  100K+
                </div>
                <div className="text-[#686868] text-[12px] font-bold">
                  High-net-worth users
                </div>
                <div className="text-[20px] font-bold text-white">
                  VIP Premier Wealth Hub{" "}
                </div>
                <div className="text-[#686868] text-[12px] font-bold">
                  Exclusive trading rewards for VIPs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col justify-between items-center mt-20 p-10">
          <div></div>
          <div className="flex items-center gap-5">
            <div className="font-bold md:text-[45px] text-[18px] text-white ">
              Requirement
            </div>
            <div className="font-bold md:text-[45px] text-[18px] text-[#686868]">
              Transaction Fees
            </div>
          </div>
          <div className="font-normal text-[#686868] text-[12px]">
            Check VIP requirements
          </div>
        </div>
        <div className=" flex items-center justify-center p-5">
          {/* Container */}
          <div className="w-full  rounded-xl p-6">
            {/* Header Bar */}
            <div className="bg-[#131516] rounded-lg text-left flex items-center px-4 py-3 h-[71px] text-sm text-gray-400 mb-6">
              VIP Level
            </div>

            {/* VIP List */}
            <div className="flex flex-col gap-4">
              {vipLevels.map((vip, index) => (
                <button
                  key={index}
                  className={`w-[88px] py-2 rounded-lg text-sm font-medium transition
              ${
                index === 0 || index === 1
                  ? "bg-gradient-to-r from-[#131516] via-[#6B767C] to-[#131516] "
                  : "bg-gradient-to-r from-[#131516] via-[#FFDFAD] to-[#131516] "
              }`}
                >
                  {vip}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="text-[18px] font-medium leading-[29px] text-[#686868] w-full p-[0px_40px_0px_40px] text-left">
          Trading volume from 
          <span className="text-[#FFDFAD]"> zero-fee trading pairs </span>will
          not be counted toward VIP trading volume. For VIP6 and VIP7,
          API-generated 
          trading volume must not exceed 20% of their total spot/futures trading
          volume.
        </div>
        <div className="md:text-[54px] text-[35px] font-bold md:text-center text-center leading-[100%] mt-30">
          Apply for a VIP Pass
        </div>
        <div className="flex mt-20 h-full">
          <div className="border-[#ffffff] border-r-[0.5px] w-[45%] p-10 max-md:hidden flex min-h-full flex-col justify-between">
            <div>
              <div>
                <div className="text-left font-semibold text-[20px] leading-8 mt-8">
                  Eligibility
                </div>
                <ul className="list-disc leading-[32px] text-left pl-6 space-y-2 text-[#686868]">
                  <li>
                    Existing VIPs on other exchanges (e.g., Binance, OKX, Bybit,
                    Gate.io, HTX, BingX, MEXC, KuCoin, Bitmart, etc.) or users
                    whose total trading volume or total assets meet Bitget's VIP
                    requirements
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-left font-semibold text-[20px] leading-8 mt-8">
                  Additional perks for VIP+1 pass
                </div>
                <ul className="list-disc pl-6 leading-[32px] space-y-2 text-left text-[#686868]">
                  <li>Transaction fees as low as 33% of the standard rate</li>
                  <li>Exclusive Earn products for steady asset growth</li>
                  <li>
                    Greater Launchpool staking limits to double your profits
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex max-md:justify-center mb-10">
              <button className="bg-[#131516] h-[47px] w-[180px] text-[18px] flex justify-center items-center gap-1 p-1 font-bold text-white rounded-[33px]">
                <FaTelegramPlane className="size-5" /> Contact Us
              </button>
            </div>
          </div>
          <div className="w-[55%] max-md:w-full  text-left md:p-15 p-2">
            <div className="text-[22px] font-bold whitespace-nowrap mb-5 max-md:hidden">
              How to apply
            </div>
            <div>
              <div className="mb-5">Bitzup UID</div>
              <div>
                <input
                  placeholder={"Retrieved automatically after login... "}
                  className="w-full border bg-[#131516] border-[#131516] rounded-full px-5 h-[57px] text-[15px] font-normal text-[#686868] outline-none "
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-5 flex gap-3">
                Contact method
                <div className="text-[14px] text-[#686868] border-b-[0.8px]  border-dashed">
                  View example
                </div>
              </div>
              <div className="flex max-md:flex-col gap-5">
                <div
                  className="max-w-[520px] max-md:w-full relative  cursor-pointer"
                  ref={popupRef}
                >
                  <div
                    className={`
                border bg-[#131516] border-[#131516] rounded-full px-5 h-[57px] text-sm text-white outline-none
                 
                `}
                  >
                    <div
                      className="w-full flex justify-between h-full p-2 items-center"
                      onClick={() => setOpen(!open)}
                    >
                      <div className="text-[15px] font-normal capitalize">
                        {/* {select ? ( */}
                        <div className="flex gap-3 items-center text-[#686868] ">
                          <div>
                            <FaTelegramPlane className="size-8 text-white bg-blue-500 p-[7px] rounded-full" />
                          </div>
                          {"Telegram"}{" "}
                        </div>
                        {/* ) : ( */}
                        {/* )} */}
                      </div>

                      <FaSortDown
                        className={`size-5 mb-2 transition-transform  `}
                      />
                    </div>
                  </div>

                  {/* {open && (
                  <div
                    className={`absolute z-10 mt-2 w-full shadow-xl  ${
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
                  className="w-full border bg-[#131516] border-[#131516] rounded-full px-5 h-[57px] text-[15px] font-normal text-[#686868] outline-none "
                />
              </div>
            </div>
            <div className="mt-5">
              Upload a screenshot showing your VIP status from another exchange,
              along with proof of your 30-day trading volume or assets.
            </div>
            <div className="bg-[#131516] flex justify-center items-center md:h-[116px] h-[85px] w-[85px] md:w-[116px]  rounded-[12px] cursor-pointer  mt-5 border-[0.8px]  border-dashed">
              <IoIosAdd />
            </div>
            <div className="text-[#686868] mt-5">
              Only PNG, JPG, and JPEG formats are supported. Max size of 10MB
              per file, up to 3 files.
            </div>
            <div className="w-full flex max-md:justify-center mt-5">
              <button className="bg-[#131516] h-[47px] w-full text-[18px]  p-1 font-bold text-white rounded-[33px]">
                Submit
              </button>
            </div>
            <div className="flex w-full justify-center md:hidden gap-4 p-2">
              <div className="text-[11px] text-[#686868] border-b-[0.8px]  border-dashed">
                Eligible
              </div>
              <div className="border-l "></div>
              <div className="text-[13px] flex gap-1 ">
                {" "}
                <FaTelegramPlane className="size-5 rounded-full" /> Contact us
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-30 gap-15 items-center md:p-[40px_0px_40px_0px] p-[40px_20px_40px_20px] ">
          <div className="font-bold text-[35px] md:text-[45px]">
            Become a Bitzup VIP to enjoy high fee discounts
          </div>
          <button className="p-[10px_20px_10px_20px] cursor-pointer flex justify-center items-center bg-[#FFDFAD] md:h-[58px] h-[30px] w-fit rounded-[41px] rounded-[6px] gap-2">
            <div className="flex max-md:hidden font-semibold text-black gap-1 items-center justify-center md:w-[180px] text-[18px]">
              <button
                src="gift.svg"
                className="text-[20px] rounded-[20px] text-[16px]"
              >
                {" "}
                Join Now
              </button>
            </div>
            <button
              className={`w-[120px] h-[47px] text-black md:hidden rounded-[33px] font-bold text-[16px] text-center`}
            >
              Join Now
            </button>
          </button>
        </div>
        <Footer isShow={false} />
      </div>
    </>
  );
};
