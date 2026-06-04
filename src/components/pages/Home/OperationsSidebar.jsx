import React from "react";
import {
    FaUsers,
    FaCalendarAlt,
    FaShieldAlt,
    FaMapMarkedAlt,
} from "react-icons/fa";

import AirsoftArenaSubscriptions from "./AirsoftArenaSubscriptions";

const statistics = [
    {
        id: 1,
        icon: <FaUsers />,
        title: "Active Operators",
        value: "1,248",
    },
    {
        id: 2,
        icon: <FaCalendarAlt />,
        title: "Upcoming Events",
        value: "36",
    },
    {
        id: 3,
        icon: <FaShieldAlt />,
        title: "Registered Teams",
        value: "214",
    },
    {
        id: 4,
        icon: <FaMapMarkedAlt />,
        title: "Airsoft Fields",
        value: "87",
    },
];

const OperationsSidebar = () => {
    return (<div className="w-full flex flex-col gap-6">

        {/* LIVE OPERATION STATUS */}
        <div
            className=" w-full xl:max-w-[300px] border border-[#7C876180] rounded-[10px] bg-transparent
                        p-4 overflow-hidden"
        >
            <div className="flex items-center gap-2 mb-4">
                <div className="w-[2px] h-[20px] bg-[#7C8761]" />

                <h3 className="text-[14px] font-bold text-[#B3B4B2] uppercase">
                    LIVE OPERATION STATUS
                </h3>
            </div>

            <AirsoftArenaSubscriptions />
        </div>

        {/* STATISTICS */}
        <div
            className=" w-full xl:max-w-[320px] border border-[#7C876180] rounded-[10px] bg-transparent p-5"
        >
            <div
                className=" grid grid-cols-1 min-[768px]:grid-cols-2 min-[901px]:grid-cols-1 gap-4"
            >

                {statistics.map((item) => (
                    <div
                        key={item.id}
                        className=" bg-[#16191B] border border-[#7C876180] rounded-[10px] p-4
                                    flex items-center gap-4 "
                    >
                        <div
                            className=" text-[#B3B4B2] text-[40px] shrink-0 "
                        >
                            {item.icon}
                        </div>

                        <div>
                            <p
                                className=" text-[14px] font-semibold text-[#B3B4B2] "
                            >
                                {item.title}
                            </p>

                            <h3
                                className=" text-[40px] leading-none font-bold text-[#5E7D4D] mt-2 "
                            >
                                {item.value}
                            </h3>
                        </div>
                    </div>
                ))}

                <button
                    className=" mt-2 w-full h-[56px] bg-[#5E7D4D] border border-[#5E7D4D] text-white uppercase font-semibold
                                tracking-wide cursor-pointer transition-all duration-300 hover:bg-transparent
                              hover:text-[#5E7D4D] "
                >
                    VIEW ALL STATISTICS
                </button>

            </div>
        </div>
    </div>

    );
};

export default OperationsSidebar;
