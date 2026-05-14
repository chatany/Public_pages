import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import {
  FaChevronRight,
  FaInstagram,
  FaInstagramSquare,
  FaMinus,
  FaPlus,
  FaTelegram,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

export const Footer = ({ isShow = true }) => {
  const MAIN_SITE = "/trade";
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is cryptocurrency exchange?",
      answer: "A cryptocurrency exchange is a digital marketplace that allows users to trade cryptocurrencies for other assets, such as conventional fiat money or different digital currencies. Bitzup provides a high-performance environment with deep liquidity and top-tier security for all your trading needs."
    },
    {
      question: "What products does Bitzup offer?",
      answer: "Bitzup offers a comprehensive suite of digital asset services, including Spot Trading with advanced charting tools, USDT-settled Futures contracts, Simple Earn for passive income, and a secure Wallet for managing your assets across multiple chains."
    },
    {
      question: "How do I buy Bitcoin and other Cryptocurrencies on Bitzup?",
      answer: "Buying crypto on Bitzup is simple. You can use our 'Convert' feature for instant swaps, or trade on the 'Spot' market for more control. We support various deposit methods to ensure you can start building your portfolio quickly and safely."
    },
    {
      question: "How to trade Cryptocurrencies on Bitzup?",
      answer: "To start trading, simply log in to your account, navigate to the 'Trade' section, and choose between Spot or Futures. Our intuitive interface allows you to place limit, market, or trigger orders with ease, supported by real-time order books and depth charts."
    },
    {
      question: "How can I track cryptocurrency prices?",
      answer: "You can track real-time prices for over 300+ crypto assets directly on our Markets page. We provide 24-hour volume, price change percentages, and detailed candlestick charts powered by TradingView integration."
    },
    {
      question: "Why choose Bitzup as your cryptocurrency exchange?",
      answer: "Bitzup stands out for its commitment to user security, ultra-fast matching engine, and 24/7 global support. Whether you're a first-time buyer or a professional institutional trader, our platform is designed to scale with your ambitions."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const ae = [
    {
      ele: "About",
      category: [
        { name: "AML Policy", link: "/aml-policy" },
        { name: "Cookie Policy", link: "/cookies-policy" },
        { name: "Privacy Notice", link: "/privacy-policy" },
        { name: "Risk Disclosure", link: "/risk-disclosure" },
        { name: "Trading Policy", link: "/trading-policy" },
        { name: "User Agreement", link: "/user-agreement" },
        { name: "Terms of use", link: "/terms-of-use" },
      ],
    },
    {
      ele: "Product",
      category: [
        { name: "Buy Crypto", link: `${MAIN_SITE}/spot/BTCUSDT` },
        { name: "Futures Trading", link: `${MAIN_SITE}/futures/BTCUSDT` },
        { name: "Spot Trading", link: `${MAIN_SITE}/spot/BTCUSDT` },
        { name: "Earn", link: `${MAIN_SITE}/subscription` },
        { name: "Rewards Hub", link: "/rewards" },
      ],
    },
    {
      ele: "Trade",
      category: [
        { name: "BTCUSDT", link: `${MAIN_SITE}/spot/BTCUSDT` },
        { name: "ETHUSDT", link: `${MAIN_SITE}/spot/ETHUSDT` },
        { name: "DOGEUSDT", link: `${MAIN_SITE}/spot/DOGEUSDT` },
        { name: "SOLUSDT", link: `${MAIN_SITE}/spot/SOLUSDT` },
      ],
    },
    {
      ele: "Support",
      category: [
        { name: "Support Center", link: "/support" },
        { name: "Submit a request", link: "/request" },
        { name: "Fee Schedule", link: "/fees" },
        { name: "Official Verification", link: "/verification" },
      ],
    },
  ];
  const dark = true;
  const isOpen = false;
  return (
    <div className="bg-black">
      {isShow && (
        <div className="md:p-[100px_60px] p-[60px_20px] max-w-[1200px] mx-auto">
          {/* FAQ Header */}
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[56px] font-bold text-white text-center">
              FAQs
            </h2>
          </div>

          {/* Custom Accordion List */}
          <div className=" border-[#1f1f1f]">
            {faqData.map((item, index) => (
              <div key={index} className=" border-[#1f1f1f]">
                <button 
                  onClick={() => toggle(index)}
                  className="w-full py-8 md:py-10 flex justify-between items-center text-left group transition-all"
                >
                  <span className="text-[18px] md:text-[28px] font-bold text-white group-hover:text-[#2EDBAD] transition-colors leading-tight pr-8">
                    {item.question}
                  </span>
                  <IoIosArrowDown 
                    className={`text-white size-5 md:size-8 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180 text-[#2EDBAD]" : ""}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] pb-10" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400 text-left text-[15px] md:text-[20px] font-medium leading-relaxed max-w-[1000px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
       
        </div>
      )}
      {isShow && (
        <div className="flex flex-col gap-5 items-center bg-[#131516] md:p-[40px_0px_40px_0px] p-[10px_0px_10px_0px] mt-10">
          <div className="font-bold text-[20px] md:text-[50px]">
            Start your crypto journey now !
          </div>
          <button className="p-[10px_20px_10px_20px] cursor-pointer flex justify-center items-center bg-[#2EDBAD] md:h-[58px] h-[30px] w-fit md:rounded-[41px] rounded-[6px] gap-2">
            <div className="flex max-md:hidden font-semibold text-black gap-1 items-center text-[18px]">
              <img src="gift.svg" className="size-6" /> Sign up now
            </div>
            <FaArrowRightLong className="size-5 text-black md:hidden" />
          </button>
        </div>
      )}
      <div className="p-[20px_0px_20px_0px]">
        <footer className="bg-[#131516] text-white px-10 py-16 max-md:hidden">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* LEFT SECTION */}
            <div className="space-y-6 flex flex-col items-center">
              <h2 className="text-2xl font-semibold">
                Trade Crypto Anywhere Anytime
              </h2>

              <div className="w-[120px] h-[120px]">
                <QRCode className="w-full h-full bg-white  p-2" value={""} />
                <p className="text-[10px] text-gray-400 mt-1">
                  Scan to download app
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Community</h3>
                <div className="flex gap-6">
                  <a
                    href="https://t.me/bitzup_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 cursor-pointer group no-underline text-inherit"
                  >
                    <div
                      className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                    >
                      <FaTelegram className="text-xl text-[#24A1DE]" />
                    </div>
                    <span className="text-[10px] opacity-60">Telegram</span>
                  </a>
                  <a
                    href="https://x.com/BitZup_Official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 cursor-pointer group no-underline text-inherit"
                  >
                    <div
                      className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                    >
                      <FaTwitter className="text-xl" />
                    </div>
                    <span className="text-[10px] opacity-60">Twitter</span>
                  </a>
                  <a
                    href="https://www.instagram.com/bitzup_official?igsh=YTBlM3RyZTR1aHVx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 cursor-pointer group no-underline text-inherit"
                  >
                    <div
                      className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                    >
                      <FaInstagram className="text-xl text-[#E4405F]" />
                    </div>
                    <span className="text-[10px] opacity-60">Instagram</span>
                  </a>
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <div
                      className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                    >
                      <FaTiktok className="text-xl" />
                    </div>
                    <span className="text-[10px] opacity-60">Tik Tok</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/carrier"}>Careers</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/aml-policy"}>AML Policy</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/cookies-policy"}>Cookie Policy</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/privacy-policy"}>Privacy Notice</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/risk-disclosure"}>Risk Disclosure</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/trading-policy"}>Trading Policy</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/user-agreement"}>User Agreement</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline ">
                  <Link to={"/terms-of-use"}>Terms of use</Link>
                </li>
              </ul>

              {/* SERVICE SECTION */}
              <h3 className="text-xl font-semibold mb-4 mt-8">Service</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <Link to="/referral">Referral</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/vip`}>VIP Program</a>
                </li>
              </ul>
            </div>

            {/* PRODUCT */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/BTCUSDT`}>Buy Crypto</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/futures/BTCUSDT`}>Futures Trading</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/BTCUSDT`}>Spot Trading</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/subscription`}>Earn</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/recurring`}>Auto Invest</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/convert`}>Convert</a>
                </li>
              </ul>
            </div>

            {/* TRADES */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Trades</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/BTCUSDT`}>BTCUSDT</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/ETHUSDT`}>ETHUSDT</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/DOGEUSDT`}>DOGEUSDT</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/SOLUSDT`}>SOLUSDT</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/XRPUSDT`}>XRP USDT</a>
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-left">Support</h3>
              <ul className="space-y-2 text-gray-300 text-sm text-left">
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href="https://support.bitzup.com/support/home">
                    Support Center
                  </a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <Link to="/request">Submit a request</Link>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/vip`}>Fee Schedule</a>
                </li>
                <li className="hover:text-[#2EDBAD] hover:underline cursor-pointer">
                  <Link to="/verification">Official Verification</Link>
                </li>
            
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
              {/* <AccordionDetails> */}
              {item?.category?.map((ele, ind) => (
                <div
                  key={ind}
                  className={`${
                    dark ? "text-[#EAECEF]" : "text-[#202630]"
                  } text-[14px] font-normal leading-[22px] text-left`}
                >
                  {ele.link.startsWith("/trade") ? (
                    <a
                      className="hover:text-[#2EDBAD] hover:underline "
                      href={ele.link}
                    >
                      {ele.name}
                    </a>
                  ) : (
                    <Link
                      className="hover:text-[#2EDBAD] hover:underline "
                      to={ele.link}
                    >
                      {ele.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* </AccordionDetails> */}
            </Accordion>
          ))}
          <div>
            <div className="flex gap-6 mt-4">
              <a
                href="https://t.me/bitzup_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 cursor-pointer group no-underline text-inherit"
              >
                <div
                  className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                >
                  <FaTelegram className="text-xl text-[#24A1DE]" />
                </div>
                <span className="text-[10px] opacity-60">Telegram</span>
              </a>
              <a
                href="https://x.com/BitZup_Official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 cursor-pointer group no-underline text-inherit"
              >
                <div
                  className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                >
                  <FaTwitter className="text-xl" />
                </div>
                <span className="text-[10px] opacity-60">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/bitzup_official?igsh=YTBlM3RyZTR1aHVx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 cursor-pointer group no-underline text-inherit"
              >
                <div
                  className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                >
                  <FaInstagram className="text-xl text-[#E4405F]" />
                </div>
                <span className="text-[10px] opacity-60">Instagram</span>
              </a>
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div
                  className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                >
                  <FaTiktok className="text-xl" />
                </div>
                <span className="text-[10px] opacity-60">Tik Tok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
