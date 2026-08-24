import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import { useAuth } from "./useAuth";
import Button from "./Common/Button";

export default function MobileDrawer({ open, onClose }) {
  const isLoggedIn = useAuth();
  const [expandedItem, setExpandedItem] = useState(null);
  const MAIN_SITE = "/trade";

  const navConfig = {
    Spot: [
      {
        title: "Spot",
        path: `${MAIN_SITE}/spot/BTCUSDT`,
      },
      {
        title: "Stocks",
        path: `${MAIN_SITE}/spot/RSPYUSDT`,
        badge: "New",
      },
      {
        title: "0 Fees",
        path: `${MAIN_SITE}/spot/BTCUSDC`,
        badge: "New",
      },
      {
        title: "Convert",
        path: `${MAIN_SITE}/convert`,
      },
    ],
    Futures: [
      {
        title: "USDT Perpetual",
        path: `${MAIN_SITE}/futures/BTCUSDT`,
      },
      {
        title: "TradFi",
        path: `${MAIN_SITE}/futures/RSPYUSDT`,
      },
    ],
    Options: [
      {
        title: "Options",
        path: `${MAIN_SITE}/options`,
      },
    ],
    Alpha: [
      {
        title: "Alpha",
        path: `${MAIN_SITE}/alpha`,
        badge: "New",
      },
    ],
    Earn: [
      {
        title: "BitZup Earn",
        path: `${MAIN_SITE}/subscription`,
      },
    ],
    More: [
      {
        title: "VIP & Institutional",
        path: "/vip",
      },
      {
        title: "OTC Trading",
        path: `${MAIN_SITE}/otc`,
      },
      {
        title: "Referral Program",
        path: "/referral",
      },
    ],
  };

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
      window.location.href = targetPath; // Simplified for mobile
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Close menu"
        className={`fixed inset-0 z-dropdown bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClose();
          }
        }}
      />

      {/* Drawer */}
      <div
        style={{
          transform: open ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
          WebkitTransform: open ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
        }}
        className={`fixed top-0 right-0 z-modal h-full w-[85%] max-w-sm 
        bg-surface-2 text-white shadow-2xl
        overflow-y-auto overscroll-contain
        transition-transform duration-300 ease-out
        ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <img
            src="/bitzup_light_logo.png"
            className="h-7 w-auto"
            alt="BitZup Logo"
          />
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
          >
            <CgClose size={24} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="px-6 py-6 space-y-3">
          {isLoggedIn ? (
            <>
              <Button
                onClick={() => {
                  handleNavigate("/trade/spot/BTCUSDT");
                  onClose();
                }}
                variant="primary"
                className="w-full h-12 font-bold"
              >
                Trade Now
              </Button>
              <Button
                onClick={() => {
                  handleNavigate("/invest");
                  onClose();
                }}
                variant="ghost"
                className="w-full h-12 font-semibold"
              >
                Auto Invest
              </Button>
              <Button
                onClick={() => {
                  handleNavigate("/trade/subscription");
                  onClose();
                }}
                variant="ghost"
                className="w-full h-12 font-semibold"
              >
                BitZup Earn
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => handleNavigate("/trade/register")}
                variant="primary"
                className="w-full h-12 font-bold flex gap-2"
              >
                <img src="gift.svg" className="size-5" alt="Gift rewards icon" />{" "}
                Sign up now
              </Button>
              <Button
                onClick={() => handleNavigate("/trade/login")}
                variant="ghost"
                className="w-full h-12 font-semibold"
              >
                Log in
              </Button>
            </>
          )}
        </div>

        {/* Menu */}
        <div className="px-6 space-y-1">
          {/* Static Top Item */}
          <div
            onClick={() => handleNavigate("/trade/buy-crypto")}
            className="py-4 text-lg font-semibold text-white hover:text-brand-green transition-colors cursor-pointer border-b border-border"
          >
            Buy Crypto
          </div>

          {/* Dynamic Menu with Accordion */}
          {Object.entries(navConfig).map(([key, items]) => {
            const isExpanded = expandedItem === key;
            return (
              <div key={key} className="border-b border-border last:border-0">
                <button
                  onClick={() => setExpandedItem(isExpanded ? null : key)}
                  className="w-full py-4 flex items-center justify-between group cursor-pointer"
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${isExpanded ? "text-brand-green" : "text-white"}`}
                  >
                    {key}
                  </span>
                  <TiArrowSortedDown
                    size={20}
                    className={`text-gray-500 transition-transform duration-300 ${isExpanded ? "rotate-180 text-brand-green" : ""}`}
                  />
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-80 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="space-y-4">
                    {items.map((sub) => (
                      <div
                        key={sub.title}
                        onClick={() => handleNavigate(sub.path)}
                        className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>{sub.title}</span>
                        {sub.badge && (
                          <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-brand-green/15 text-brand-green border border-brand-green/30 uppercase tracking-wider">
                            {sub.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer App Download */}
        <div className="mt-10 px-6 pb-10">
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="text-lg font-bold mb-1">Trade Anywhere</div>
                <div className="text-xs text-gray-500">
                  Scan to download Bitzup App
                </div>
              </div>
              <div className="p-2 bg-white rounded-xl">
                <img
                  src="/qr.png"
                  className="size-24"
                  alt="BitZup App Download QR Code"
                  onError={(e) =>
                    (e.target.src =
                      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://bitzup.com")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
