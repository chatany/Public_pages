import { Drawer } from "@mui/material";
import { useState } from "react";
import {
  FiSearch,
  FiDownload,
  FiGlobe,
  FiSun,
  FiTrendingUp,
  FiRefreshCcw,
  FiPieChart,
  FiZap,
  FiDatabase,
  FiDollarSign,
  FiLock,
  FiUsers,
  FiStar,
} from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import MobileDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigate = useNavigate();

  const MAIN_SITE = "/trade";

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleNavigate = (path) => {
    if (path.startsWith("http")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  const navConfig = {
    Trade: [
      {
        title: "Spot",
        desc: "Classic trading interface",
        path: `${MAIN_SITE}/spot`,
        icon: <FiTrendingUp />,
      },
      {
        title: "Convert",
        desc: "Zero fees, easiest way to trade",
        path: `${MAIN_SITE}/spot`,
        icon: <FiRefreshCcw />,
      },
      {
        title: "Auto Invest",
        desc: "Accumulate crypto on autopilot",
        path: `${MAIN_SITE}/invest`,
        icon: <FiPieChart />,
      },
    ],

    Futures: [
      {
        title: "USDT-M Futures",
        desc: "Perpetual or Delivery contracts",
        path: `${MAIN_SITE}/spot`,
        icon: <FiZap />,
      },
      {
        title: "Coin-M Futures",
        desc: "Settled in Cryptocurrency",
        path: `${MAIN_SITE}/spot`,
        icon: <FiDatabase />,
      },
    ],

    Earn: [
      {
        title: "Savings",
        desc: "Flexible or Fixed terms",
        path: `${MAIN_SITE}/invest`,
        icon: <FiDollarSign />,
      },
      {
        title: "Staking",
        desc: "Secure higher yields",
        path: `${MAIN_SITE}/invest`,
        icon: <FiLock />,
      },
    ],

    More: [
      {
        title: "Referral",
        desc: "Invite friends, earn together",
        path: "/referral",
        icon: <FiUsers />,
      },
      {
        title: "VIP",
        desc: "Exclusive privileges",
        path: "/vip",
        icon: <FiStar />,
      },
    ],
  };

  return (
    <header className="h-[64px] w-full bg-black border-b border-[#1E2329]">
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
              className="h-[30px] w-auto"
              alt="logo"
            />
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-7 text-sm h-full">
            {[
              "Buy Crypto",
              "Trade",
              "Markets",
              "Futures",
              "Earn",
              "Community",
              "Web3",
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
                    <div
                      onMouseLeave={() => setHoveredItem(null)}
                      className="absolute top-[64px] left-0 w-[320px] bg-[#181A20] border border-[#2B3139] rounded-2xl p-2 shadow-[0_10px_40px_rgba(0,0,0,0.55)] z-[999]"
                    >
                      {navConfig[item].map((subItem) => (
                        <div
                          key={subItem.title}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate(subItem.path);
                            setHoveredItem(null);
                          }}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#222531] transition-all duration-200 cursor-pointer"
                        >
                          {/* ICON */}
                          <div className="mt-1 text-[#2EDBAD] text-[20px]">
                            {subItem.icon}
                          </div>

                          {/* TEXT */}
                          <div className="flex flex-col">
                            <span className="text-white text-[15px] font-semibold group-hover:text-[#2EDBAD] transition-colors">
                              {subItem.title}
                            </span>

                            <span className="text-gray-400 text-[13px] leading-[18px] mt-1">
                              {subItem.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 h-full">
          <div className="max-md:hidden">
            <Icon>
              <FiSearch className="size-5" />
            </Icon>
          </div>

          <span className="text-[15px] text-[#EAECEF] hover:text-white font-medium cursor-pointer max-md:hidden transition-colors">
            Log in
          </span>

          <button className="h-9 px-5 rounded-full text-black text-[14px] font-semibold bg-[#2EDBAD] gap-2 flex justify-center items-center hover:opacity-90 transition-all">
            <img src="/gift.svg" className="size-4" alt="" />
            Sign up
          </button>

          <MdOutlineMenu
            className="size-6 cursor-pointer md:hidden text-white"
            onClick={() => setOpenPopup(true)}
          />

          <div className="max-md:hidden">
            <Icon>
              <FiDownload className="size-5" />
            </Icon>
          </div>

          <div className="max-md:hidden">
            <Icon>
              <FiGlobe className="size-5" />
            </Icon>
          </div>

          <div className="max-md:hidden">
            <Icon>
              <FiSun className="size-5" />
            </Icon>
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
