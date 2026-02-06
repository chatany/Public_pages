// src/components/MobileDrawer.jsx
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

export default function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    document.body.scroll = "hidden";
  }, [open]);
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 h-fit bg-transparent ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-[380px]
        bg-gradient-to-b from-[#0b0f14] to-[#070a0e]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <img src="/bitzup_light_logo.png" className="h-fit w-22"/>
            {/* <div className="h-9 w-9 rounded-xl bg-[#111827] flex items-center justify-center">
              <span className="text-[#6EE7B7] font-bold">b</span>
            </div>
            <span className="text-white text-lg font-semibold">BitZup</span> */}
          </div>

          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CgClose size={22} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="px-5 space-y-3 mt-2">
          <button className="w-full h-12 rounded-full bg-[#6EE7B7] text-black font-semibold flex items-center justify-center gap-2">
            <img src="gift.svg" className="size-4"/> Sign up
          </button>

          <button className="w-full h-12 rounded-full bg-[#2A2A2A] text-white font-medium">
            Log in
          </button>
        </div>

        {/* Menu */}
        <div className="px-5 mt-8 space-y-5 text-left text-white">
          {[
            "Buy crypto",
            "Markets",
            "Trade",
            "Futures",
            "Earn",
            "Community",
            "Web3",
            "More",
            "Rewards Hub",
            "English/USD",
            "Change & Chart Start-End Time",
            // "Rise/Fall Color",
          ].map((item) => (
            <div
              key={item}
              className="text-[17px] font-medium hover:text-[#6EE7B7] cursor-pointer "
            >
              {item}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 left-0 w-full px-5">
          <button className="w-full h-12 rounded-full border border-white/40 text-white font-medium">
            Download App
          </button>
        </div>
      </div>
    </>
  );
}
