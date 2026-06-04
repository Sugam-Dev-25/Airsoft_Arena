import React from "react";

const AirsoftArenaSubscriptions = () => {
  const dots = [
    { top: "20%", left: "30%" },
    { top: "35%", left: "70%" },
    { top: "60%", left: "25%" },
    { top: "75%", left: "65%" },
    { top: "45%", left: "50%" },
    { top: "28%", left: "55%" },
    { top: "70%", left: "40%" },
  ];

  return (
    <section className="w-full flex items-center justify-center">
      <div
        className=" relative w-[350px] h-[302px] lg:h-[200px] xl:h-[230px] bg-black overflow-hidden "
      >
        {/* Frame Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff55] z-20" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff55] z-20" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ff55] z-20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff55] z-20" />

        {/* Radar Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[80%] h-[80%] rounded-full border border-green-500/40" />
          <div className="absolute w-[60%] h-[60%] rounded-full border border-green-500/40" />
          <div className="absolute w-[40%] h-[40%] rounded-full border border-green-500/40" />
          <div className="absolute w-[20%] h-[20%] rounded-full border border-green-500/40" />
        </div>

        {/* Cross Lines */}
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-green-500/30 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-500/30 -translate-y-1/2" />

        {/* Diagonal Lines */}
        <div className="absolute inset-0 rotate-45">
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-green-500/20 -translate-x-1/2" />
        </div>

        <div className="absolute inset-0 -rotate-45">
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-green-500/20 -translate-x-1/2" />
        </div>

        {/* Radar Sweep */}
        <div
          className=" absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] "
        >
          <div
            className=" absolute left-1/2 top-1/2 w-[50%] h-[50%] bg-gradient-to-r from-[#5E7D4D]/70
                      via-[#5E7D4D]/30 to-transparent origin-bottom-left "
            style={{
              clipPath: "polygon(0 100%, 100% 50%, 100% 100%)",
              transform: "translateY(-100%)",
            }}
          />
        </div>
        {/* Blinking Dots */}
        {dots.map((dot, index) => (
          <span
            key={index}
            className=" absolute w-2 h-2 rounded-full bg-green-400 animate-ping "
            style={{
              top: dot.top,
              left: dot.left,
              animationDuration: `${2 + index}s`,
            }}
          />
        ))}

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-red-500 -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* Outer Glow Ring */}
        <div className="absolute inset-4 rounded-full border border-green-500/20" />
      </div>
    </section>
  );
};

export default AirsoftArenaSubscriptions;