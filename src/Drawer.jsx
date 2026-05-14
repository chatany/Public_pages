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
        path: `${MAIN_SITE}/recurring`,
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
        path: "/Referral",
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
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-[380px] 
        bg-[#0B0E11] text-white shadow-2xl
        overflow-y-auto overscroll-contain
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <img src="/bitzup_light_logo.png" className="h-7 w-auto" alt="logo" />
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
            className="w-full h-[48px] rounded-full bg-[#2EDBAD] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#25b5a2] transition-colors"
          >
            <img src="gift.svg" className="size-5" /> Sign up now
          </button>
          <button 
             onClick={() => handleNavigate("/trade/login")}
            className="w-full h-[48px] rounded-full bg-[#2B3139] text-white font-semibold hover:bg-[#363c45] transition-colors"
          >
            Log in
          </button>
        </div>

        {/* Menu */}
        <div className="px-6 space-y-1">
          {/* Static Top Item */}
          <div 
            onClick={() => handleNavigate("/trade/spot")}
            className="py-4 text-[17px] font-semibold text-white hover:text-[#2EDBAD] transition-colors cursor-pointer"
          >
            Buy Crypto
          </div>

          {/* Dynamic Menu with Accordion */}
          {Object.entries(navConfig).map(([key, items]) => {
            const isExpanded = expandedItem === key;
            return (
              <div key={key} className="border-b border-white/5 last:border-0">
                <button
                  onClick={() => setExpandedItem(isExpanded ? null : key)}
                  className="w-full py-4 flex items-center justify-between group"
                >
                  <span className={`text-[17px] font-semibold transition-colors ${isExpanded ? "text-[#2EDBAD]" : "text-white"}`}>
                    {key}
                  </span>
                  <TiArrowSortedDown 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#2EDBAD]" : ""}`}
                  />
                </button>

                {/* Submenu */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[300px] pb-4" : "max-h-0"
                  }`}
                >
                  <div className="space-y-4 pl-4 border-l border-[#2EDBAD]/20 ml-1">
                    {items.map((sub) => (
                      <div
                        key={sub.title}
                        onClick={() => handleNavigate(sub.path)}
                        className="text-[15px] text-gray-400 hover:text-white transition-colors cursor-pointer"
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
          <div className="p-6 rounded-2xl bg-[#181D23] border border-white/5">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="text-lg font-bold mb-1">Trade Anywhere</div>
                <div className="text-xs text-gray-500">Scan to download Bitzup App</div>
              </div>
              <div className="p-2 bg-white rounded-xl">
                 <img src="/qr.png" className="size-24" onError={(e) => e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://bitzup.com"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
