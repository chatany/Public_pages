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
  FaGlobe,
} from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { useAuth } from "./useAuth";
import Button from "./Common/Button";
import { BsTwitterX } from "react-icons/bs";

export const Footer = ({ isShow = true }) => {
  const isLoggedIn = useAuth();
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
        "A crypto exchange is an online platform where you buy, sell and trade digital assets like Bitcoin and Ethereum for other cryptocurrencies or regular money. BitZup brings deep liquidity, 2,300+ markets and bank-grade security into one place.",
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
        "Track live prices for 2,300+ assets on our Markets page, with 24h volume, price changes and TradingView candlestick charts — on web and the BitZup app.",
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
        { name: "VIP Program", link: "/trade/vip" },
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
                  className="w-full py-3 md:py-4 flex justify-between cursor-pointer items-center text-left group transition-all"
                >
                  <span className="md:text-xl font-medium  text-primary  transition-colors leading-tight pr-8">
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
                  <p className="text-text-muted text-left text-sm md:text-base font-medium leading-relaxed">
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
          {isLoggedIn ? (
            <>
              <div className="font-bold text-xl md:text-3xl text-center">
                Start earning and trading today
              </div>
              <div className="text-secondary text-sm md:text-base text-center max-md:px-4">
                Explore our advanced trading tools, auto invest plans, or earn yield with staking.
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-2 max-md:px-4">
                <button
                  className="btn-primary h-12 px-8 flex items-center justify-center font-bold text-black rounded-md cursor-pointer transition-colors"
                  onClick={() => window.location.href = "/trade/spot/BTCUSDT"}
                >
                  Trade Now
                </button>
                {/* <button
                  className="btn-secondary h-12 px-8 flex items-center justify-center font-bold rounded-md cursor-pointer transition-colors"
                  onClick={() => window.location.href = "/auto-invest"}
                >
                  Auto Invest
                </button>
                <button
                  className="btn-secondary h-12 px-8 flex items-center justify-center font-bold rounded-md cursor-pointer transition-colors"
                  onClick={() => window.location.href = "/trade/subscription"}
                >
                  Simple Earn
                </button> */}
              </div>
            </>
          ) : (
            <>
              <div className="font-bold text-xl md:text-3xl text-center">
                Your first trade is minutes away
              </div>
              <div className="text-secondary text-sm md:text-base text-center max-md:px-4">
                Create your free account and claim your new-user rewards today.
              </div>
              <button onClick={() => window.location.href = "/trade/register"}>
                <Button 
                className="h-10"
                variant="primary"
                >
                  Create free account
                </Button>
                {/* <div className="flex md:hidden font-semibold text-black gap-1 items-center text-base">
                  Create free account
                </div> */}
              </button>
            </>
          )}
        </div>
      )}
      <div className="py-5">
        <footer className="bg-surface text-primary py-6 max-md:hidden">
          <div className="max-w-7xl mx-auto  w-full">
            {/* Columns (Grid) */}
            <div className="mb-6 ">
              <img
                  src="/bitzup_light_logo.png"
                  className="h-auto w-[160px]"
                  alt="BitZup Logo"
                />
              </div>
            <div className="grid grid-cols-1 md:grid-cols-6 px-6 md:px-8 gap-8 w-full">
              {/* Column 1: LOGO, QR CODE & COMMUNITY */}
              
              <div className="text-left flex flex-col items-start gap-6 pr-4">
                {/* <div className="text-2xl font-bold">BitZup</div> */}
                
                {/* QR Code container */}
                <div className="flex flex-col items-start gap-2">
                  <div className="bg-white p-2 rounded-sm w-fit shadow-md">
                    <QRCode
                      size={90}
                      value={`${window.location.origin}/trade/download`}
                    />
                  </div>
                  <span className="text-[10px] text-secondary font-medium select-none">
                    Scan to download app
                  </span>
                </div>

                {/* Community Row */}
                <div className="flex flex-col gap-2 w-full">
                  <span className="text-sm font-semibold text-primary">Community</span>
                  <div className="flex gap-3">
                    <a
                      href="https://t.me/bitzup_official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-sm bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
                      title="Telegram"
                    >
                      <FaTelegram className="text-base text-telegram" />
                    </a>
                    <a
                      href="https://x.com/BitZup_Official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-sm bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
                      title="Twitter"
                    >
                      <BsTwitterX className="text-base" />
                    </a>
                    <a
                      href="https://www.instagram.com/bitzup_official?igsh=YTBlM3RyZTR1aHVx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-sm bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
                      title="Instagram"
                    >
                      <FaInstagram className="text-base text-instagram" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: ABOUT */}
              <div className="text-left">
                <h3 className="text-base font-semibold mb-4 text-primary">About</h3>
                <ul className="text-secondary text-sm flex flex-col gap-3">
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/aml-policy"} className="block py-1">AML Policy</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/cookies-policy"} className="block py-1">Cookie Policy</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/privacy-policy"} className="block py-1">Privacy Notice</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/risk-disclosure"} className="block py-1">Risk Disclosure</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/trading-policy"} className="block py-1">Trading Policy</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/user-agreement"} className="block py-1">User Agreement</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to={"/terms-of-use"} className="block py-1">Terms of use</Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: PRODUCT */}
              <div className="text-left">
                <h3 className="text-base font-semibold mb-4 text-primary">Product</h3>
                <ul className="text-secondary text-sm flex flex-col gap-3">
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/buy-crypto`} className="block py-1">Buy Crypto</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/futures/BTCUSDT`} className="block py-1">Futures Trading</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/spot/BTCUSDT`} className="block py-1">Spot Trading</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/subscription`} className="block py-1">Earn</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    {isLoggedIn ? (
                      <a href="/trade/auto-invest" className="block py-1">Auto Invest</a>
                    ) : (
                      <Link to="/invest" className="block py-1">Auto Invest</Link>
                    )}
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/convert`} className="block py-1">Convert</a>
                  </li>
                </ul>
              </div>

              {/* Column 4: TRADES */}
              <div className="text-left">
                <h3 className="text-base font-semibold mb-4 text-primary">Trades</h3>
                <ul className="text-secondary text-sm flex flex-col gap-3">
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/spot/BTCUSDT`} className="block py-1">BTCUSDT</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/spot/ETHUSDT`} className="block py-1">ETHUSDT</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/spot/DOGEUSDT`} className="block py-1">DOGEUSDT</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/spot/SOLUSDT`} className="block py-1">SOLUSDT</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <a href={`${MAIN_SITE}/spot/XRPUSDT`} className="block py-1">XRP USDT</a>
                  </li>
                </ul>
              </div>

              {/* Column 5: SERVICE */}
              <div className="text-left">
                <h3 className="text-base font-semibold mb-4 text-primary">Service</h3>
                <ul className="text-secondary text-sm flex flex-col gap-3">
                  <li className="hover:text-brand-green transition-colors">
                    {isLoggedIn ? (
                      <a href="/trade/referral" className="block py-1">Referral</a>
                    ) : (
                      <Link to="/referral" className="block py-1">Referral</Link>
                    )}
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    {isLoggedIn ? (
                      <a href="/trade/vip" className="block py-1">VIP Program</a>
                    ) : (
                       <a href="/trade/vip" className="block py-1">VIP Program</a>
                    )}
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to="/careers" className="block py-1">Careers</Link>
                  </li>
                </ul>
              </div>

              {/* Column 6: SUPPORT */}
              <div className="text-left">
                <h3 className="text-base font-semibold mb-4 text-primary">Support</h3>
                <ul className="text-secondary text-sm flex flex-col gap-3">
                  <li className="hover:text-brand-green transition-colors">
                    <a href="https://support.bitzup.com/support/home" className="block py-1">Support Center</a>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to="/submit-request" className="block py-1">Submit a request</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to="/fee-schedule" className="block py-1">Fee Schedule</Link>
                  </li>
                  <li className="hover:text-brand-green transition-colors">
                    <Link to="/official-verification" className="block py-1">Official Verification</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROW 3: Risk Warning & Language */}
            {/* <div className="border-t border-border/40 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-[10px] text-secondary font-medium leading-relaxed max-w-[600px]">
                Risk Warning: Digital asset prices are subject to high market risk and price volatility. The value of your investment may go down or up, and you may not get back the amount invested. You are solely responsible for your investment decisions and BitZup is not liable for any losses you may incur.
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-surface-2 text-xs text-text-secondary cursor-pointer hover:text-primary transition-all select-none shrink-0 self-end md:self-auto">
                <FaGlobe className="size-3.5 text-secondary" />
                <span>English</span>
                <IoIosArrowDown className="size-3 text-secondary" />
              </div>
            </div> */}
          </div>
        </footer>
        <div className="md:hidden bg-surface p-6 space-y-4">
          {/* Logo & Copyright */}
          <div className="pb-4 border-b border-border/30 mb-2 flex flex-col items-start">
            <img
              src="/bitzup_light_logo.png"
              className="h-6 w-auto mb-2"
              alt="BitZup Logo"
            />
            {/* <div className="text-[10px] text-secondary font-medium">
              © 2023 - 2026 BITZUP.COM
            </div> */}
          </div>

          {/* Accordion Links */}
          <div className="space-y-1">
            {ae?.map((item, index) => {
              const isMobileOpen = openMobileIndex === index;
              return (
                <div key={index} className="border-b border-border/30 last:border-none">
                  <button
                    onClick={() => toggleMobile(index)}
                    className="w-full py-3.5 flex items-center justify-between text-left focus:outline-none"
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
          </div>

          {/* Social Icons & Language Selector */}
          <div className="pt-6 border-t border-border/30 flex flex-col gap-6 items-start">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://t.me/bitzup_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
              >
                <FaTelegram className="text-base text-telegram" />
              </a>
              <a
                href="https://x.com/BitZup_Official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
              >
                <FaTwitter className="text-base" />
              </a>
              <a
                href="https://www.instagram.com/bitzup_official?igsh=YTBlM3RyZTR1aHVx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
              >
                <FaInstagram className="text-base text-instagram" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
              >
                <FaTiktok className="text-base" />
              </a>
              <a
                href="mailto:support@bitzup.com"
                className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-secondary hover:text-brand-green hover:border-brand-green transition-all duration-200 cursor-pointer"
              >
                <TfiEmail className="text-base" />
              </a>
            </div>

            {/* Language Dropdown */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-surface-2 text-xs text-text-secondary cursor-pointer hover:text-primary transition-all select-none">
              <FaGlobe className="size-3.5 text-secondary" />
              <span>English</span>
              <IoIosArrowDown className="size-3 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
