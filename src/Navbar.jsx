import { useEffect, useRef, useState } from "react";
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
import { MdDashboardCustomize } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import MobileDrawer from "./Drawer";
import { apiRequest, BASE_URL } from "./Components/fee";
import { DepositPopup } from "./Components/DepositPopup";
import { useDeviceInfo } from "./Hooks/useDeviceInfo";
import { useAuth } from "./useAuth";

const MAIN_SITE = "/trade";

const MenuItem = [
  {
    icon: <MdDashboardCustomize className="size-5" />,
    name: "Dashboard",
    path: "/trade/dashboard",
  },
  { icon: <LuWallet className="size-5" />, name: "Assets", path: "/trade/assets" },
  {
    icon: <HiOfficeBuilding className="size-5" />,
    name: "Orders",
    path: "/trade/orders",
  },
  {
    icon: <FaUserLarge className="size-5" />,
    name: "Account",
    path: "/trade/Identity",
  },
  {
    icon: <FaUserPlus className="size-5" />,
    name: "Referral",
    path: "/trade/referral",
  },
  { icon: <CiLogout className="size-5" />, name: "Log Out" },
];

const data = [
  {
    category: "Buy Crypto",
    item: [
      {
        title: "Buy Crypto",
        description: "Visa, Mastercard, and more",
        path: `${MAIN_SITE}/buy-crypto`,
        iconUrlLight: <BiCreditCard className="w-5 h-5 text-text-primary" />,
        iconUrlDark: <BiCreditCard className="w-5 h-5 text-text-primary" />,
      },
      {
        title: "Crypto Deposit",
        description: "Deposit crypto to your account instantly",
        path: `${MAIN_SITE}/crypto/deposit`,
        iconUrlLight: <BiWallet className="w-5 h-5 text-text-primary" />,
        iconUrlDark: <BiWallet className="w-5 h-5 text-text-primary" />,
      },
      {
        title: "Auto-Invest",
        description: "Auto-buy crypto on your schedule",
        path: `${MAIN_SITE}/invest`,
        iconUrlLight: <FiRefreshCw className="w-5 h-5 text-text-primary" />,
        iconUrlDark: <FiRefreshCw className="w-5 h-5 text-text-primary" />,
      },
      {
        title: "OTC Trading",
        description: "Large trades for institutions & individuals",
        path: `${MAIN_SITE}/otc`,
        iconUrlLight: "/swapWhite.png",
        iconUrlDark: "/swapBlack.png",
      },
    ],
  },
  {
    category: "Spot",
    item: [
      {
        title: "Spot",
        description: "Buy and sell on the Spot market with advanced tools",
        path: `${MAIN_SITE}/spot/BTCUSDT`,
        iconUrlLight: "/tr-white.png",
        iconUrlDark: "/tr-black.png",
      },
      {
        title: "Convert",
        description: "Convert crypto with one click",
        path: `${MAIN_SITE}/convert`,
        iconUrlLight: "/convertWhite.png",
        iconUrlDark: "/convertBlack.png",
      },
      {
        title: "Auto invest",
        description: "Invest in crypto with one click",
        path: "/invest",
        iconUrlLight: "/autoWhite.png",
        iconUrlDark: "/autoBlack.png",
      },
    ],
  },
  {
    category: "Futures",
    item: [
      {
        title: "USDⓈ-M Futures",
        description: "Contracts settled in USDT",
        path: `${MAIN_SITE}/futures/BTCUSDT`,
        iconUrlLight: "/futuresWhite.png",
        iconUrlDark: "/futuresBlack.png",
      },
    ],
  },
  {
    category: "Earn",
    item: [
      {
        title: "BitZup Earn",
        description: "Earn passive income on 300+ crypto assets with Staking",
        path: `${MAIN_SITE}/subscription`,
        iconUrlLight: "/earnWhite.png",
        iconUrlDark: "/earnBlack.png",
      },
    ],
  },
  {
    category: "More",
    item: [
      {
        title: "VIP & Institutional",
        description: "Your trusted digital asset platform for VIPs and institutions",
        path: "/vip",
        iconUrlLight: "/vipWhite.png",
        iconUrlDark: "/vipBlack.png",
      },
      {
        title: "OTC Trading",
        description: "Personalized, private, and secure OTC trading for professionals",
        path: `${MAIN_SITE}/otc`,
        iconUrlLight: "/swapWhite.png",
        iconUrlDark: "/swapBlack.png",
      },
      {
        title: "Referral Program",
        description: "Invite friends to earn either a commission rebate or a one-time reward",
        path: "/referral",
        iconUrlLight: "/referralWhite.png",
        iconUrlDark: "/referralBlack.png",
      },
    ],
  },
];

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
        path.startsWith("/invest")
      );
    }
    if (item === "Futures") {
      return path.startsWith("/futures");
    }
    if (item === "Earn") {
      return path.startsWith("/subscription") || path.startsWith("/earn");
    }
    if (item === "More") {
      return path.startsWith("/vip") || path.startsWith("/referral");
    }
    return false;
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profile, setProfile] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openDeposit, setOpenDeposit] = useState(false);

  const isLoggedIn =useAuth()
  const deviceInfo = useDeviceInfo();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/app-release.apk";
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
      const { data, status } = await apiRequest({
        method: "get",
        url: `${BASE_URL}/onboarding/user/getUserProfile`,
      });

      if (status === 200 && data?.status === "1") {
        const profileData = data?.data;
        setUserProfile({
          email: profileData?.email || "user@example.com",
          uid: profileData?.uid || profileData?.user_id || "51297991",
          vip_level: profileData?.vip_level || 0,
          kyc_level: profileData?.kyc_level !== undefined ? profileData?.kyc_level : 0,
        });
      }

      if (status === 400 && data?.status == 3) {
        if (
          data?.message == "You are not authorized" ||
          data?.message == "Session expired, Please login again."
        ) {
          localStorage.removeItem("isLoggedIn");
          // setIsLoggedIn(false);
          window.dispatchEvent(new Event("userDataChanged"));
        }
      }
    } catch (err) {
      console.error("Failed to fetch second API", err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserProfile();
    }
  }, [isLoggedIn]);

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

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0, width: 0 });
  const navDropdownRef = useRef(null);
  const navMenuItemsRef = useRef([]);

  useEffect(() => {
    let hoverTimeout;

    const handleMouseLeaveDropdown = () => {
      hoverTimeout = setTimeout(() => {
        setHoveredItemIndex(null);
        setCurrentItem("");
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
    if (path.startsWith("http") || path.startsWith("/trade")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex justify-between items-center md:border-b border-border/70 h-16 w-full p-3 bg-bg text-text-primary relative z-[99]">
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
            }, 50);
          }}
        >
          {["Buy Crypto", "Spot", "Futures", "Earn", "More"].map((item, i) => (
            <div
              key={i}
              className={` text-sm lg:flex hidden font-semibold items-center gap-1 cursor-pointer relative ${
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
                setHoverPosition({
                  x: rect.left - parentRect.left,
                  y: rect.bottom - parentRect.top,
                  width: rect.width,
                });
              }}
              onClick={() => {
                if (i === 0) {
                  handleNavigate("/trade/buy-crypto");
                } else if (i === 1) {
                  handleNavigate("/trade/spot/BTCUSDT");
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
              <div
                className="absolute mt-5 w-80 border    bg-recessed text-text-primary border-border p-1.5 shadow-lg rounded-md z-99 hidden lg:block transition-all duration-200 ease-in-out"
                style={{
                  top: `${hoverPosition.y}px`,
                  left: `${hoverPosition.x}px`,
                }}
                onMouseEnter={() => {
                  // Keep menu open on mouse enter
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
                      <div className="" key={idx}>
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
                            className="flex hover:bg-lift  gap-3 px-2 py-2 cursor-pointer rounded transition-colors duration-150 group text-left items-start no-underline hover:text-brand-green"
                          >
                            <div
                              className={`${ele.title.includes("Futures") ? "size-6 min-w-[24px]" : "size-8 min-w-[32px]"} flex items-center justify-center hover:text-brand-green mt-0.5`}
                            >
                              {typeof (dark
                                ? ele?.iconUrlLight
                                : ele?.iconUrlDark) === "string" ? (
                                <img
                                  src={
                                    dark ? ele?.iconUrlLight : ele?.iconUrlDark
                                  }
                                  className="w-full h-auto max-h-full block"
                                  alt={ele.title}
                                />
                              ) : dark ? (
                                ele?.iconUrlLight
                              ) : (
                                ele?.iconUrlDark
                              )}
                            </div>
                            <div className="flex flex-col">
                              <div className="font-bold text-sm  flex gap-2">
                                {ele.title}
                              </div>
                              <div className="leading-tight text-xs text-muted mt-0.5">
                                {ele.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ),
                )}
              </div>
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
            <CgProfile className="hover:text-brand-green h-6 w-6 text-text-primary" />
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
                            {userProfile?.email?.split("@")[0] || "User"}
                          </div>
                          <div className="flex gap-1 items-center text-xs text-text-muted mt-0.5">
                            <span>{copied ? "Copied!" : `UID: ${userProfile?.uid}`}</span>
                            <PiCopyLight
                              className="cursor-pointer text-xs text-text-muted hover:text-brand-green transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(userProfile?.uid || "51297991");
                              }}
                            />
                          </div>
                          <div className="flex gap-1.5 items-center mt-1.5">
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNavigate("/vip");
                              }}
                              className="bg-brand-warning/15 border border-brand-warning/30 text-brand-warning-text text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider flex-shrink-0 cursor-pointer"
                            >
                              VIP {userProfile?.vip_level || 0}
                            </span>
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded font-semibold border capitalize tracking-wider ${
                                userProfile?.kyc_level === 1
                                  ? "bg-brand-green/15 border-brand-green/30 text-brand-green"
                                  : "bg-brand-warning/15 border-brand-warning/30 text-brand-warning-text"
                              }`}
                            >
                              {userProfile?.kyc_level === 1 ? "Verified" : "Unverified"}
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
                                handleLogout();
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
                        <span>{copied ? "Copied!" : `UID: ${userProfile?.uid}`}</span>
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
                          {userProfile?.kyc_level === 1 ? "Verified" : "Unverified"}
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
                            handleLogout();
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
        {/* <div className="relative">
          <IoMdNotificationsOutline
            className="h-6 w-6 cursor-pointer max-md:hidden text-text-primary hover:text-brand-green"
            onClick={() => handleNavigate("/trade/notification")}
          />
          <IoMdNotificationsOutline
            className="h-6 w-6 cursor-pointer md:hidden text-text-primary hover:text-brand-green"
            onClick={() => handleNavigate("/trade/notification")}
          />
        </div> */}
        {!isLoggedIn && (
          <>
            <div
              className="hover:text-brand-green rounded-sm text-xs font-semibold bg-surface border border-border leading-6 px-3 py-1.5 transition-colors cursor-pointer md:flex hidden"
              onClick={() => handleNavigate("/trade/login")}
            >
              Log In
            </div>
            <div
              className="text-xs font-semibold leading-6 text-black bg-brand-green hover:bg-brand-green-d rounded-sm px-3 py-1.5 transition-colors cursor-pointer"
              onClick={() => handleNavigate("/trade/register")}
            >
              Sign Up
            </div>
          </>
        )}
        <div
          className="relative flex items-center gap-2"
          onMouseEnter={() => setShowQR(true)}
          onMouseLeave={() => setShowQR(false)}
        >
          <IoDownloadOutline
            className="hover:text-brand-green h-6 w-6 md:flex hidden text-text-primary cursor-pointer"
            onClick={handleDownload}
          />
     
          {showQR && (
            <>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-6 z-[9999]" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 p-4 bg-recessed border border-surface-2 rounded-xl z-99 shadow-2xl flex flex-col items-center w-[180px]">
                <div className="bg-white p-2 rounded-lg">
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
                        className="w-full h-10 cursor-pointer hover:opacity-85 transition-opacity object-contain"
                        alt="App Store"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/search?q=bitzup&c=apps&hl=en_IN"
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full"
                    >
                      <img
                        src="/google-play-badge.png"
                        className="w-full h-10 cursor-pointer hover:opacity-85 transition-opacity object-contain"
                        alt="Google Play"
                      />
                    </a>
                    <div
                      onClick={handleDownload}
                      className="block w-full cursor-pointer"
                    >
                      <img
                        src="/android-badge.png"
                        className="w-full h-10 cursor-pointer hover:opacity-85 transition-opacity object-contain"
                        alt="Android APK"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div onClick={() => setOpenPopup(true)} className="lg:hidden flex" title="Menu">
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
              onClick={handleLogout}
            />
          </div>
        )}
        {/* {isDarkMode ? (
          <div title="Theme" className="hover:text-brand-green sm:flex hidden h-6 w-6 items-center justify-center text-text-primary" onClick={handleTheme}>
            <IoSunnyOutline className="h-6 w-6" />
          </div>
        ) : (
          <div title="Theme" className="hover:text-brand-green sm:flex hidden h-6 w-6 items-center justify-center text-text-primary" onClick={handleTheme}>
            <BsMoon className="h-6 w-6" />
          </div>
        )} */}
      </div>

      {openDeposit && (
        <DepositPopup popup={openDeposit} setPopup={setOpenDeposit} />
      )}
      <MobileDrawer open={openPopup} onClose={handleClose} />
    </div>
  );
}
