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
        title: "Spot",
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

export const FALLBACK_FUTURES_COINS = [
  { symbol: "BTCUSDT", coin_name: "Bitcoin", base_coin: "BTC", current_price: 96420.5, change_24h: 3.25, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/btc.png" },
  { symbol: "ETHUSDT", coin_name: "Ethereum", base_coin: "ETH", current_price: 2780.2, change_24h: 1.85, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/eth.png" },
  { symbol: "SOLUSDT", coin_name: "Solana", base_coin: "SOL", current_price: 188.4, change_24h: 5.62, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/sol.png" },
  { symbol: "DOGEUSDT", coin_name: "Dogecoin", base_coin: "DOGE", current_price: 0.264, change_24h: -0.84, popular: 1, tag: "Meme", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/doge.png" },
  { symbol: "XRPUSDT", coin_name: "XRP", base_coin: "XRP", current_price: 2.45, change_24h: 8.12, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/xrp.png" },
  { symbol: "ADAUSDT", coin_name: "Cardano", base_coin: "ADA", current_price: 0.82, change_24h: 2.14, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/ada.png" },
  { symbol: "BNBUSDT", coin_name: "BNB", base_coin: "BNB", current_price: 660.1, change_24h: 0.95, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/bnb.png" },
  { symbol: "SUIUSDT", coin_name: "Sui", base_coin: "SUI", current_price: 3.42, change_24h: 12.4, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/sui.png" },
  { symbol: "AVAXUSDT", coin_name: "Avalanche", base_coin: "AVAX", current_price: 28.5, change_24h: -1.2, popular: 0, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/avax.png" },
  { symbol: "LINKUSDT", coin_name: "Chainlink", base_coin: "LINK", current_price: 18.9, change_24h: 4.1, popular: 0, tag: "DeFi", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/link.png" },
  { symbol: "RSPYUSDT", coin_name: "rSPY (S&P 500 ETF)", base_coin: "RSPY", current_price: 595.2, change_24h: 0.82, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/rspy.png" },
  { symbol: "NVDAUSDT", coin_name: "NVIDIA Corp", base_coin: "NVDA", current_price: 138.5, change_24h: 2.45, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/nvda.png" },
  { symbol: "AAPLUSDT", coin_name: "Apple Inc", base_coin: "AAPL", current_price: 242.1, change_24h: 1.15, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/aapl.png" },
  { symbol: "TSLAUSDT", coin_name: "Tesla Inc", base_coin: "TSLA", current_price: 285.4, change_24h: -3.20, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/tsla.png" },
  { symbol: "XAUUSDT", coin_name: "Gold", base_coin: "XAU", current_price: 2920.4, change_24h: 0.45, popular: 1, tag: "Metal", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/xau.png" },
  { symbol: "XAGUSDT", coin_name: "Silver", base_coin: "XAG", current_price: 33.15, change_24h: 1.10, popular: 1, tag: "Metal", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/xag.png" },
  { symbol: "CLUSDT", coin_name: "Crude Oil", base_coin: "CL", current_price: 72.8, change_24h: -0.65, popular: 1, tag: "Oil", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/cl.png" },
  { symbol: "NGUSDT", coin_name: "Natural Gas", base_coin: "NG", current_price: 3.12, change_24h: 2.30, popular: 0, tag: "Commodity", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/ng.png" },
  { symbol: "COPPERUSDT", coin_name: "Copper", base_coin: "COPPER", current_price: 4.55, change_24h: 0.85, popular: 0, tag: "Commodity", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/copper.png" },
];

export const FALLBACK_SPOT_COINS = [
  { pair_symbol: "BTCUSDT", symbol: "BTCUSDT", coin_name: "Bitcoin", base_asset_symbol: "BTC", quote_asset_symbol: "USDT", current_price: 96420.5, change_24h: 3.25, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/btc.png" },
  { pair_symbol: "ETHUSDT", symbol: "ETHUSDT", coin_name: "Ethereum", base_asset_symbol: "ETH", quote_asset_symbol: "USDT", current_price: 2780.2, change_24h: 1.85, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/eth.png" },
  { pair_symbol: "SOLUSDT", symbol: "SOLUSDT", coin_name: "Solana", base_asset_symbol: "SOL", quote_asset_symbol: "USDT", current_price: 188.4, change_24h: 5.62, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/sol.png" },
  { pair_symbol: "DOGEUSDT", symbol: "DOGEUSDT", coin_name: "Dogecoin", base_asset_symbol: "DOGE", quote_asset_symbol: "USDT", current_price: 0.264, change_24h: -0.84, popular: 1, tag: "Meme", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/doge.png" },
  { pair_symbol: "XRPUSDT", symbol: "XRPUSDT", coin_name: "XRP", base_asset_symbol: "XRP", quote_asset_symbol: "USDT", current_price: 2.45, change_24h: 8.12, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/xrp.png" },
  { pair_symbol: "ADAUSDT", symbol: "ADAUSDT", coin_name: "Cardano", base_asset_symbol: "ADA", quote_asset_symbol: "USDT", current_price: 0.82, change_24h: 2.14, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/ada.png" },
  { pair_symbol: "BNBUSDT", symbol: "BNBUSDT", coin_name: "BNB", base_asset_symbol: "BNB", quote_asset_symbol: "USDT", current_price: 660.1, change_24h: 0.95, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/bnb.png" },
  { pair_symbol: "SUIUSDT", symbol: "SUIUSDT", coin_name: "Sui", base_asset_symbol: "SUI", quote_asset_symbol: "USDT", current_price: 3.42, change_24h: 12.4, popular: 1, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/sui.png" },
  { pair_symbol: "AVAXUSDT", symbol: "AVAXUSDT", coin_name: "Avalanche", base_asset_symbol: "AVAX", quote_asset_symbol: "USDT", current_price: 28.5, change_24h: -1.2, popular: 0, tag: "Layer 1", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/avax.png" },
  { pair_symbol: "LINKUSDT", symbol: "LINKUSDT", coin_name: "Chainlink", base_asset_symbol: "LINK", quote_asset_symbol: "USDT", current_price: 18.9, change_24h: 4.1, popular: 0, tag: "DeFi", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/link.png" },
  // Zero Fee Spot Coins
  { pair_symbol: "BTCUSDC", symbol: "BTCUSDC", coin_name: "Bitcoin", base_asset_symbol: "BTC", quote_asset_symbol: "USDC", current_price: 96420.5, change_24h: 3.25, popular: 1, is_zero_fee: true, tag: "0 Fees", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/btc.png" },
  { pair_symbol: "ETHUSDC", symbol: "ETHUSDC", coin_name: "Ethereum", base_asset_symbol: "ETH", quote_asset_symbol: "USDC", current_price: 2780.2, change_24h: 1.85, popular: 1, is_zero_fee: true, tag: "0 Fees", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/eth.png" },
  { pair_symbol: "USDCUSDT", symbol: "USDCUSDT", coin_name: "USD Coin", base_asset_symbol: "USDC", quote_asset_symbol: "USDT", current_price: 1.0, change_24h: 0.01, popular: 1, is_zero_fee: true, tag: "0 Fees", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/usdc.png" },
  { pair_symbol: "FDUSDUSDT", symbol: "FDUSDUSDT", coin_name: "First Digital USD", base_asset_symbol: "FDUSD", quote_asset_symbol: "USDT", current_price: 1.0, change_24h: 0.00, popular: 0, is_zero_fee: true, tag: "0 Fees", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/fdusd.png" },
  { pair_symbol: "BTCFDUSD", symbol: "BTCFDUSD", coin_name: "Bitcoin", base_asset_symbol: "BTC", quote_asset_symbol: "FDUSD", current_price: 96420.5, change_24h: 3.25, popular: 0, is_zero_fee: true, tag: "0 Fees", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/btc.png" },
  { pair_symbol: "ETHFDUSD", symbol: "ETHFDUSD", coin_name: "Ethereum", base_asset_symbol: "ETH", quote_asset_symbol: "FDUSD", current_price: 2780.2, change_24h: 1.85, popular: 0, is_zero_fee: true, tag: "0 Fees", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/eth.png" },
  // Stocks Spot Coins
  { pair_symbol: "RSPYUSDT", symbol: "RSPYUSDT", coin_name: "rSPY (S&P 500 ETF)", base_asset_symbol: "RSPY", quote_asset_symbol: "USDT", current_price: 595.2, change_24h: 0.82, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/rspy.png" },
  { pair_symbol: "NVDAUSDT", symbol: "NVDAUSDT", coin_name: "NVIDIA Corp", base_asset_symbol: "NVDA", quote_asset_symbol: "USDT", current_price: 138.5, change_24h: 2.45, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/nvda.png" },
  { pair_symbol: "AAPLUSDT", symbol: "AAPLUSDT", coin_name: "Apple Inc", base_asset_symbol: "AAPL", quote_asset_symbol: "USDT", current_price: 242.1, change_24h: 1.15, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/aapl.png" },
  { pair_symbol: "TSLAUSDT", symbol: "TSLAUSDT", coin_name: "Tesla Inc", base_asset_symbol: "TSLA", quote_asset_symbol: "USDT", current_price: 285.4, change_24h: -3.20, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/tsla.png" },
  { pair_symbol: "MSFTUSDT", symbol: "MSFTUSDT", coin_name: "Microsoft Corp", base_asset_symbol: "MSFT", quote_asset_symbol: "USDT", current_price: 415.6, change_24h: 0.95, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/msft.png" },
  { pair_symbol: "AMZNUSDT", symbol: "AMZNUSDT", coin_name: "Amazon.com Inc", base_asset_symbol: "AMZN", quote_asset_symbol: "USDT", current_price: 220.8, change_24h: 1.45, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/amzn.png" },
  { pair_symbol: "GOOGLUSDT", symbol: "GOOGLUSDT", coin_name: "Alphabet Inc", base_asset_symbol: "GOOGL", quote_asset_symbol: "USDT", current_price: 185.3, change_24h: -0.40, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/googl.png" },
  { pair_symbol: "METAUSDT", symbol: "METAUSDT", coin_name: "Meta Platforms", base_asset_symbol: "META", quote_asset_symbol: "USDT", current_price: 665.2, change_24h: 2.10, popular: 1, tag: "Stocks", icon: "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/meta.png" },
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
