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
      question: "What is cryptocurrency exchange?",
      answer:
        "A cryptocurrency exchange is a digital marketplace that allows users to trade cryptocurrencies for other assets, such as conventional fiat money or different digital currencies. BitZup provides a high-performance environment with deep liquidity and top-tier security for all your trading needs.",
    },
    {
      question: "What products does BitZup offer?",
      answer:
        "BitZup offers a comprehensive suite of digital asset services, including Spot Trading with advanced charting tools, USDT-settled Futures contracts, Simple Earn for passive income, and a secure Wallet for managing your assets across multiple chains.",
    },
    {
      question: "How do I buy Bitcoin and other Cryptocurrencies on BitZup?",
      answer:
        "Buying crypto on BitZup is simple. You can use our 'Convert' feature for instant swaps, or trade on the 'Spot' market for more control. We support various deposit methods to ensure you can start building your portfolio quickly and safely.",
    },
    {
      question: "How to trade Cryptocurrencies on BitZup?",
      answer:
        "To start trading, simply log in to your account, navigate to the 'Trade' section, and choose between Spot or Futures. Our intuitive interface allows you to place limit, market, or trigger orders with ease, supported by real-time order books and depth charts.",
    },
    {
      question: "How can I track cryptocurrency prices?",
      answer:
        "You can track real-time prices for over 300+ crypto assets directly on our Markets page. We provide 24-hour volume, price change percentages, and detailed candlestick charts powered by TradingView integration.",
    },
    {
      question: "Is BitZup safe for crypto trading?",
      answer:
        "BitZup employs bank-grade security protocols, including multi-sig cold storage custody for user funds, regular reserve audits, and smart-contract verification. We prioritize platform integrity with 24/7 monitoring and advanced encryption to ensure your assets are protected at all times.",
    },
    {
      question: "How to trade Cryptocurrencies on BitZup?",
      answer:
        "To start trading on the BitZup Crypto Exchange Platform, simply log in to your account, navigate to the 'Trade' section, and choose between Spot or Futures. Our intuitive interface allows you to place limit, market, or trigger orders with ease.",
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
      ele: "Support",
      category: [
        { name: "Support Center", link: "/support" },
        { name: "Submit a request", link: "/request" },
        { name: "Fee Schedule", link: "/fees" },
        { name: "Official Verification", link: "/verification" },
      ],
    },{
      ele:"Service",
      category:[
        {name:"Referral", link:"/referral"},
        {name:"VIP Program", link:"/vip"},
        {name:"Careers", link:"/careers"},
      ]
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
            Start your crypto journey now !
          </div>
          <button className="btn-primary h-[58px] px-10">
            <div className="flex max-md:hidden font-semibold text-black gap-1 items-center text-lg">
              <img src="gift.svg" className="size-6" /> Sign up now
            </div>
            <FaArrowRightLong className="size-5 text-black md:hidden" />
          </button>
        </div>
      )}
      <div className="py-5">
        <footer className="bg-surface text-primary py-16 max-md:hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-12 w-full">
            {/* LEFT SECTION */}
            <div className="space-y-6 flex flex-col w-full items-center">
              <h2 className="text-2xl font-semibold text-center">
                Trade Crypto Anywhere Anytime
              </h2>

              <div className="size-32">
                <QRCode className="w-full h-full bg-white  p-2" value={""} />
                <p className="text-xs text-gray-400 mt-1 text-center">
                  Scan to download app
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-center">
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
                  <Link to={"/careers"} className="block p-3 -my-1.5 -mx-3">Careers</Link>
                </li>
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

              {/* SERVICE SECTION */}
              <h3 className="text-xl font-semibold mb-4 mt-8">Service</h3>
              <ul className="text-gray-300 text-sm flex flex-col">
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/referral" className="block p-3 -my-1.5 -mx-3">Referral</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/vip" className="block p-3 -my-1.5 -mx-3">VIP Program</Link>
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
                  <Link to="/request" className="block p-3 -my-1.5 -mx-3">Submit a request</Link>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <a href={`${MAIN_SITE}/vip`} className="block p-3 -my-1.5 -mx-3">Fee Schedule</a>
                </li>
                <li className="hover:text-brand-green hover:underline cursor-pointer">
                  <Link to="/verification" className="block p-3 -my-1.5 -mx-3">Official Verification</Link>
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
                        {ele.link.startsWith("/trade") ? (
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
