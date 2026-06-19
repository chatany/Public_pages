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
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  const toggleMobile = (index) => {
    setOpenMobileIndex(openMobileIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a cryptocurrency exchange?",
      answer:
        "A crypto exchange is an online platform where you buy, sell and trade digital assets like Bitcoin and Ethereum for other cryptocurrencies or regular money. BitZup brings deep liquidity, 4,100+ markets and bank-grade security into one place.",
    },
    {
      question: "What products does BitZup offer?",
      answer:
        "Everything in one account: instant Buy/Convert, Spot trading with pro charts, USDT-settled Futures, Simple Earn for passive yield, copy trading, and a secure multi-chain wallet.",
    },
    {
      question: "How do I buy Bitcoin on BitZup?",
      answer:
        "Sign up, verify your account, then add funds by card, bank transfer or crypto deposit. Use Convert for instant swaps or Spot for full control — your first buy takes minutes.",
    },
    {
      question: "How do I trade crypto on BitZup?",
      answer:
        "Log in, open Trade, and choose Spot or Futures. Place market, limit or trigger orders with real-time order books, depth charts and TradingView integration.",
    },
    {
      question: "How can I track crypto prices?",
      answer:
        "Track live prices for 4,100+ assets on our Markets page, with 24h volume, price changes and TradingView candlestick charts — on web and the BitZup app.",
    },
    {
      question: "Is BitZup safe?",
      answer:
        "Yes. We use multi-sig cold storage, publish regular proof-of-reserves audits, audit our smart contracts, and monitor the platform 24/7 with bank-grade encryption.",
    },
    {
      question: "What are BitZup's trading fees?",
      answer:
        "BitZup keeps fees among the lowest in crypto, with maker/taker discounts up to 67% for VIPs. See the full Fee Schedule for spot, futures and withdrawal costs.",
    },
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
      ele: "Service",
      category: [
        { name: "Referral", link: "/referral" },
        { name: "VIP Program", link: "/vip" },
        { name: "Careers", link: "/careers" },
      ],
    },
    {
      ele: "Support",
      category: [
        { name: "Support Center", link: "https://support.bitzup.com/support/home" },
        { name: "Submit a request", link: "/submit-request" },
        { name: "Fee Schedule", link: "/fee-schedule" },
        { name: "Official Verification", link: "/official-verification" },
      ],
    }
  ];
  const dark = true;
  const isOpen = false;
  return (
    <div className="bg-background">
      {isShow && (
        <div className="py-24 md:px-16 px-5 max-w-7xl mx-auto w-full">
          {/* FAQ Header */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
              FAQs
            </h2>
          </div>

          {/* Custom Accordion List */}
          <div className=" border-border">
            {faqData.map((item, index) => (
              <div key={index} className=" border-border">
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-3 md:py-5 flex justify-between cursor-pointer items-center text-left group transition-all"
                >
                  <span className="text-md: md:text-lg font-medium  text-primary group-hover:text-brand-green transition-colors leading-tight pr-8">
                    {item.question}
                  </span>
                  <IoIosArrowDown
                    className={`text-primary size-3 md:size-5 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180 text-brand-green" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[31.25rem] pb-10" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400 text-left text-sm md:text-md font-medium leading-relaxed">
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
        <div className="flex flex-col gap-5 items-center bg-surface py-10 mt-10">
          <div className="font-bold text-xl md:text-3xl text-center">
            Your first trade is minutes away
          </div>
          <div className="text-secondary text-sm md:text-base text-center max-md:px-4">
            Create your free account and claim your new-user rewards today.
          </div>
          <button className="btn-primary h-[58px] px-10" onClick={() => window.location.href = "/trade/register"}>
            <div className="flex max-md:hidden font-semibold text-black gap-1 items-center text-lg">
              Create free account
            </div>
            <div className="flex md:hidden font-semibold text-black gap-1 items-center text-base">
              Create free account
            </div>
          </button>
        </div>
      )}
      <div className="py-5">
        <footer className="bg-surface text-primary py-16 max-md:hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-6 gap-8 w-full">
            {/* LEFT SECTION */}
            <div className="space-y-6 flex flex-col w-full items-start">
              <h2 className="text-2xl font-semibold text-left">
                Trade Crypto Anywhere Anytime
              </h2>

              <div className="flex flex-col items-start">
                <div className="size-32">
                  <QRCode className="w-full h-full bg-white  p-2" value={`${window.location.origin}/trade/download`} />
                </div>
                <p className="text-xs text-gray-400 mt-1 text-left">
                  Scan to download app
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-semibold mb-3">
                  Community
                </h3>
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
                      <FaTelegram className="text-xl text-telegram" />
                    </div>
                    <span className="text-xs opacity-60">Telegram</span>
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
                    <span className="text-xs opacity-60">Twitter</span>
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
                      <FaInstagram className="text-xl text-instagram" />
                    </div>
                    <span className="text-xs opacity-60">Instagram</span>
                  </a>
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <div
                      className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                    >
                      <FaTiktok className="text-xl" />
                    </div>
                    <span className="text-xs opacity-60">Tik Tok</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="text-gray-300 text-sm flex flex-col">
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/aml-policy"} className="block p-3 -my-1.5 -mx-3">AML Policy</Link>
                </li>
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/cookies-policy"} className="block p-3 -my-1.5 -mx-3">Cookie Policy</Link>
                </li>
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/privacy-policy"} className="block p-3 -my-1.5 -mx-3">Privacy Notice</Link>
                </li>
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/risk-disclosure"} className="block p-3 -my-1.5 -mx-3">Risk Disclosure</Link>
                </li>
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/trading-policy"} className="block p-3 -my-1.5 -mx-3">Trading Policy</Link>
                </li>
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/user-agreement"} className="block p-3 -my-1.5 -mx-3">User Agreement</Link>
                </li>
                <li className="hover:text-brand-green hover:underline ">
                  <Link to={"/terms-of-use"} className="block p-3 -my-1.5 -mx-3">Terms of use</Link>
                </li>
              </ul>
            </div>

            {/* PRODUCT */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Product</h3>
              <ul className="text-gray-300 text-sm flex flex-col">
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/BTCUSDT`} className="block p-3 -my-1.5 -mx-3">Buy Crypto</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/futures/BTCUSDT`} className="block p-3 -my-1.5 -mx-3">Futures Trading</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/BTCUSDT`} className="block p-3 -my-1.5 -mx-3">Spot Trading</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/subscription`} className="block p-3 -my-1.5 -mx-3">Earn</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/invest" className="block p-3 -my-1.5 -mx-3">Auto Invest</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/convert`} className="block p-3 -my-1.5 -mx-3">Convert</a>
                </li>
              </ul>
            </div>

            {/* TRADES */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Trades</h3>
              <ul className="text-gray-300 text-sm flex flex-col">
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/BTCUSDT`} className="block p-3 -my-1.5 -mx-3">BTCUSDT</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/ETHUSDT`} className="block p-3 -my-1.5 -mx-3">ETHUSDT</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/DOGEUSDT`} className="block p-3 -my-1.5 -mx-3">DOGEUSDT</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/SOLUSDT`} className="block p-3 -my-1.5 -mx-3">SOLUSDT</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/spot/XRPUSDT`} className="block p-3 -my-1.5 -mx-3">XRP USDT</a>
                </li>
              </ul>
            </div>

            {/* SERVICE */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <ul className="text-gray-300 text-sm flex flex-col">
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/referral" className="block p-3 -my-1.5 -mx-3">Referral</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/vip" className="block p-3 -my-1.5 -mx-3">VIP Program</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/careers" className="block p-3 -my-1.5 -mx-3">Careers</Link>
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-left">Support</h3>
              <ul className="text-gray-300 text-sm text-left flex flex-col">
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href="https://support.bitzup.com/support/home" className="block p-3 -my-1.5 -mx-3">
                    Support Center
                  </a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/submit-request" className="block p-3 -my-1.5 -mx-3">Submit a request</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/fee-schedule" className="block p-3 -my-1.5 -mx-3">Fee Schedule</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/official-verification" className="block p-3 -my-1.5 -mx-3">Official Verification</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="md:hidden bg-surface p-3 space-y-2">
          {ae?.map((item, index) => {
            const isMobileOpen = openMobileIndex === index;
            return (
              <div key={index} className="border-b border-border/30 last:border-none">
                <button
                  onClick={() => toggleMobile(index)}
                  className="w-full py-3 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`${dark ? "text-primary" : "text-secondary"} text-base font-semibold`}>
                    {item.ele}
                  </span>
                  <IoIosArrowDown
                    className={`size-4 transition-transform duration-300 ${isMobileOpen ? "rotate-180 text-brand-green" : dark ? "text-primary" : "text-secondary"}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? "max-h-60 pb-3" : "max-h-0"}`}
                >
                  <div className="flex flex-col gap-2 pl-2">
                    {item?.category?.map((ele, ind) => (
                      <div
                        key={ind}
                        className={`${dark ? "text-primary" : "text-secondary"} text-sm font-normal text-left`}
                      >
                        {ele.link.startsWith("/trade") || ele.link.startsWith("http") ? (
                          <a
                            className="hover:text-brand-green hover:underline block p-1.5 -my-1.5 -mx-3"
                            href={ele.link}
                          >
                            {ele.name}
                          </a>
                        ) : (
                          <Link
                            className="hover:text-brand-green hover:underline block p-1.5 -my-1.5 -mx-3"
                            to={ele.link}
                          >
                            {ele.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
                  <FaTelegram className="text-xl text-telegram" />
                </div>
                <span className="text-xs opacity-60">Telegram</span>
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
                <span className="text-xs opacity-60">Twitter</span>
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
                  <FaInstagram className="text-xl text-instagram" />
                </div>
                <span className="text-xs opacity-60">Instagram</span>
              </a>
              <div className="flex flex-col items-center gap-1 cursor-pointer group">
                <div
                  className={`p-2 rounded-lg transition-all border ${dark ? "border-gray-700 group-hover:bg-gray-800" : "border-gray-100 group-hover:bg-gray-50"}`}
                >
                  <FaTiktok className="text-xl" />
                </div>
                <span className="text-xs opacity-60">Tik Tok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
