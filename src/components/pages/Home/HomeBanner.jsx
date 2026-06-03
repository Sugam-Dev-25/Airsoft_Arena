import React from "react";
import bannerBg from "../../../assets/home-banner.png";

const HomeBanner = () => {
  return (
    <section className=" relative w-full min-h-[850px] bg-cover bg-center lg:bg-[position:85%_center]
                         bg-no-repeat overflow-hidden font-['Chakra_Petch']"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        <div className="min-h-[850px] flex items-center">
          {/* Content Wrapper */}
          <div className="relative max-w-[520px] py-10 pl-10">

            {/* Top Left Frame Corner */}
            <div
              className=" tactical-corner absolute top-[8px] left-[8px] w-[46px] h-[45px] border-t-[5px]
                          border-l-[5px] border-[#7C8761]"
            />

            {/* Bottom Right Frame Corner */}
            <div
              className=" tactical-corner absolute bottom-[8px] right-[8px] w-[46px] h-[45px] border-b-[5px]
                          border-r-[5px] border-[#7C8761]"
            />

            {/* Subtitle */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[14px] font-semibold uppercase text-[#7C8761]">
                // YOUR NEXT MISSION STARTS HERE
              </span>

              <svg
                width="161"
                height="8"
                viewBox="0 0 161 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block"
              >
                {/* Dotted Line */}
                <line
                  x1="0"
                  y1="4"
                  x2="155"
                  y2="4"
                  stroke="#7C8761"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />

                {/* Dots */}
                <circle cx="74.5" cy="4" r="2.5" fill="#7C8761" />
                <circle cx="134.5" cy="4" r="2.5" fill="#7C8761" />

                {/* Arrow */}
                <path
                  d="M156 1L160 4L156 7"
                  stroke="#7C8761"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="mt-5 font-bold uppercase leading-[0.95]">
              <span className="block text-white text-[42px] md:text-[60px] xl:text-[74px]">
                Enter The
              </span>

              <span className="block text-[#5E7D4D] text-[54px] md:text-[75px] xl:text-[94px]">
                Tactical
              </span>

              <span className="block text-white text-[42px] md:text-[60px] xl:text-[74px]">
                Community
              </span>
            </h1>

            {/* Description */}
            <p
              className=" mt-6 max-w-[560px] text-white text-[16px] md:text-[18px] xl:text-[20px]
                          font-medium leading-[1.7]"
            >
              Events. Teams. Operations. Gear. Brotherhood.
              <br />
              A premium platform built for airsoft operators
              and tactical enthusiasts.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {/* Join Community */}
              <button
                className=" h-[55px] px-8 bg-[#5E7D4D] border border-[#5E7D4D] text-white text-[16px]
                            font-bold uppercase cursor-pointer transition-all duration-300 hover:scale-105
                            hover:bg-transparent hover:text-[#5E7D4D]"
              >
                Join The Community
              </button>

              {/* Explore Events */}
              <button
                className=" h-[55px] px-8 border border-white text-white text-[16px] font-bold
                            uppercase cursor-pointer transition-all duration-300 hover:scale-105"
              >
                Explore Events
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;