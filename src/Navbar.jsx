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

  const MAIN_SITE = "https://bitzup.com";

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
    <header className="h-[64px] w-full bg-black border-b border-gray-800">
      <div className="mx-auto h-full px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-8 h-full">
          {/* Logo */}
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
          <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300 h-full">
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
                  className="relative h-full flex items-center cursor-pointer text-white font-semibold text-[15px] gap-1 hover:text-[#2EDBAD] transition-colors"
                  onMouseEnter={() =>
                    hasDropdown && setHoveredItem(item)
                  }
                  onMouseLeave={() =>
                    hasDropdown && setHoveredItem(null)
                  }
                  onClick={() => {
                    if (!hasDropdown) {
                      if (item === "Markets") {
                        handleNavigate(`${MAIN_SITE}/spot`);
                      }
                    }
                  }}
                >
                  {item}

                  {hasDropdown && (
                    <TiArrowSortedDown
                      className={`transition-transform duration-200 ${
                        hoveredItem === item ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* DROPDOWN */}
                  {hasDropdown && hoveredItem === item && (
                    <div className="absolute top-[64px] left-0 w-72 bg-[#121212] border border-gray-800 rounded-xl p-2 shadow-2xl z-[100]">
                      {navConfig[item].map((subItem) => (
                        <div
                          key={subItem.title}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigate(subItem.path);
                            setHoveredItem(null);
                          }}
                          className="flex items-start gap-3 p-3 hover:bg-[#1e1e1e] rounded-lg transition-colors cursor-pointer"
                        >
                          <div className="mt-1 text-[#2EDBAD] text-lg">
                            {subItem.icon}
                          </div>

                          <div>
                            <div className="text-white font-bold text-sm hover:text-[#2EDBAD]">
                              {subItem.title}
                            </div>

                            <div className="text-gray-500 text-[12px] leading-tight">
                              {subItem.desc}
                            </div>
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
            <Icon className="max-md:hidden">
              <FiSearch className="size-6" />
            </Icon>
          </div>

          <span className="text-sm text-gray-300 hover:text-white text-[15px] font-semibold cursor-pointer max-md:hidden">
            Log in
          </span>

          <button className="h-9 px-4 rounded-full text-black text-[15px] font-semibold bg-[#2EDBAD] gap-2 flex justify-center items-center">
            <img src="/gift.svg" className="size-4" alt="" />
            Sign up
          </button>

          <MdOutlineMenu
            className="size-6 cursor-pointer md:hidden"
            onClick={() => setOpenPopup(true)}
          />

          <Icon className="max-md:hidden">
            <FiDownload className="size-6" />
          </Icon>

          <Icon className="max-md:hidden">
            <FiGlobe className="size-6" />
          </Icon>

          <Icon className="max-md:hidden">
            <FiSun className="size-6" />
          </Icon>
        </div>

        <MobileDrawer open={openPopup} onClose={handleClose} />
      </div>
    </header>
  );
}

function Icon({ children, className }) {
  return (
    <div
      className={`w-9 h-9 flex items-center justify-center rounded-full text-gray-300 hover:bg-[#111] hover:text-white cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
