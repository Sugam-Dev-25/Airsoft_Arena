import React, { useState } from "react";

import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const tabs = [
  "ALL OPERATIONS",
  "CQB",
  "WOODLAND",
  "NIGHT OPS",
  "TRAINING",
  "COMPETITIVE",
];

const UpcomingOperations = () => {
  const [operations, setOperations] = useState([]);
  const [activeTab, setActiveTab] = useState("ALL OPERATIONS");
  const [search, setSearch] = useState("");

  // FETCH OPERATIONS
  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const res = await API.get("/operations?_embed");

        setOperations(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOperations();
  }, []);

  // FORMAT DATE
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);

    const date = new Date(`${year}-${month}-${day}`);

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // FILTER OPERATIONS
  const filteredOperations = operations.filter((item) => {
    const matchesTab =
      activeTab === "ALL OPERATIONS" ? true : item.acf.category === activeTab;

    const matchesSearch = item.title.rendered
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <>
       {/* TOP BAR */}
              <div
                className="
                  mt-14
                  border
                  border-[#7C876180]
                  bg-[#7C87611A]
                  rounded-[5px]
                  p-4
                  flex
                  flex-wrap
                  gap-4
                  justify-between
                  items-center
                "
              >
                {/* TABS */}
                <div className="flex flex-wrap gap-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
              px-5
              py-3
              text-sm
              uppercase
              tracking-wider
              transition-all
              rounded-[5px]
              cursor-pointer
      
              ${activeTab === tab
                          ? "bg-[#5E7D4D] text-white"
                          : "bg-transparent text-[#8A8A8A] hover:text-white"
                        }
            `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
      
                {/* SEARCH */}
                <div className="relative w-full md:w-[280px]">
                  <FiSearch size={25}
                    className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-[#5E7D4D]
            text-[18px]
            pointer-events-none
          "
                  />
      
                  <input
                    type="text"
                    placeholder="Search operations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
          bg-transparent
          border-[0.5px]
          border-white
          rounded-[5px]
          pl-12
          pr-2
          py-3
          outline-none
          w-full
          text-white
          placeholder:text-[#7f7f7f]
        "
                  />
                </div>
              </div>
      
              {/* OPERATION CARDS */}
              <div className="mt-8 space-y-6">
                {filteredOperations.map((operation) => {
                  const acf = operation.acf;
      
                  return (
                    <div
                      key={operation.id}
                      className="
          border
          border-[#28311f]
          rounded-2xl
          overflow-hidden
          bg-[#050807]
          p-[10px]
        "
                    >
                      <div className="grid lg:grid-cols-[1.3fr_1fr_0.7fr]">
                        {/* IMAGE */}
                        <div className="h-full">
                          <img
                            src={
                              operation?._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url
                            }
                            alt={operation.title.rendered}
                            className="
          w-full
          h-full
          object-cover
          min-h-[270px]
          rounded-[10px]
        "
                          />
                        </div>
      
                        {/* CONTENT */}
                        <div
                          className="
                            p-6
                            border-t
                            lg:border-t-0
                            border-[#28311f]
                          "
                        >
                          {/* SUBTITLE */}
                          <div className="flex items-center gap-3">
                            <div className="w-[2px] h-[24px] bg-[#7C8761]" />
      
                            <p
                              className="
          text-[#5E7D4D]
          uppercase
          text-[14px]
          font-semibold
          tracking-widest
        "
                            >
                              {acf.operation_subtitle}
                            </p>
                          </div>
      
                          {/* TITLE */}
                          <h2
                            className="
                              text-4xl
                              xl:text-5xl
                              font-black
                              uppercase
                              mt-3
                              leading-tight
                              text-white
                            "
                          >
                            {operation.title.rendered}
                          </h2>
      
                          {/* DESCRIPTION */}
                          <div
                            className="
                              text-[#cfcfcf]
                              mt-5
                              leading-8
                            "
                            dangerouslySetInnerHTML={{
                              __html: operation.content.rendered,
                            }}
                          />
      
                          {/* TAGS */}
                          <div className="flex flex-wrap gap-2 mt-5">
                            {acf.tags?.split(",").map((tag, index) => (
                              <span
                                key={index}
                                className="
                                    bg-[#445734]
                                    text-[#b8d59f]
                                    px-3
                                    py-1
                                    text-xs
                                    uppercase
                                  "
                              >
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
      
                        {/* SIDEBAR */}
                        <div
                          className="
                            p-6
                            border-t
                            lg:border-t-0
                            lg:border-l
                            border-[#28311f]
                            flex
                            flex-col
                            justify-between
                          "
                        >
                          {/* DETAILS */}
                          <div className="space-y-5">
                            <div className="flex items-center gap-3 text-[#cfcfcf]">
                              <FaCalendarAlt className="text-[#6f8f57]" />
      
                              <span>{formatDate(acf.operation_date)}</span>
                            </div>
      
                            <div className="flex items-center gap-3 text-[#cfcfcf]">
                              <FaMapMarkerAlt className="text-[#6f8f57]" />
      
                              <span>{acf.location}</span>
                            </div>
      
                            <div className="flex items-center gap-3 text-[#cfcfcf] uppercase font-semibold">
                              <FaLocationCrosshairs className="text-[#6f8f57]" />
      
                              <span>{acf.mission_type}</span>
                            </div>
      
                            <div className="flex items-center gap-3 text-[#cfcfcf]">
                              <FaUsers className="text-[#6f8f57]" />
      
                              <span>{acf.operators_count} OPERATORS</span>
                            </div>
      
                            <div className="flex items-center gap-3 text-[#cfcfcf] uppercase font-semibold">
                              <HiChartBar className="text-[#6f8f57]" />
      
                              <span>{acf.difficulty}</span>
                            </div>
                          </div>
      
                          {/* BUTTONS */}
                          <div className="space-y-4 mt-8">
                            <button
                              className="
                                w-full
                                border
                                border-white
                                py-4
                                uppercase
                                font-semibold
                                text-white
                                hover:bg-white
                                hover:text-black
                                transition-all
                              "
                            >
                              {acf.secondary_button_text}
                            </button>
      
                            <button
                              className="
                                w-full
                                bg-[#6f8f57]
                                py-4
                                uppercase
                                font-semibold
                                text-white
                                hover:opacity-90
                                transition-all
                              "
                            >
                              {acf.primary_button_text}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
    </>
  );
};

export default OperationsContent;