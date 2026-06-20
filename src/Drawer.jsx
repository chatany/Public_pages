// src/components/MobileDrawer.jsx
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";

export default function MobileDrawer({ open, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const MAIN_SITE = "/trade";

  const navConfig = {
    Trade: [
      {
        title: "Spot",
        path: `${MAIN_SITE}/spot/BTCUSDT`,
      },
      {
        title: "Convert",
        path: `${MAIN_SITE}/convert`,
      },
      {
        title: "Auto invest",
        path: "/invest",
      },
    ],
    Futures: [
      {
        title: "USDⓈ-M Futures",
        path: `${MAIN_SITE}/futures/BTCUSDT`,
      },
    ],
    Earn: [
      {
        title: "Simple Earn",
        path: `${MAIN_SITE}/subscription`,
      },
    ],
    More: [
      {
        title: "VIP & Institutional",
        path: "/vip",
      },
      {
        title: "Referral Program",
        path: "/referral",
      },
    ],
  };

  const handleNavigate = (path) => {
    if (path.startsWith("http") || path.startsWith("/trade")) {
      window.location.href = path;
    } else {
      window.location.href = path; // Simplified for mobile
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
          <button
            onClick={() => handleNavigate("/trade/register")}
            className="w-full h-12 rounded-full bg-brand-green text-black font-bold flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-colors"
          >
            <img src="gift.svg" className="size-5" alt="Gift rewards icon" />{" "}
            Sign up now
          </button>
          <button
            onClick={() => handleNavigate("/trade/login")}
            className="w-full h-12 rounded-full bg-divider text-white font-semibold hover:bg-surface-2 transition-colors"
          >
            Log in
          </button>
        </div>

        {/* Menu */}
        <div className="px-6 space-y-1">
          {/* Static Top Item */}
          <div
            onClick={() => handleNavigate("/trade/buy-crypto")}
            className="py-4 text-lg font-semibold text-white hover:text-brand-green transition-colors cursor-pointer"
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
                  className="w-full py-4 flex items-center justify-between group"
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
                  <div className="space-y-4  ">
                    {items.map((sub) => (
                      <div
                        key={sub.title}
                        onClick={() => handleNavigate(sub.path)}
                        className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {sub.title}
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
