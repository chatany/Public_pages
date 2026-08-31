import { BiCreditCard, BiWallet } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const MAIN_SITE = "/trade";

export const MenuItem = [
  {
    icon: <MdDashboardCustomize className="size-5" />,
    name: "Dashboard",
    path: `${MAIN_SITE}/dashboard`,
  },
  {
    icon: <LuWallet className="size-5" />,
    name: "Assets",
    path: `${MAIN_SITE}/assets`,
  },
  {
    icon: <HiOfficeBuilding className="size-5" />,
    name: "Orders",
    path: `${MAIN_SITE}/orders`,
  },
  {
    icon: <FaUserLarge className="size-5" />,
    name: "Account",
    path: `${MAIN_SITE}/Identity`,
  },
  {
    icon: <FaUserPlus className="size-5" />,
    name: "Referral",
    path: `${MAIN_SITE}/referral`,
  },
  { icon: <CiLogout className="size-5" />, name: "Log Out" },
];

export const data = [
  {
    category: "Buy Crypto",
    item: [
      {
        title: "Buy Crypto",
        description: "Visa, Mastercard, and more",
        path: `${MAIN_SITE}/buy-crypto`,
        iconUrlDark: <BiCreditCard className="w-5 h-5 text-text-primary" />,
        iconUrlLight: <BiCreditCard className="w-5 h-5 text-text-primary" />,
      },
      {
        title: "Crypto Deposit",
        description: "Deposit crypto to your account instantly",
        path: `${MAIN_SITE}/crypto/deposit`,
        iconUrlDark: <BiWallet className="w-5 h-5 text-text-primary" />,
        iconUrlLight: <BiWallet className="w-5 h-5 text-text-primary" />,
      },
      {
        title: "Auto-Invest",
        description: "Auto-buy crypto on your schedule",
        path: "/invest",
        iconUrlDark: <FiRefreshCw className="w-5 h-5 text-text-primary" />,
        iconUrlLight: <FiRefreshCw className="w-5 h-5 text-text-primary" />,
      },
      {
        title: "OTC Trading",
        description: "Large trades for institutions & individuals",
        path: `${MAIN_SITE}/otc`,
        iconUrlDark: "/swapBlack.png",
        iconUrlLight: "/swapWhite.png",
      },
    ],
  },
  {
    category: "Spot",
    item: [
      {
        title: "Trade",
        description: "Trade Bitcoin, Ethereum & top crypto with USDT, USDC settlement",
        path: `${MAIN_SITE}/spot/BTCUSDT`,
        iconUrlDark: "/icon 1 Black-01.png",
        iconUrlLight: "/icon 1 white-01.png",
        key: "spot",
      },
      {
        title: "Stocks",
        description: "Trade Apple, Tesla, Nvidia & global stocks with USDT, USDC settlement",
        path: `${MAIN_SITE}/spot/RSPYUSDT`,
        iconUrlDark: "/icon 2 black-01.png",
        iconUrlLight: "/icon 2 white-02.png",
        badge: "New",
        key: "stocks",
      },
      {
        title: "0 Fees",
        description: "Trade selected spot pairs with 0% trading fees",
        path: `${MAIN_SITE}/spot/BTCUSDC`,
        iconUrlDark: "/icon 1 Black-01.png",
        iconUrlLight: "/icon 1 white-01.png",
        badge: "New",
        key: "0_fees",
      },
      {
        title: "Convert",
        description: "Convert crypto with one click and zero slippage",
        path: `${MAIN_SITE}/convert`,
        iconUrlDark: "/convertBlack.png",
        iconUrlLight: "/convertWhite.png",
        key: "convert",
      },
    ],
  },
  {
    category: "Futures",
    item: [
      {
        title: "USDT Perpetual",
        description: "Trade Perpetual contracts on global assets with USDT settlement",
        iconUrlDark: "/icon 1 Black-01.png",
        iconUrlLight: "/icon 1 white-01.png",
        path: `${MAIN_SITE}/futures/BTCUSDT`,
        key: "usdt_perpetual",
      },
      {
        title: "TradFi",
        description: "Trade Stocks, Metal, Oil and Commodity contracts in one place.",
        iconUrlDark: "/icon 2 black-01.png",
        iconUrlLight: "/icon 2 white-02.png",
        path: `${MAIN_SITE}/futures/RSPYUSDT`,
        key: "tradfi",
      },
    ],
  },
  {
    category: "Options",
    item: [
      {
        title: "Options",
        description: "Trade Options contracts settled in USDT",
        iconUrlDark: "/Options-01.png",
        iconUrlLight: "/Options light-01.png",
        path: `${MAIN_SITE}/options`,
      },
    ],
  },
  {
    category: "Alpha",
    item: [
      {
        title: "Alpha",
        description: "Trade and earn on-chain seamlessly",
        iconUrlDark: "/Alpha-01-01.png",
        iconUrlLight: "/Alpha Light-01.png",
        path: `${MAIN_SITE}/alpha`,
        badge: "New",
      },
    ],
  },
  {
    category: "Earn",
    item: [
      {
        title: "BitZup Earn",
        iconUrlDark: "/earnBlack.png",
        iconUrlLight: "/earnWhite.png",
        description: "Earn passive income on crypto assets with Staking",
        path: `${MAIN_SITE}/subscription`,
      },
    ],
  },
  {
    category: "More",
    item: [
      {
        iconUrlLight: "/vipWhite.png",
        iconUrlDark: "/vipBlack.png",
        title: "VIP & Institutional",
        path: "/vip",
        description: "Your trusted digital asset platform for VIPs and institutions",
      },
      {
        iconUrlLight: "/swapWhite.png",
        iconUrlDark: "/swapBlack.png",
        title: "OTC Trading",
        path: `${MAIN_SITE}/otc`,
        description: "Personalized, private, and secure OTC trading for professionals",
      },
      {
        iconUrlDark: "/referralBlack.png",
        iconUrlLight: "/referralWhite.png",
        title: "Referral Program",
        description: "Invite friends to earn either a commission rebate or a one-time reward",
        path: "/referral",
      },
    ],
  },
];

export const getIsZeroFee = (item) => {
  if (!item) return false;
  const tagStr = (item.tag || item.tags || "").toString().toLowerCase();
  if (
    tagStr.includes("0 fee") ||
    tagStr.includes("0 fees") ||
    tagStr.includes("0fee") ||
    tagStr.includes("zero fee") ||
    tagStr.includes("zerofee") ||
    tagStr.includes("0_fee")
  ) {
    return true;
  }
  if (
    item.is_zero_fee ||
    item.zero_fee === 1 ||
    item.zero_fee === true ||
    item.zeroFee === true ||
    item.isZeroFee === true
  ) {
    return true;
  }
  const sym = (item.pair_symbol || item.symbol || "").toUpperCase().replace(/[\/_]/g, "");
  const zeroFeePairs = [
    "BTCUSDC",
    "ETHUSDC",
    "USDCUSDT",
    "FDUSDUSDT",
    "BTCFDUSD",
    "ETHFDUSD",
    "TUSDUSDT",
    "EURUSDT",
  ];
  return zeroFeePairs.includes(sym);
};
