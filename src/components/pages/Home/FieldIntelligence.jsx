import React from "react";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";

const FieldIntelligence = () => {
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <section className="w-full bg-[#121619] py-[80px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        {/* Heading Content */}
        <div className="max-w-[820px] mx-auto text-center">
          <p className="text-[#7C8761] text-[14px] font-semibold uppercase tracking-[2px]">
            // Community Operations //
          </p>

          <h2 className="mt-4 text-[#7C8761] text-[32px] md:text-[42px] lg:text-[56px] font-semibold uppercase leading-[1.1]">
            Field Intelligence
          </h2>

          <p className="mt-6 text-white text-[16px] font-medium leading-[1.8]">
            Explore mission footage, community operations, tactical training
            sessions and immersive field moments captured by operators across
            the platform.
          </p>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden xl:flex flex-col gap-6 mt-16">
          {/* Row 01 */}
          <div className="flex gap-6">
            {/* Large */}
            <div className="w-[628px] h-[331px] overflow-hidden">
              {<img
                src={img1}
                alt="Gallery"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />}

              <div className="w-full h-full bg-[#1A2024] border border-white/10" />
            </div>

            {/* Small */}
            <div className="w-[302px] h-[331px] overflow-hidden">
              {<img
                src={img2}
                alt="Gallery"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />}

              <div className="w-full h-full bg-[#1A2024] border border-white/10" />
            </div>

            {/* Small */}
            <div className="w-[302px] h-[331px] overflow-hidden">
              {<img
                src={img3}
                alt="Gallery"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />}

              <div className="w-full h-full bg-[#1A2024] border border-white/10" />
            </div>
          </div>

          {/* Row 02 */}
          <div className="flex gap-6">
            {/* Small */}
            <div className="w-[302px] h-[331px] overflow-hidden">
              {<img
                src={img4}
                alt="Gallery"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />}

              <div className="w-full h-full bg-[#1A2024] border border-white/10" />
            </div>

            {/* Small */}
            <div className="w-[302px] h-[331px] overflow-hidden">
              {<img
                src={img5}
                alt="Gallery"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />}

              <div className="w-full h-full bg-[#1A2024] border border-white/10" />
            </div>

            {/* Large */}
            <div className="w-[628px] h-[331px] overflow-hidden">
              {<img
                src={img6}
                alt="Gallery"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />}

              <div className="w-full h-full bg-[#1A2024] border border-white/10" />
            </div>
          </div>
        </div>

        {/* Tablet Gallery */}
        <div className="hidden md:grid xl:hidden grid-cols-2 gap-6 mt-16">
          {[img1, img2, img3, img4, img5, img6].map((image, index) => (
            <div
              key={index}
              className="h-[495px] overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Mobile Gallery */}
        <div className="grid md:hidden grid-cols-1 gap-5 mt-12">
          {[img1, img2, img3, img4, img5, img6].map((image, index) => (
            <div
              key={index}
              className="h-[380px] overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button
            className=" h-[55px] px-10 bg-[#5E7D4D] border border-[#5E7D4D] text-white text-[16px] font-bold
                        uppercase cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-transparent
                      hover:text-[#5E7D4D]"
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default FieldIntelligence;