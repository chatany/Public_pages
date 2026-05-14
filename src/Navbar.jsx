import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import MobileDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [userProfile, setUserProfile] = useState({
    email: "user@example.com",
    vip_level: 0,
    kyc_level: 0
  });

  const navigate = useNavigate();

  const MAIN_SITE = "/trade";

  useEffect(() => {
    // Check for login status changes
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", checkLogin);
    window.addEventListener("userDataChanged", checkLogin);
    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("userDataChanged", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("userDataChanged"));
    window.location.href = "/";
  };

  const MenuItem = [
    { name: "Dashboard", path: "/dashboard", icon: <CgProfile className="size-5" /> },
    { name: "Assets", path: "/assets", icon: <HiDownload className="size-5" /> },
    { name: "Orders", path: "/orders", icon: <TiArrowSortedDown className="size-5 -rotate-90" /> },
    { name: "Security", path: "/security", icon: <TiArrowSortedDown className="size-5 -rotate-90" /> },
    { name: "Referral", path: "/Referral", icon: <TiArrowSortedDown className="size-5 -rotate-90" /> },
    { name: "Log Out", path: "#", icon: <RiLogoutBoxRLine className="size-5" />, action: handleLogout },
  ];

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleNavigate = (path) => {
    if (path.startsWith("http") || path.startsWith("/trade")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  const navConfig = {
    Trade: [
      {
        title: "Spot",
        desc: "Buy and sell on the Spot market with advanced tools",
        path: `${MAIN_SITE}/spot/BTCUSDT`,
        iconWhite: "/tr-white.png",
        iconGreen: "/tr-green.png",
      },
      {
        title: "Convert",
        desc: "Convert crypto with one click",
        path: `${MAIN_SITE}/convert`,
        iconWhite: "/convertWhite.png",
        iconGreen: "/convertGreen.png",
      },
      {
        title: "Auto invest",
        desc: "Invest in crypto with one click",
        path: `${MAIN_SITE}/recurring`,
        iconWhite: "/autoWhite.png",
        iconGreen: "/autoGreen.png",
      },
    ],

    Futures: [
      {
        title: "USDⓈ-M Futures",
        desc: "Contracts settled in USDT",
        path: `${MAIN_SITE}/futures/BTCUSDT`,
        iconWhite: "/futuresWhite.png",
        iconGreen: "/futuresGreen.png",
      },
    ],

    Earn: [
      {
        title: "Simple Earn",
        desc: "Earn passive income on 300+ crypto assets with Staking",
        path: `${MAIN_SITE}/subscription`,
        iconWhite: "/earnWhite.png",
        iconGreen: "/earnGreen.png",
      },
    ],

    More: [
      {
        title: "VIP & Institutional",
        desc: "Your trusted digital asset platform for VIPs and institutions",
        path: "/trade/vip",
        iconWhite: "/vipWhite.png",
        iconGreen: "/vipGreen.png",
      },
      {
        title: "Referral Program",
        desc: "Invite friends to earn either a commission rebate or a one-time reward",
        path: "/trade/referral",
        iconWhite: "/referralWhite.png",
        iconGreen: "/referralGreen.png",
      },
    ],
  };

  return (
    <header className="h-[64px] w-full bg-black border-b border-[#1E2329] z-[1000] relative">
      <div className="mx-auto h-full px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-8 h-full">
          {/* LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <img
              src="/bitzup_light_logo.png"
              className="h-[42px] w-auto"
              alt="logo"
            />
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-7 text-sm h-full">
            {[
              "Buy Crypto",
              "Trade",
              // "Markets",
              "Futures",
              "Earn",
              "More",
            ].map((item) => {
              const hasDropdown = !!navConfig[item];

              return (
                <div
                  key={item}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => {
                    if (hasDropdown) {
                      setHoveredItem(item);
                    }
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setHoveredItem(null);
                    }, 50);
                  }}
                >
                  {/* NAV ITEM */}
                  <div
                    onClick={() => {
                      if (!hasDropdown) {
                        if (item === "Markets") {
                          handleNavigate(`${MAIN_SITE}/spot`);
                        }
                      }
                    }}
                    className="flex items-center gap-1 cursor-pointer text-[#EAECEF] font-medium text-[15px] hover:text-[#2EDBAD] transition-all duration-200"
                  >
                    {item}

                    {hasDropdown && (
                      <TiArrowSortedDown
                        className={`transition-all duration-300 ease-in-out ${
                          hoveredItem === item ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* DROPDOWN */}
                  {hasDropdown && hoveredItem === item && (
                    <>
                      {/* hover bridge */}
                      <div className="absolute top-full left-0 w-full h-5 z-[998]" />

                      <div
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="absolute top-full left-0 mt-0 w-[340px] bg-[#17181A] border border-[#2B3139] rounded-xl p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.55)] z-[999] hidden lg:block"
                      >
                        {navConfig[item].map((subItem, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setHoveredItem(null);
                              handleNavigate(subItem.path);
                            }}
                            className="w-full text-left"
                          >
                            <div className="flex gap-3 px-3 py-3 rounded-lg cursor-pointer hover:bg-[#2B3139] transition-all duration-200 group">
                              {/* ICON */}
                              <div className={`${subItem.title.includes("Futures") ? "size-6 min-w-[24px]" : "size-8 min-w-[32px]"} flex items-center justify-center mt-0.5`}>
                                <img
                                  src={subItem.iconWhite}
                                  alt=""
                                  className="w-full h-auto max-h-full transition-opacity duration-200 group-hover:hidden block"
                                />
                                <img
                                  src={subItem.iconGreen}
                                  alt=""
                                  className="w-full h-auto max-h-full transition-opacity duration-200 group-hover:block hidden"
                                />
                              </div>

                              {/* CONTENT */}
                              <div className="flex flex-col">
                                <div className="font-bold text-[14px] text-white group-hover:text-[#2EDBAD] transition-colors">
                                  {subItem.title}
                                </div>

                                <div className="leading-4 text-[12px] text-[#848E9C] mt-1">
                                  {subItem.desc}
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 h-full">
          {!isLoggedIn ? (
            <>
              <span
                className="text-[15px] text-[#EAECEF] hover:text-white font-medium cursor-pointer max-md:hidden transition-colors"
                onClick={() => (window.location.href = `${MAIN_SITE}/login`)}
              >
                Log in
              </span>

              <button
                className="h-9 px-5 rounded-full text-black text-[14px] font-semibold bg-[#2EDBAD] gap-2 flex justify-center items-center hover:opacity-90 transition-all"
                onClick={() => (window.location.href = `${MAIN_SITE}/register`)}
              >
                <img src="/gift.svg" className="size-4" alt="" />
                Sign up
              </button>
            </>
          ) : (
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDropdown("profile")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div 
                className="p-2 rounded-full hover:bg-[#1E2329] transition-colors cursor-pointer text-gray-300 hover:text-white"
                onClick={() => handleNavigate("/dashboard")}
              >
                <CgProfile size={24} />
              </div>

              {openDropdown === "profile" && (
                <>
                  <div className="absolute top-full right-0 w-full h-5 z-[998]" />
                  <div className="absolute top-full right-0 mt-0 w-[280px] bg-[#17181A] border border-[#2B3139] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.55)] z-[999] overflow-hidden">
                    {/* User Header */}
                    <div className="p-5 border-b border-[#2B3139]">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-[#2EDBAD]/10 flex items-center justify-center text-[#2EDBAD]">
                          <CgProfile size={24} />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[14px] font-bold text-white truncate max-w-[180px]">
                            {userProfile.email}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[11px] text-gray-400 hover:text-[#2EDBAD] cursor-pointer">
                              VIP {userProfile.vip_level}
                            </span>
                            <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#2B3139] text-[#2EDBAD]">
                              {userProfile.kyc_level === 0 ? "Unverified" : "Verified"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {MenuItem.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (item.action) {
                              item.action();
                            } else {
                              handleNavigate(item.path);
                            }
                            setOpenDropdown(null);
                          }}
                          className={`flex items-center gap-3 px-5 py-3 hover:bg-[#2B3139] transition-colors cursor-pointer group ${
                            item.name === "Log Out" ? "border-t border-[#2B3139] mt-2" : ""
                          }`}
                        >
                          <div className="text-gray-400 group-hover:text-[#2EDBAD]">
                            {item.icon}
                          </div>
                          <div className="text-[14px] text-white group-hover:text-[#2EDBAD]">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          <MdOutlineMenu
            className="size-6 cursor-pointer md:hidden text-white"
            onClick={() => setOpenPopup(true)}
          />

          <div 
            className="relative h-full flex items-center max-md:hidden"
            onMouseEnter={() => setShowQR(true)}
            onMouseLeave={() => setShowQR(false)}
          >
            <Icon>
              <FiDownload className="size-5" />
            </Icon>

            {showQR && (
              <>
                <div className="absolute top-full right-0 w-full h-5 z-[998]" />
                <div className="absolute top-full right-0 mt-0 p-4 bg-[#17181A] border border-[#2B3139] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.55)] z-[999]">
                  <div className="bg-white p-2 rounded-lg">
                    <QRCode 
                      value="https://bitzup.com/download" 
                      size={140}
                      level="H"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-white font-bold text-sm">Download App</p>
                    <p className="text-[#848E9C] text-[11px] mt-0.5">Scan to trade on the go</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <MobileDrawer open={openPopup} onClose={handleClose} />
      </div>
    </header>
  );
}

function Icon({ children, className = "" }) {
  return (
    <div
      className={`w-9 h-9 flex items-center justify-center rounded-full text-gray-300 hover:bg-[#1E2329] hover:text-white cursor-pointer transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
