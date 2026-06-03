import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "EVENTS",
    "AIRSOFT FIELDS",
    "MARKETPLACE",
    "UNITS",
    "MEDIA",
    "BEGINNER GUIDE",
    "COMMUNITY",
    "ABOUT",
    "CONTACT",
  ];

  return (
    <>
      <header className="w-full bg-[#0B0D0E] font-['Chakra_Petch']">
        <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
          {/* Top Row */}
          <div className="flex items-center justify-between py-4">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center flex-1 min-w-0">
              {/* Logo */}
              <div className="shrink-0">
                {/* <img src={logo} alt="Airsoft Arena" /> */}

                <div className="text-[28px] font-bold leading-none text-white whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105">
                  <span className="text-[#5E7D4D]">AIRSOFT</span>{" "}
                  <span>ARENA</span>
                </div>
              </div>

              {/* Search */}
              <div className="ml-[130px] flex-1 max-w-[545px]">
                <div className="h-[50px] border border-[#2A2D2F] flex items-center px-4">
                  <FiSearch
                    size={25}
                    className="text-[#5E7D4D] shrink-0"
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-[#FFFFFF66] text-[16px] font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Header */}
            <div className="flex lg:hidden items-center justify-between w-full">
              {/* Logo */}
              <div className="text-[24px] font-bold leading-none text-white whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105">
                <span className="text-[#5E7D4D]">AIRSOFT</span>{" "}
                <span>ARENA</span>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <FiMenu size={28} />
              </button>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                className=" h-[50px] px-8 bg-[#5E7D4D] border border-[#5E7D4D] text-white text-[16px] font-bold
                            uppercase mr-[15px] cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-transparent hover:border-[#5E7D4D]"
              >
                Join Community
              </button>

              <button
                className=" h-[50px] px-8 border border-white text-white text-[16px] font-bold uppercase
                            cursor-pointer transition-all duration-300 hover:scale-105"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="h-[50px] border border-[#2A2D2F] flex items-center px-4">
              <FiSearch
                size={18}
                className="text-[#5E7D4D] shrink-0"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-[#FFFFFF66] text-[16px] font-medium"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center">
            <ul className=" flex items-center justify-between w-full py-5 lg:gap-4 min-[1150px]:gap-5
                            min-[1200px]:gap-6 xl:gap-[34px]"
            >
              {navItems.map((item, index) => (
                <li key={item}>
                  <button
                    className={`text-[16px] uppercase whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105 ${index === 0
                      ? "font-bold text-[#5E7D4D]"
                      : "font-medium text-[#FFFFFF80] hover:text-white"
                      }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-all duration-300 ${menuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      />

      {/* Off Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] bg-[#0B0D0E] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen
          ? "translate-x-0"
          : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/20">
          <div className="text-white text-xl font-bold">
            MENU
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-5 h-[calc(100vh-81px)] overflow-y-auto">
          <ul className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <li key={item}>
                <button
                  className={`text-left text-[16px] uppercase cursor-pointer transition-all duration-300 hover:scale-105 ${index === 0
                    ? "font-bold text-[#5E7D4D]"
                    : "font-medium text-[#FFFFFF80]"
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3">
            <button
              className=" w-full h-[50px] bg-[#5E7D4D] border border-[#5E7D4D] text-white font-bold
                          uppercase cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-transparent"
            >
              Join Community
            </button>

            <button
              className=" w-full h-[50px] border border-white text-white font-bold uppercase cursor-pointer
                          transition-all duration-300 hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;