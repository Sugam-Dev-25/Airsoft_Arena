import React from "react";

// Import Images Later
import eventsImg from "../../../assets/events.png";
import fieldsImg from "../../../assets/fields.png";
import marketplaceImg from "../../../assets/marketplace.png";
import teamsImg from "../../../assets/teams.png";

const Service = () => {
  const services = [
    {
      title: "EVENTS",
      image: eventsImg,
      link: "#",
    },
    {
      title: "AIRSOFT FIELDS",
      image: fieldsImg,
      link: "#",
    },
    {
      title: "MARKETPLACE",
      image: marketplaceImg,
      link: "#",
    },
    {
      title: "TEAMS",
      image: teamsImg,
      link: "#",
    },
  ];

  return (
    <section
      className=" w-full bg-[#0B0D0E] font-['Chakra_Petch'] py-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        <div
          className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 -mt-[180px]"
        >
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className=" relative group overflow-hidden h-[359px] shadow-[inset_0_0_0_1px_rgba(124,135,97,0.2)]
                          cursor-pointer"
            >
              {/* Background Image */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className=" w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-[#1A2024]" />
              )}

              {/* Overlay */}
              <div
                className=" absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10"
              />

              {/* Vertical Text */}
              <div
                className=" absolute top-0 left-0 h-full flex items-start justify-center px-2"
              >
                <span
                  className=" text-white text-[34px] xl:text-[45px] font-bold uppercase leading-none [writing-mode:vertical-lr]
                                drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                >
                  {service.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;