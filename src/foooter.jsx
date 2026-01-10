import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import {
  FaChevronRight,
  FaInstagramSquare,
  FaMinus,
  FaPlus,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import QRCode from "react-qr-code";

export const Footer = () => {
  const arr = [
    "What is cryptocurrency exchange?",
    "What products does Bitzup offer?",
    "How do i buy Bitcoin and other  Cryptocurrencies on Bitzup ?",
    "How to trade Cryptocurrencies on Bitzup ?",
    "How can I track cryptocurrency prices?",
    "Why choose Bitzup as your cryptocurrency exchange?",
  ];
  const ae = [
    {
      ele: "About",
      category: [
        "About Us",
        "Terms of Service",
        "Privacy Notice",
        "Risk Warning",
        "Announcements",
      ],
    },
    {
      ele: "Product",
      category: [
        "Buy Crypto",
        "Futures Trading",
        "Spot Trading",
        "Earn",
        "Rewards Hub",
      ],
    },
    { ele: "Trade", category: ["BTCUSDT", "ETHUSDT", "DOGEUSDT", "SOLUSDT"] },
    {
      ele: "Support",
      category: [
        "Support Center",
        "Submit a request",
        "Fee Schedule",
        "Official Verification",
      ],
    },
  ];
  const dark = true;
  const isOpen = false;
  return (
    <div>
      <div className="p-5">
        <div className="justify-between items-center flex">
          <div></div>
          <div className="text-[36px] font-extrabold">FAQS</div>
          <div className="flex gap-3 items-center">
            View More <FaChevronRight />
          </div>
        </div>
        {arr?.map((item, index) => (
          <Accordion
            key={index}
            className={`!p-0 !shadow-none !border-none !bg-transparent `}
          >
            <AccordionSummary
              expandIcon={
                isOpen ? (
                  <IoIosArrowUp
                    className={`${
                      dark ? "text-[#EAECEF]" : "text-[#202630]"
                    } size-5`}
                  />
                ) : (
                  <IoIosArrowDown
                    className={`${
                      dark ? "text-[#EAECEF]" : "text-[#202630]"
                    } size-5`}
                  />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
              className="!m-0 !px-0 !py-0 flex items-center  !border-none justify-between"
            >
              <Typography
                component="span"
                className={`${
                  dark ? "text-[#EAECEF]" : "text-[#202630]"
                } text-[16px] leading-[32px] pl-0 font-medium`}
              >
                {item}
              </Typography>
            </AccordionSummary>
            {/* <AccordionDetails>
        {item?.category?.map((ele, ind) => (
          <div
            key={ind}
            className={`${
              dark ? "text-[#EAECEF]" : "text-[#202630]"
            } text-[14px] font-normal leading-[22px] p-1.5`}
          >
            {ele}
          </div>
        ))}
      </AccordionDetails> */}
          </Accordion>
        ))}
      </div>
      <div className="p-[20px_10px_20px_10px]">
        <footer className="bg-[#131516] text-white px-10 py-16 max-md:hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* LEFT SECTION */}
            <div className="space-y-6 flex flex-col items-center">
              <h2 className="text-2xl font-semibold">
                Trade Crypto Anywhere Anytime
              </h2>

              <div className=" p-2 w-[120px]">
                <QRCode className="w-full h-full bg-white  p-2" value={""} />
              </div>

              <p className="text-sm text-gray-400">Scan to download app</p>

              <div>
                <h3 className="text-lg font-semibold mb-3">Community</h3>
                <div className="flex gap-4 text-xl text-white">
                <span>
                <FaXTwitter />
              </span>
              <span>
                <FaTelegramPlane />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
              <span>
                <TfiEmail />
              </span>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Privacy Notice</li>
                <li>Risk Warning</li>
                <li>Announcements</li>
              </ul>
            </div>

            {/* PRODUCT */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Buy Crypto</li>
                <li>Futures Trading</li>
                <li>Spot Trading</li>
                <li>Earn</li>
                <li>Rewards Hub</li>
              </ul>
            </div>

            {/* TRADES */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Trades</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>BTCUSDT</li>
                <li>ETHUSDT</li>
                <li>DOGEUSDT</li>
                <li>SOLUSDT</li>
                <li>XRP USDT</li>
                <li>Crypto Price</li>
                <li>Bitcoin Price</li>
                <li>Ethereum Price</li>
                <li>Solana Price</li>
                <li>XRP Price</li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Support Center</li>
                <li>Submit a request</li>
                <li>Fee Schedule</li>
                <li>Official Verification</li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="md:hidden bg-[#131516] p-3">
          {ae?.map((item, index) => (
            <Accordion
              key={index}
              className={`!p-0 !shadow-none !border-none !bg-transparent `}
            >
              <AccordionSummary
                expandIcon={
                  isOpen ? (
                    <IoIosArrowUp
                      className={`${
                        dark ? "text-[#EAECEF]" : "text-[#202630]"
                      } size-5`}
                    />
                  ) : (
                    <IoIosArrowDown
                      className={`${
                        dark ? "text-[#EAECEF]" : "text-[#202630]"
                      } size-5`}
                    />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="!m-0 !px-0 !py-0 flex items-center  !border-none justify-between"
              >
                <Typography
                  component="span"
                  className={`${
                    dark ? "text-[#EAECEF]" : "text-[#202630]"
                  } text-[16px] leading-[32px] pl-0 font-medium`}
                >
                  {item.ele}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item?.category?.map((ele, ind) => (
                  <div
                    key={ind}
                    className={`${
                      dark ? "text-[#EAECEF]" : "text-[#202630]"
                    } text-[14px] font-normal leading-[22px] text-left`}
                  >
                    {ele}
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
          <div>
            <div className="flex gap-4 text-xl text-white">
              <span>
                <FaXTwitter />
              </span>
              <span>
                <FaTelegramPlane />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
              <span>
                <TfiEmail />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
