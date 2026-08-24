import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

// Icon imports
import { VscAccount } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoDownloadOutline, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { PiCopyLight } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { BiSupport, BiCreditCard, BiWallet } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

import MobileDrawer from "./Drawer";
import { apiRequest, BASE_URL } from "./Components/fee";
import { DepositPopup } from "./Components/DepositPopup";
import { useDeviceInfo } from "./Hooks/useDeviceInfo";
import { useAuth } from "./useAuth";
import Button from "./Common/Button";
import {
  data,
  MenuItem,
  FALLBACK_FUTURES_COINS,
  FALLBACK_SPOT_COINS,
  getIsZeroFee,
} from "./Constant";

const MAIN_SITE = "/trade";

const NavCoinIcon = ({ icon, symbol, name, className = "size-7" }) => {
  const [imgError, setImgError] = useState(false);
  const sym = (symbol || "").toUpperCase();
  const letter = (symbol || name || "?").charAt(0).toUpperCase();

  let bgClass = "bg-[#2b2f38] text-white";
  if (sym.startsWith("BTC")) bgClass = "bg-[#F7931A] text-white font-bold";
  else if (sym.startsWith("ETH")) bgClass = "bg-[#627EEA] text-white font-bold";
  else if (sym.startsWith("SOL")) bgClass = "bg-[#14F195] text-black font-bold";
  else if (sym.startsWith("DOGE")) bgClass = "bg-[#C2A633] text-white font-bold";
  else if (sym.startsWith("XRP")) bgClass = "bg-[#23292F] text-white font-bold";
  else if (sym.startsWith("MATIC")) bgClass = "bg-[#8247E5] text-white font-bold";
  else if (sym.startsWith("TRX")) bgClass = "bg-[#EF0027] text-white font-bold";
  else if (sym.startsWith("PEPE")) bgClass = "bg-[#4D8C2F] text-white font-bold";
  else if (sym.startsWith("SUI")) bgClass = "bg-[#2A82E4] text-white font-bold";
  else if (sym.startsWith("RSPY") || sym.startsWith("R")) bgClass = "bg-[#0A85EA] text-white font-bold";
  else if (sym.startsWith("NVDA")) bgClass = "bg-[#76B900] text-white font-bold";
  else if (sym.startsWith("AAPL")) bgClass = "bg-[#555555] text-white font-bold";
  else if (sym.startsWith("TSLA")) bgClass = "bg-[#CC0000] text-white font-bold";

  return (
    <div
      className={`${className} rounded-full flex items-center justify-center shrink-0 overflow-hidden ${bgClass} border border-border/40 shadow-sm`}
    >
      {!imgError && icon ? (
        <img
          src={icon}
          alt={symbol || name}
          className="w-full h-full object-cover rounded-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[11px] font-bold uppercase">
          {letter}
        </span>
      )}
    </div>
  );
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dark = true;

  const isTabActive = (item) => {
    const path = location.pathname;
    if (item === "Buy Crypto") {
      return path.startsWith("/buy-crypto");
    }
    if (item === "Spot") {
      return (
        path.startsWith("/spot") ||
        path.startsWith("/convert") ||
        path.startsWith("/invest") ||
        path.startsWith("/trade/spot") ||
        path.startsWith("/trade/convert")
      );
    }
    if (item === "Futures") {
      return path.startsWith("/futures") || path.startsWith("/trade/futures");
    }
    if (item === "Options") {
      return path.startsWith("/options") || path.startsWith("/trade/options");
    }
    if (item === "Alpha") {
      return path.startsWith("/alpha") || path.startsWith("/trade/alpha");
    }
    if (item === "Earn") {
      return path.startsWith("/subscription") || path.startsWith("/earn") || path.startsWith("/trade/subscription");
    }
    if (item === "More") {
      return path.startsWith("/vip") || path.startsWith("/referral") || path.startsWith("/otc") || path.startsWith("/trade/otc");
    }
    return false;
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profile, setProfile] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0, width: 0 });

  const [futuresSubTab, setFuturesSubTab] = useState(null);
  const [spotSubTab, setSpotSubTab] = useState(null);
  const [activeTradFiTag, setActiveTradFiTag] = useState("Stocks");
  const [apiFuturesCoins, setApiFuturesCoins] = useState([]);
  const [apiSpotCoins, setApiSpotCoins] = useState([]);

  const navDropdownRef = useRef(null);
  const navMenuItemsRef = useRef([]);

  const isLoggedIn = useAuth();
  const deviceInfo = useDeviceInfo();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://download.bitzup.com/app-release.apk";
    link.download = "bitzup.apk";
    link.click();
  };

  const [userProfile, setUserProfile] = useState({
    email: "user@example.com",
    uid: "51297991",
    vip_level: 0,
    kyc_level: 0,
  });

  const fetchUserProfile = async () => {
    try {
      const { data: resData, status } = await apiRequest({
        method: "get",
        url: `${BASE_URL}/onboarding/user/getUserProfile`,
      });

      if (status === 200 && resData?.status === "1") {
        const profileData = resData?.data;
        setUserProfile({
          email: profileData?.email,
          uid: profileData?.uid,
          vip_level: profileData?.vip_level || 0,
          kyc_level:
            profileData?.kyc_level !== undefined ? profileData?.kyc_level : 0,
        });
      }

      if (status === 400 && resData?.status == 3) {
        if (
          resData?.message == "You are not authorized" ||
          resData?.message == "Session expired, Please login again."
        ) {
          localStorage.removeItem("isLoggedIn");
          window.dispatchEvent(new Event("userDataChanged"));
        }
      }
    } catch (err) {
      console.error("Failed to fetch profile API", err);
    }
  };

  const fetchSpotCoins = async () => {
    try {
      const res = await apiRequest({
        method: "get",
        url: `${BASE_URL}/market/exchangeinfoall/?limit=300`,
      });
      if (res?.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        setApiSpotCoins(res.data.data);
      }
    } catch (e) {
      // fallback will be used
    }
  };

  const fetchFuturesCoins = async () => {
    try {
      const res = await apiRequest({
        method: "get",
        url: `${BASE_URL}/futures/api/futures-curr-info-all/?limit=300`,
      });
      if (res?.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        setApiFuturesCoins(res.data.data);
      }
    } catch (e) {
      // fallback will be used
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserProfile();
    }
    fetchSpotCoins();
    fetchFuturesCoins();
  }, [isLoggedIn]);

  const combinedSpotList = useMemo(() => {
    const list = [];
    const seenSymbols = new Set();

    const addCoins = (arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((c) => {
        const sym = (c.pair_symbol || c.symbol || c.pair_name || c.base_asset_symbol || "").toUpperCase().replace(/[\/_]/g, "");
        if (sym && !seenSymbols.has(sym)) {
          seenSymbols.add(sym);
          list.push(c);
        }
      });
    };

    addCoins(apiSpotCoins);
    addCoins(FALLBACK_SPOT_COINS);

    return list;
  }, [apiSpotCoins]);

  const spotCoins = useMemo(() => {
    if (!spotSubTab) return [];
    if (spotSubTab === "0_fees") {
      return combinedSpotList.filter((c) => getIsZeroFee(c));
    }
    if (spotSubTab === "stocks") {
      return combinedSpotList.filter((item) => {
        const itemTag = (item.tag || "").toLowerCase();
        const sym = (item.pair_symbol || item.symbol || "").toUpperCase();
        return (
          itemTag === "stock" ||
          itemTag === "stocks" ||
          ["RSPY", "NVDA", "AAPL", "TSLA", "MSFT", "AMZN", "GOOGL", "QQQ", "SPY", "TSM", "HOOD", "INTC", "META", "SNDK", "SOXL", "SKHYNIX", "SPCX", "MU"].some((s) =>
            sym.includes(s),
          )
        );
      });
    }
    if (spotSubTab === "spot") {
      return combinedSpotList;
    }
    return [];
  }, [combinedSpotList, spotSubTab]);

  const combinedFuturesList = useMemo(() => {
    const list = [];
    const seenSymbols = new Set();

    const addCoins = (arr) => {
      if (!Array.isArray(arr)) return;
      arr.forEach((c) => {
        const sym = (c.symbol || c.pair_symbol || c.pair_name || c.base_coin || "").toUpperCase();
        if (sym && !seenSymbols.has(sym)) {
          seenSymbols.add(sym);
          list.push(c);
        }
      });
    };

    addCoins(apiFuturesCoins);
    addCoins(FALLBACK_FUTURES_COINS);

    return list;
  }, [apiFuturesCoins]);

  const tradFiTags = useMemo(() => {
    return ["Stocks", "Metal", "Oil", "Commodity"];
  }, []);

  const usdtCoins = useMemo(() => {
    return combinedFuturesList.filter((item) => {
      const sym = (item.symbol || item.pair_symbol || "").toUpperCase();
      return sym.endsWith("USDT") || sym.includes("USDT");
    });
  }, [combinedFuturesList]);

  const tradFiCoins = useMemo(() => {
    let list = combinedFuturesList;
    const matchTag = (activeTradFiTag || "Stocks").toLowerCase();

    const filtered = list.filter((item) => {
      const itemTag = (item.tag || "").toLowerCase();
      const sym = (item.symbol || item.pair_symbol || "").toUpperCase();

      if (matchTag === "stocks" || matchTag === "stock") {
        return (
          itemTag === "stock" ||
          itemTag === "stocks" ||
          ["RSPY", "NVDA", "AAPL", "TSLA", "MSFT", "AMZN", "GOOGL", "QQQ", "SPY", "TSM", "HOOD", "INTC", "META", "SNDK", "SOXL", "SKHYNIX", "SPCX", "MU"].some((s) =>
            sym.includes(s),
          )
        );
      }
      if (matchTag === "metal") {
        return (
          itemTag === "metal" ||
          itemTag === "metals" ||
          ["XAU", "XAG", "GOLD", "SILVER", "PLATINUM"].some((s) => sym.includes(s))
        );
      }
      if (matchTag === "oil") {
        return (
          itemTag === "oil" ||
          itemTag === "crude" ||
          ["CL", "BRENT", "OIL", "WTI", "CRUDE"].some((s) => sym.includes(s))
        );
      }
      if (matchTag === "commodity") {
        return (
          itemTag === "commodity" ||
          itemTag === "commodities" ||
          ["NG", "COPPER", "GAS", "WHEAT", "CORN"].some((s) => sym.includes(s))
        );
      }
      return itemTag === matchTag;
    });

    if (filtered.length > 0) return filtered;
    return FALLBACK_FUTURES_COINS.filter((c) => {
      const tagLower = (c.tag || "").toLowerCase();
      if (matchTag === "stocks" || matchTag === "stock") return tagLower === "stocks" || tagLower === "stock";
      return tagLower === matchTag;
    });
  }, [combinedFuturesList, activeTradFiTag]);

  const handleLogout = async () => {
    try {
      await apiRequest({
        method: "post",
        url: `${BASE_URL}/onboarding/user/logout`,
        data: {
          device_type: deviceInfo?.device_type,
          device_info: deviceInfo?.device_info,
        },
      });
    } catch (err) {
      console.error("Failed to logout API", err);
    } finally {
      localStorage.removeItem("isLoggedIn");
      window.dispatchEvent(new Event("userDataChanged"));
      window.location.href = "/";
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    let hoverTimeout;

    const handleMouseLeaveDropdown = () => {
      hoverTimeout = setTimeout(() => {
        setHoveredItemIndex(null);
        setCurrentItem("");
        setFuturesSubTab(null);
        setSpotSubTab(null);
      }, 100);
    };

    const handleMouseEnterDropdown = () => {
      clearTimeout(hoverTimeout);
    };

    if (navDropdownRef.current) {
      navDropdownRef.current.addEventListener(
        "mouseleave",
        handleMouseLeaveDropdown,
      );
      navDropdownRef.current.addEventListener(
        "mouseenter",
        handleMouseEnterDropdown,
      );
    }

    return () => {
      if (navDropdownRef.current) {
        navDropdownRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeaveDropdown,
        );
        navDropdownRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnterDropdown,
        );
      }
      clearTimeout(hoverTimeout);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (path) => {
    let targetPath = path;
    if (isLoggedIn) {
      if (path === "/referral") {
        targetPath = "/trade/referral";
      } else if (path === "/invest") {
        targetPath = "/trade/auto-invest";
      }
    }
    if (targetPath.startsWith("http") || targetPath.startsWith("/trade")) {
      window.location.href = targetPath;
    } else {
      navigate(targetPath);
    }
  };

  return (
    <div className="flex justify-between fixed top-0 items-center md:border-b border-border/70 h-16 w-full p-3 bg-bg text-text-primary z-99">
      <div className="flex xl:w-[60%] items-center text-lg gap-2 font-semibold leading-6 lg:gap-8">
        <div
          className="text-brand-green font-semibold cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          <img
            src="/bitzup_light_logo.png"
            className="md:h-9 h-7 w-auto"
            alt="logo"
          />
        </div>
        <div
          className="relative flex gap-8"
          ref={navDropdownRef}
          onMouseLeave={() => {
            setTimeout(() => {
              setHoveredItemIndex(null);
              setCurrentItem("");
              setFuturesSubTab(null);
              setSpotSubTab(null);
            }, 50);
          }}
        >
          {["Buy Crypto", "Spot", "Futures", "Options", "Alpha", "Earn", "More"].map((item, i) => (
            <div
              key={i}
              className={`text-sm lg:flex hidden font-semibold items-center gap-1 cursor-pointer relative hover:text-brand-green ${
                hoveredItemIndex === i ? "text-brand-green" : ""
              }`}
              ref={(el) => (navMenuItemsRef.current[i] = el)}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const parentRect = navDropdownRef.current
                  ? navDropdownRef.current.getBoundingClientRect()
                  : { left: 0, top: 0 };
                setHoveredItemIndex(i);
                setCurrentItem(item);
                if (item === "Futures") {
                  setFuturesSubTab(null);
                } else if (item === "Spot") {
                  setSpotSubTab(null);
                }
                setHoverPosition({
                  x: rect.left - parentRect.left,
                  y: rect.bottom - parentRect.top,
                  width: rect.width,
                });
              }}
              onClick={() => {
                if (item === "Buy Crypto") {
                  handleNavigate("/trade/buy-crypto");
                } else if (item === "Spot") {
                  handleNavigate("/trade/spot/BTCUSDT");
                } else if (item === "Futures") {
                  handleNavigate("/trade/futures/BTCUSDT");
                } else if (item === "Options") {
                  handleNavigate("/trade/options");
                } else if (item === "Alpha") {
                  handleNavigate("/trade/alpha");
                }
              }}
            > 
              {item === "Futures" ? (
                <>
                  <span>🔥</span>
                  <span
                    className={`${isTabActive(item) ? "text-brand-green" : ""}`}
                  >
                    Futures
                  </span>
                </>
              ) : (
                <div
                  className={`${isTabActive(item) ? "text-brand-green" : ""}`}
                >
                  {item}
                </div>
              )}
              <div
                className={`transition-transform duration-300 ${isTabActive(item) ? "text-brand-green" : ""} ${
                  i === hoveredItemIndex || isTabActive(item)
                    ? "rotate-180 "
                    : ""
                }`}
              >
                <TiArrowSortedDown />
              </div>
              {isTabActive(item) && (
                <div className="absolute -bottom-[5px] left-0 right-0 h-[1.5px] text-center bg-brand-green z-10" />
              )}
            </div>
          ))}

          {hoveredItemIndex !== null && (
            <>
              <div className="absolute right-0 top-full w-full h-5 z-999" />
              {currentItem === "Spot" ? (
                /* ─── Spot Flyout Dropdown (Bybit Style with Subtitles - Exact sizing and padding) ─── */
                <div
                  className="absolute mt-5 bg-recessed text-text-primary border border-border p-1.5 shadow-lg rounded-md z-99 hidden lg:flex overflow-hidden transition-all duration-200 ease-in-out"
                  style={{
                    top: `${hoverPosition.y}px`,
                    left: `${Math.max(10, hoverPosition.x - 20)}px`,
                    width: spotSubTab && spotSubTab !== "convert" ? "700px" : "350px",
                    height: spotSubTab && spotSubTab !== "convert" ? "400px" : "auto",
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setHoveredItemIndex(null);
                      setCurrentItem("");
                      setSpotSubTab(null);
                    }, 80);
                  }}
                >
                  {/* Left Column: Spot, Stocks, 0 Fees, Convert with Subtitles */}
                  <div className={`w-[350px] p-1.5 bg-recessed flex flex-col justify-start shrink-0 ${spotSubTab && spotSubTab !== "convert" ? "border-r border-border" : ""}`}>
                    <div className="flex flex-col gap-1">
                      {[
                        {
                          id: "spot",
                          title: "Trade",
                          subtitle: "Trade Bitcoin, Ethereum & top crypto with USDT, USDC settlement",
                          path: `${MAIN_SITE}/spot/BTCUSDT`,
                          iconDark: "/icon 1 Black-01.png",
                          iconLight: "/icon 1 white-01.png",
                          hasFlyout: true,
                        },
                        {
                          id: "stocks",
                          title: "Stocks",
                          subtitle: "Trade Apple, Tesla, Nvidia & global stocks with USDT, USDC settlement",
                          path: `${MAIN_SITE}/spot/RSPYUSDT`,
                          iconDark: "/icon 2 black-01.png",
                          iconLight: "/icon 2 white-02.png",
                          badge: "New",
                          hasFlyout: true,
                        },
                        {
                          id: "0_fees",
                          title: "0 Fees",
                          subtitle: "Trade selected spot pairs with 0% trading fees",
                          path: `${MAIN_SITE}/spot/BTCUSDC`,
                          badge: "New",
                          iconDark: "/icon 1 Black-01.png",
                          iconLight: "/icon 1 white-01.png",
                          hasFlyout: true,
                        },
                        {
                          id: "convert",
                          title: "Convert",
                          subtitle: "Convert crypto with one click and zero slippage",
                          path: `${MAIN_SITE}/convert`,
                          iconDark: "/convertBlack.png",
                          iconLight: "/convertWhite.png",
                          hasFlyout: false,
                        },
                      ].map((menuItem) => {
                        const isSelected = spotSubTab === menuItem.id;
                        const iconSrc = dark ? menuItem.iconLight : menuItem.iconDark;
                        return (
                          <div
                            key={menuItem.id}
                            onMouseEnter={() => {
                              if (menuItem.hasFlyout) {
                                setSpotSubTab(menuItem.id);
                              } else {
                                setSpotSubTab(null);
                              }
                            }}
                            onClick={() => {
                              setHoveredItemIndex(null);
                              setCurrentItem("");
                              setSpotSubTab(null);
                              handleNavigate(menuItem.path);
                            }}
                            className={`flex items-center justify-between px-3 py-2.5 rounded cursor-pointer transition-colors duration-150 group ${
                              isSelected
                                ? "bg-lift"
                                : "hover:bg-lift"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 pr-2">
                              <div className="size-8 min-w-[32px] flex items-center justify-center opacity-80 group-hover:opacity-100 text-text-primary group-hover:text-text-primary transition-all duration-150 shrink-0">
                                {menuItem.icon ? (
                                  <div className="w-6 h-6 flex items-center justify-center">
                                    {menuItem.icon}
                                  </div>
                                ) : (
                                  <img
                                    src={iconSrc}
                                    className="w-7 h-7 max-h-7 object-contain block"
                                    alt={menuItem.title}
                                  />
                                )}
                              </div>
                              <div className="flex flex-col min-w-0">
                                <div className={`font-bold text-sm flex items-center gap-2 ${isSelected ? "text-brand-green" : "text-text-primary group-hover:text-brand-green"}`}>
                                  <span>{menuItem.title}</span>
                                  {menuItem.badge && (
                                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-brand-green/15 text-brand-green border border-brand-green/30 uppercase tracking-wider">
                                      {menuItem.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-text-muted leading-4 mt-0.5 max-w-[245px]">
                                  {menuItem.subtitle}
                                </div>
                              </div>
                            </div>
                            {menuItem.hasFlyout && (
                              <FaAngleRight
                                className={`text-xs shrink-0 transition-transform ${
                                  isSelected
                                    ? "text-brand-green translate-x-0.5"
                                    : "text-text-muted group-hover:text-brand-green"
                                }`}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Flyout Panel (Bybit Style) */}
                  {spotSubTab && spotSubTab !== "convert" && (
                    <div className="w-[350px] p-2.5 flex flex-col min-w-0 bg-recessed shrink-0">
                      <div className="flex-1 overflow-y-auto custom-scroll space-y-0.5 max-h-[375px] pr-1">
                        {spotCoins.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-12 text-xs text-text-muted">
                            No pairs found
                          </div>
                        ) : (
                          spotCoins.map((item, idx) => {
                            const rawSym = (item.pair_symbol || item.symbol || "").toUpperCase();
                            const cleanSym = rawSym.replace(/[\/_]/g, "");
                            const baseSymbol = (item.base_asset_symbol || item.base_coin || (cleanSym.endsWith("USDT") ? cleanSym.replace("USDT", "") : cleanSym.endsWith("USDC") ? cleanSym.replace("USDC", "") : cleanSym)).toUpperCase();
                            const quoteSymbol = (item.quote_asset_symbol || item.quote_coin || (cleanSym.endsWith("USDC") ? "USDC" : "USDT")).toUpperCase();
                            const isZeroFee = getIsZeroFee(item);
                            const displayName = item.coin_name || item.name || baseSymbol;
                            const subtitle = `${displayName} Spot`;

                            return (
                              <div
                                key={cleanSym || idx}
                                onClick={() => {
                                  setHoveredItemIndex(null);
                                  setCurrentItem("");
                                  setSpotSubTab(null);
                                  handleNavigate(`${MAIN_SITE}/spot/${cleanSym}`);
                                }}
                                className="flex items-center justify-between px-2.5 py-2.5 rounded hover:bg-lift cursor-pointer transition-colors duration-150 group"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <NavCoinIcon
                                    icon={item.coin_icon || item.icon || item.iconUrl || item.icon_url || item.logo}
                                    symbol={baseSymbol}
                                    name={displayName}
                                    className="size-8"
                                  />
                                  <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-1 font-bold text-sm text-text-primary group-hover:text-brand-green transition-colors">
                                      <span>{baseSymbol}</span>
                                      <span className="text-xs text-text-muted">/{quoteSymbol}</span>
                                      {isZeroFee && (
                                        <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-brand-green/15 text-brand-green border border-brand-green/30 uppercase tracking-wider">
                                          0 Fees
                                        </span>
                                      )}
                                      {(item.popular == 1 || item.hot == 1 || item.popular === true) && (
                                        <span className="text-[10px]">🔥</span>
                                      )}
                                    </div>
                                    <div className="text-xs text-text-muted truncate max-w-[260px] leading-4 mt-0.5">
                                      {subtitle}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : currentItem === "Futures" ? (
                /* ─── Futures Flyout Dropdown (Bybit Style with Subtitles - Exact sizing and padding) ─── */
                <div
                  className="absolute mt-5 bg-recessed text-text-primary border border-border p-1.5 shadow-lg rounded-md z-99 hidden lg:flex overflow-hidden transition-all duration-200 ease-in-out"
                  style={{
                    top: `${hoverPosition.y}px`,
                    left: `${Math.max(10, hoverPosition.x - 20)}px`,
                    width: futuresSubTab ? "700px" : "350px",
                    height: futuresSubTab ? "400px" : "auto",
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setHoveredItemIndex(null);
                      setCurrentItem("");
                      setFuturesSubTab(null);
                    }, 80);
                  }}
                >
                  {/* Left Column: USDT Perpetual & TradFi with Subtitles */}
                  <div className={`w-[350px] p-1.5 bg-recessed flex flex-col justify-start shrink-0 ${futuresSubTab ? "border-r border-border" : ""}`}>
                    <div className="flex flex-col gap-1">
                      {[
                        {
                          id: "usdt_perpetual",
                          title: "USDT Perpetual",
                          subtitle: "Trade Perpetual contracts on global assets with USDT settlement",
                          path: `${MAIN_SITE}/futures/BTCUSDT`,
                          iconDark: "/icon 1 Black-01.png",
                          iconLight: "/icon 1 white-01.png",
                        },
                        {
                          id: "tradfi",
                          title: "TradFi",
                          subtitle: "Trade Stocks, Metal, Oil and Commodity contracts in one place.",
                          path: `${MAIN_SITE}/futures/RSPYUSDT`,
                          iconDark: "/icon 2 black-01.png",
                          iconLight: "/icon 2 white-02.png",
                        },
                      ].map((menuItem) => {
                        const isSelected = futuresSubTab === menuItem.id;
                        const iconSrc = dark ? menuItem.iconLight : menuItem.iconDark;
                        return (
                          <div
                            key={menuItem.id}
                            onMouseEnter={() => setFuturesSubTab(menuItem.id)}
                            onClick={() => {
                              setHoveredItemIndex(null);
                              setCurrentItem("");
                              setFuturesSubTab(null);
                              handleNavigate(menuItem.path);
                            }}
                            className={`flex items-center justify-between px-3 py-2.5 rounded cursor-pointer transition-colors duration-150 group ${
                              isSelected
                                ? "bg-lift"
                                : "hover:bg-lift"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 pr-2">
                              <div className="size-8 min-w-[32px] flex items-center justify-center opacity-80 group-hover:opacity-100 text-text-primary group-hover:text-text-primary transition-all duration-150 shrink-0">
                                <img
                                  src={iconSrc}
                                  className="w-7 h-7 max-h-7 object-contain block"
                                  alt={menuItem.title}
                                />
                              </div>
                              <div className="flex flex-col min-w-0">
                                <div className={`font-bold text-sm flex items-center gap-2 ${isSelected ? "text-brand-green" : "text-text-primary group-hover:text-brand-green"}`}>
                                  {menuItem.title}
                                </div>
                                <div className="text-xs text-text-muted leading-4 mt-0.5 max-w-[245px]">
                                  {menuItem.subtitle}
                                </div>
                              </div>
                            </div>
                            <FaAngleRight
                              className={`text-xs shrink-0 transition-transform ${
                                isSelected
                                  ? "text-brand-green translate-x-0.5"
                                  : "text-text-muted group-hover:text-brand-green"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Flyout Panel (Bybit Style) */}
                  {futuresSubTab && (
                    <div className="w-[350px] p-2.5 flex flex-col min-w-0 bg-recessed shrink-0">
                      {/* For TradFi: ONLY Dynamic Tags + Coin List */}
                      {futuresSubTab === "tradfi" && (
                        <div className="flex items-center gap-1.5 pt-2 pb-2 border-b border-border/50 overflow-x-auto scrollbar-hide flex-shrink-0">
                          {tradFiTags.map((tag) => {
                            const isTagActive = activeTradFiTag === tag;
                            return (
                              <button
                                key={tag}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveTradFiTag(tag);
                                }}
                                className={`relative py-1 px-3 rounded text-xs font-semibold whitespace-nowrap cursor-pointer transition-all border flex-shrink-0 ${
                                  isTagActive
                                    ? "bg-brand-green/10 text-brand-green border-brand-green/40"
                                    : "bg-surface-2 text-text-muted border-border hover:text-text-primary hover:bg-surface-2"
                                }`}
                              >
                                {tag?.toLowerCase() === "stocks" || tag?.toLowerCase() === "stock" ? (
                                  <>
                                    <span>{tag}</span>
                                    <span className="absolute -top-2 -right-1 px-1.5 py-0.5 text-[7.5px] font-bold rounded-full bg-brand-green/25 text-brand-green border border-brand-green/40 uppercase leading-none tracking-tight pointer-events-none z-10 shadow-sm">
                                      New
                                    </span>
                                  </>
                                ) : (
                                  tag
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Coin List: Icon + Symbol + Subtitle */}
                      <div className={`flex-1 overflow-y-auto custom-scroll space-y-0.5 ${futuresSubTab === "tradfi" ? "max-h-[330px] pt-1" : "max-h-[375px]"} pr-1`}>
                        {(futuresSubTab === "tradfi" ? tradFiCoins : usdtCoins).length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-12 text-xs text-text-muted">
                            No contracts found
                          </div>
                        ) : (
                          (futuresSubTab === "tradfi" ? tradFiCoins : usdtCoins).map((item) => {
                            const sym = (item.symbol || item.pair_symbol || "").toUpperCase();
                            const baseSymbol = (item.base_coin || sym.replace("USDT", "")).toUpperCase();
                            const displayName = item.coin_name || item.name || baseSymbol;
                            const subtitle = `${displayName} USDT Perpetual`;

                            return (
                              <div
                                key={sym}
                                onClick={() => {
                                  setHoveredItemIndex(null);
                                  setCurrentItem("");
                                  setFuturesSubTab(null);
                                  handleNavigate(`${MAIN_SITE}/futures/${sym}`);
                                }}
                                className="flex items-center justify-between px-2.5 py-2.5 rounded hover:bg-lift cursor-pointer transition-colors duration-150 group"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <NavCoinIcon
                                    icon={item.coin_icon || item.icon || item.icon_url}
                                    symbol={sym}
                                    name={item.coin_name || item.name}
                                    className="size-8"
                                  />
                                  <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-1 font-bold text-sm text-text-primary group-hover:text-brand-green transition-colors">
                                      <span>{sym}</span>
                                      {(item.popular == 1 || item.hot == 1 || item.popular === true) && (
                                        <span className="text-[10px]">🔥</span>
                                      )}
                                    </div>
                                    <div className="text-xs text-text-muted truncate max-w-[260px] leading-4 mt-0.5">
                                      {subtitle}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Standard single-column dropdown for other items (Options, Alpha, Earn, More, Buy Crypto) */
                <div
                  className="absolute mt-5 w-80 border bg-recessed text-text-primary border-border p-1.5 shadow-lg rounded-md z-99 hidden lg:block transition-all duration-200 ease-in-out"
                  style={{
                    top: `${hoverPosition.y}px`,
                    left: `${hoverPosition.x}px`,
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setHoveredItemIndex(null);
                      setCurrentItem("");
                    }, 50);
                  }}
                >
                  {data?.map(
                    (item, idx) =>
                      item.category === currentItem && (
                        <div className="flex flex-col gap-1" key={idx}>
                          {item?.item.map((ele, index) => (
                            <a
                              key={index}
                              href={ele.path || "#"}
                              onClick={(e) => {
                                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                                  e.preventDefault();
                                  setHoveredItemIndex(null);
                                  setCurrentItem("");
                                  handleNavigate(ele.path);
                                }
                              }}
                              className="flex hover:bg-lift hover:text-brand-green gap-3 px-3 py-2.5 cursor-pointer rounded transition-colors duration-150 group items-center"
                            >
                              <div
                                className="size-8 min-w-[32px] flex items-center justify-center group-hover:text-text-primary group-hover:opacity-100 opacity-80 transition-all duration-150 shrink-0"
                              >
                                {typeof (dark
                                  ? ele?.iconUrlLight
                                  : ele?.iconUrlDark) === "string" ? (
                                  <img
                                    src={
                                      dark ? ele?.iconUrlLight : ele?.iconUrlDark
                                    }
                                    className="w-7 h-7 max-h-7 object-contain block"
                                    alt={ele.title}
                                  />
                                ) : dark ? (
                                  <div className="w-6 h-6 flex items-center justify-center">
                                    {ele?.iconUrlLight}
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 flex items-center justify-center">
                                    {ele?.iconUrlDark}
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-col min-w-0">
                                <div className="font-bold text-sm flex items-center gap-2">
                                  <span>{ele.title}</span>
                                  {ele.badge && (
                                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-brand-green/15 text-brand-green border border-brand-green/30 uppercase tracking-wider">
                                      {ele.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="leading-4 text-xs text-text-muted mt-0.5">
                                  {ele.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      ),
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Right Navbar */}
      <div className="flex md:gap-5 gap-2 lg:gap-4 items-center md:mt-0 justify-between lg:pr-10 pr-4 cursor-pointer">
        {isLoggedIn && (
          <div
            className="font-medium leading-6 bg-brand-green text-xs hover:bg-brand-green-d text-black rounded-sm px-3 py-1 h-8 flex items-center gap-1.5 transition-colors"
            onClick={() => setOpenDeposit(true)}
          >
            Add Funds
          </div>
        )}
        {isLoggedIn && (
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("profile")}
            onMouseLeave={() => setOpenDropdown(null)}
            onClick={() => {
              setProfile(true);
              setTimeout(() => handleNavigate("/trade/dashboard"), 200);
            }}
            onDoubleClick={() => handleNavigate("/trade/dashboard")}
          >
            <CgProfile
              className={`hover:text-brand-green ${openDropdown == "profile" && "text-brand-green"} h-6 w-6 text-text-primary`}
            />
            {openDropdown === "profile" && !isMobile && (
              <>
                <div className="absolute right-0 top-full w-full h-5" />
                <div className="absolute w-[280px] mt-5 bg-surface-2 border border-border text-text-primary right-0 z-50 rounded-sm overflow-hidden animate-fadeIn shadow-2xl">
                  <div>
                    <div className="flex flex-col p-4 border-b border-border/70 text-left">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface border border-border flex items-center justify-center">
                          <VscAccount className="w-6 h-6 text-text-muted" />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="truncate font-semibold text-sm text-text-primary">
                            {userProfile?.email}
                          </div>
                          <div className="flex gap-1 items-center text-xs text-text-muted mt-0.5">
                            <span>
                              {copied ? "Copied!" : `UID: ${userProfile?.uid}`}
                            </span>
                            <PiCopyLight
                              className="cursor-pointer text-xs text-text-muted hover:text-brand-green transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(userProfile?.uid);
                              }}
                            />
                          </div>
                          <div className="flex gap-1.5 items-center mt-1.5">
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded font-semibold border capitalize tracking-wider ${
                                userProfile?.kyc_level === 1
                                  ? "bg-brand-green/15 border-brand-green/30 text-brand-green"
                                  : "bg-brand-warning/15 border-brand-warning/30 text-brand-warning-text"
                              }`}
                            >
                              {userProfile?.kyc_level === 1
                                ? "Verified"
                                : "Not Verified"}
                            </span>
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNavigate("/vip");
                              }}
                              className="bg-brand-warning/15 border border-brand-warning/30 text-brand-warning-text text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0 cursor-pointer"
                            >
                              VIP {userProfile?.vip_level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-1.5 gap-[2px] text-left">
                      {MenuItem.map((item, index) => (
                        <a
                          className={`flex items-center hover:bg-lift px-3.5 py-2.5 gap-3 transition-colors duration-150 rounded-sm group no-underline ${
                            index === MenuItem?.length - 1
                              ? "border-t border-border/70 mt-1.5 pt-3"
                              : ""
                          }`}
                          key={index}
                          href={item?.path || "#"}
                          onClick={(e) => {
                            if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                              e.preventDefault();
                              e.stopPropagation();
                              if (item?.name === "Log Out") {
                                setShowLogoutConfirm(true);
                              } else {
                                handleNavigate(item?.path);
                              }
                              setOpenDropdown(null);
                            }
                          }}
                        >
                          <div className="text-text-muted group-hover:text-brand-green transition-colors duration-150">
                            {item?.icon}
                          </div>
                          <div className="text-text-muted text-base font-semibold group-hover:text-brand-green transition-colors duration-150">
                            {item?.name}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {isMobile && openDropdown === "profile" && (
              <div className="fixed inset-0 z-9999 bg-bg text-text-primary w-full h-full overflow-y-auto p-4 animate-fadeIn">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-border/70">
                  <h2 className="text-lg font-bold">My Account</h2>
                  <button
                    className="text-text-secondary hover:text-text-primary text-xl p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(null);
                    }}
                  >
                    ✖
                  </button>
                </div>
                <div className="flex items-center bg-surface border border-border rounded-lg p-4 mb-6 text-left">
                  <div className="flex gap-3 items-center min-w-0">
                    <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 bg-recessed border border-border flex items-center justify-center">
                      <VscAccount className="w-8 h-8 text-text-muted" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="font-semibold text-text-primary truncate">
                        {userProfile?.email}
                      </div>
                      <div className="flex gap-1.5 items-center text-[11px] text-text-muted mt-0.5">
                        <span>
                          {copied ? "Copied!" : `UID: ${userProfile?.uid}`}
                        </span>
                        <PiCopyLight
                          className="cursor-pointer text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(userProfile?.uid);
                          }}
                        />
                      </div>
                      <div className="flex gap-1.5 items-center mt-1.5">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(null);
                            handleNavigate("/vip");
                          }}
                          className="bg-brand-warning/15 border border-brand-warning/30 text-brand-warning-text text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0 cursor-pointer"
                        >
                          VIP {userProfile?.vip_level || 0}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-semibold border uppercase tracking-wider ${
                            userProfile?.kyc_level === 1
                              ? "bg-brand-green/15 border-brand-green/30 text-brand-green"
                              : "bg-brand-warning/15 border-brand-warning/30 text-brand-warning-text"
                          }`}
                        >
                          {userProfile?.kyc_level === 1
                            ? "Verified"
                            : "Unverified"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 bg-surface border border-border rounded-sm p-2 text-left">
                  {MenuItem.map((item, index) => (
                    <a
                      key={index}
                      className={`flex items-center hover:bg-lift p-3 gap-3 rounded-lg group no-underline ${
                        index === MenuItem?.length - 1
                          ? "border-t border-border/70 mt-2 pt-4"
                          : ""
                      }`}
                      href={item?.path || "#"}
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenDropdown(null);
                          setProfile(false);
                          if (item?.name === "Log Out") {
                            setShowLogoutConfirm(true);
                          } else {
                            handleNavigate(item?.path);
                          }
                        }
                      }}
                    >
                      <div className="text-text-secondary group-hover:text-brand-green transition-colors">
                        {item?.icon}
                      </div>
                      <div className="text-text-primary text-sm font-semibold group-hover:text-brand-green transition-colors">
                        {item?.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!isLoggedIn && (
          <>
            <Button
              variant="ghost"
              className="h-8 text-xs font-semibold md:flex hidden px-4"
              onClick={() => handleNavigate("/trade/login")}
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="h-8 text-xs font-semibold px-4"
              onClick={() => handleNavigate("/trade/register")}
            >
              Sign Up
            </Button>
          </>
        )}
        <div
          className="relative flex items-center gap-2"
          onMouseEnter={() => setShowQR(true)}
          onMouseLeave={() => setShowQR(false)}
        >
          <IoDownloadOutline
            className={`hover:text-brand-green h-6 w-6 md:flex hidden cursor-pointer ${
              showQR ? "text-brand-green" : "text-text-primary"
            }`}
          />

          {showQR && (
            <>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-6 z-[9999]" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 p-4 bg-recessed border border-surface-2 rounded-xl z-99 shadow-2xl flex flex-col items-center w-[180px]">
                <div className="bg-white border border-border p-2 rounded-lg">
                  <QRCode
                    value={`${window.location.origin}/trade/download`}
                    size={130}
                    level="H"
                    className="bg-white p-1"
                  />
                </div>
                <div className="mt-3 text-center w-full">
                  <p className="text-primary font-bold text-sm">Download App</p>
                  <p className="text-muted text-[11px] mt-0.5 font-normal leading-tight">
                    Scan to trade on the go
                  </p>
                  <div className="flex flex-col gap-2 w-full mt-3">
                    <a
                      href="https://apps.apple.com/app/bitzup/id6749609757"
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full"
                    >
                      <img
                        src="/apple-badge.png"
                        alt="App Store"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bitzup"
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full"
                    >
                      <img
                        src="/google-play-badge.png"
                        alt="Google Play"
                      />
                    </a>
                    <div
                      onClick={handleDownload}
                      className="block w-full cursor-pointer"
                    >
                      <img
                        src="/android-badge.png"
                        alt="Android APK"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => setOpenPopup(true)}
          className="lg:hidden flex"
          title="Menu"
        >
          <RxHamburgerMenu className="hover:text-brand-green h-6 w-6 lg:hidden flex text-text-primary" />
        </div>
        <div title="Help Center">
          <a
            href="https://support.bitzup.com/support/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiSupport className="hover:text-brand-green h-6 w-6 md:flex hidden text-text-primary" />
          </a>
        </div>
        {isLoggedIn && (
          <div title="Logout">
            <RiLogoutBoxRLine
              className="hover:text-brand-green h-6 w-6 text-text-primary"
              onClick={() => setShowLogoutConfirm(true)}
            />
          </div>
        )}
      </div>

      {openDeposit && (
        <DepositPopup popup={openDeposit} setPopup={setOpenDeposit} />
      )}
      <MobileDrawer open={openPopup} onClose={handleClose} />

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="relative w-full max-w-[380px] bg-surface-2 border border-border rounded-xl p-6 shadow-2xl flex flex-col items-center">
            <h3 className="text-lg font-bold text-text-primary text-center mb-2">
              Confirm Log Out
            </h3>
            <p className="text-center text-sm text-text-muted leading-relaxed mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex gap-4 w-full">
              <Button
                variant="cancel"
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 h-10 text-sm "
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  setShowLogoutConfirm(false);
                  handleLogout();
                }}
                className="flex-1 h-10 text-sm "
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
