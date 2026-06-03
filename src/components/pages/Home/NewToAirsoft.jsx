import React from "react";
import cardImg1 from "../../../assets/card-img-1.png";
import cardImg2 from "../../../assets/card-img-2.png";
import cardImg3 from "../../../assets/card-img-3.png";
import cardImg4 from "../../../assets/card-img-4.png";

const NewToAirsoft = () => {
  const cards = [
    {
      tag: "01 / ENTRY BRIEF",
      title: "GETTING STARTED",
      description:
        "Learn the fundamentals of airsoft, field etiquette, mission types and how tactical gameplay works before entering your first event.",
      button: "READ GUIDE",
      image: cardImg1,
    },
    {
      tag: "02 / FIELD SAFETY",
      title: "SAFETY RULES",
      description:
        "Understand eye protection standards, weapon handling, engagement distances and field regulations used in professional milsim environments.",
      button: "VIEW SAFETY RULES",
      image: cardImg2,
    },
    {
      tag: "03 / EQUIPMENT SETUP",
      title: "REQUIRED LOADOUTS",
      description:
        "Explore beginner-friendly gear setups including rifles, protective equipment, tactical vests and communication essentials.",
      button: "EXPLORE LOADOUTS",
      image: cardImg3,
    },
    {
      tag: "04 / COMMUNITY ACCESS",
      title: "JOIN FIRST TEAM",
      description:
        "Connect with beginner-friendly units, discover local operators and become part of a growing tactical community.",
      button: "FIND A TEAM",
      image: cardImg4,
    },
  ];

  return (
    <section className="w-full bg-[#121619] py-20 font-['Chakra_Petch']">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-[760px]">
            {/* Subtitle */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[14px] font-semibold uppercase text-[#7C8761]">
                // START YOUR JOURNEY
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
            <h2 className="mt-4 text-[34px] md:text-[45px] font-bold uppercase text-[#5E7D4D] leading-tight">
              NEW TO AIRSOFT?
            </h2>

            {/* Description */}
            <p className="mt-4 text-[16px] font-medium text-white max-w-[590px]">
              Everything you need to start your tactical journey — from safety
              and gear setup to finding your first team and entering your first
              operation.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex justify-start lg:justify-end self-center">
            <button
              className=" h-[55px] px-8 bg-[#5E7D4D] border border-[#5E7D4D] text-white text-[16px] font-bold
                          uppercase cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-transparent
                        hover:text-[#5E7D4D]"
            >
              Join Community
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" relative bg-[#08090A] border border-[#7C876133] min-h-[340px]
                          transition-all duration-300 hover:-translate-y-2"
            >
              {/* Corner Frame */}
              <div className=" tactical-corner absolute -top-[10px] -left-[10px] w-8 h-8 border-l border-t border-[#7C8761]" />
              <div className=" tactical-corner absolute -bottom-[10px] -right-[10px] w-8 h-8 border-r border-b border-[#7C8761]" />

              {/* Tag + Icon */}
              <div className="flex items-start justify-between">
                <div
                  className=" px-3 py-2 text-[12px] font-semibold text-[#7C8761] uppercase
                              bg-gradient-to-r from-[#7C876180] to-[#7C876100]"
                >
                  {card.tag}
                </div>

                <div className="pt-4 pr-[14px]">
                  <div
                    className=" w-[65px] h-[65px] bg-[#08090A] overflow-hidden"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className=" w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="p-[14px]">
                {/* Title */}
                <h3 className="text-[25px] font-bold text-[#B3B4B2]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className=" text-[14px] font-normal text-[#B3B4B2] leading-[1.8]">
                  {card.description}
                </p>

                {/* Button */}
                <button
                  className=" mt-4 h-[50px] px-6 border border-white text-white text-[14px] font-bold
                              uppercase cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewToAirsoft;