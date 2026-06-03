import React from "react";

const UpcomingOperations = () => {
  return (
    <section className="w-full bg-[#0B0D0E] py-20 font-['Chakra_Petch']">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        {/* Heading Content */}
        <div className="max-w-[900px] mx-auto text-center">
          {/* Sub Heading */}
          <span
            className="
              block
              text-[14px]
              font-semibold
              uppercase
              tracking-wide
              text-[#7C8761]
            "
          >
            // ACTIVE DEPLOYMENTS //
          </span>

          {/* Main Heading */}
          <h2
            className="
              mt-4
              text-[32px]
              md:text-[40px]
              xl:text-[45px]
              font-bold
              uppercase
              leading-tight
              text-[#5E7D4D]
            "
          >
            Upcoming Operations
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[700px]
              mx-auto
              text-[20px]
              font-medium
              leading-[1.8]
              text-white
            "
          >
            Join immersive milsim scenarios, CQB operations and tactical training events with the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingOperations;