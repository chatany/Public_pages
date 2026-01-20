import { Drawer } from "@mui/material";
import { useState } from "react";
import {
  FiChevronDown,
  FiSearch,
  FiDownload,
  FiGlobe,
  FiSun,
} from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import MobileDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClose=()=>{
    setOpenPopup(false);
  }
  const navigate=useNavigate()
  return (
    <header className="h-[64px] w-full bg-black border-b border-gray-800">
      <div className=" mx-auto h-full px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-white font-semibold text-lg" onClick={()=>navigate("/")}>
              <img src="/bitzup_light_logo.png" className="h-12 w-fit" />
            </span>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-300 h-full">
            {/* Trade Dropdown */}
            <div className="relative group h-full flex items-center cursor-pointer">
              {/* DROPDOWN */}
              {/* <div className="absolute top-full left-0 mt-3 w-48 border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {["Spot", "Margin", "Convert", "Grid Trading"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm text-gray-300 hover:bg-[#111] hover:text-white cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div> */}
            </div>

            {/* Other items */}
            {[
              "Buy Crypto",
              " Trade",
              "Markets",
              "Futures",
              "Earn",
              "Community",
              "Web3",
              "More",
            ].map((item) => (
              <div
                key={item}
                className="h-full flex items-center cursor-pointer text-white font-semibold text-[15px]"
              >
                {item}
                <TiArrowSortedDown />
              </div>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 h-full">
          <MdOutlineMenu className="size-6 cursor-pointer md:hidden" onClick={()=>setOpenPopup(true)} />
          <div className="max-md:hidden">
            <Icon className="max-md:hidden">
              <FiSearch className="size-6 " />
            </Icon>
          </div>
          <span className="text-sm text-gray-300 hover:text-white text-[15px] font-semibold cursor-pointer max-md:hidden">
            Log in
          </span>
          <button className="h-9 px-4 rounded-full bg-primary text-black  text-[15px] font-semibold bg-[#2EDBAD] max-md:hidden">
            Sign Up
          </button>
          <Icon>
            <FiDownload className="size-6 " />
          </Icon>
          <Icon>
            <FiGlobe className="size-6" />
          </Icon>
          <Icon>
            <FiSun className="size-6" />
          </Icon>
        </div>
        <MobileDrawer open={openPopup} onClose={handleClose}/>
      </div>
    </header>
  );
}

function Icon({ children }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full text-gray-300 hover:bg-[#111] hover:text-white cursor-pointer">
      {children}
    </div>
  );
}
