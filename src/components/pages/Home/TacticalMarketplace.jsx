import React, { useEffect, useState } from "react";
import API from "../../../Api/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TacticalMarketplace = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoryRes] = await Promise.all([
          API.get("/product?_embed&per_page=50"),
          API.get("/product_cat?per_page=50"),
        ]);

        setProducts(productRes.data);
        setCategories(categoryRes.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    activeCat === "all"
      ? products
      : products.filter((product) => product.product_cat?.includes(activeCat));

  return (
    <section className="w-full bg-[#080b0c] py-20 font-['Chakra_Petch']">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        {/* Heading */}
        <div className="max-w-[850px] mx-auto text-center">
          <span className="block text-sm uppercase tracking-[3px] text-[#7C8761] font-semibold">
            // OPERATOR SUPPLY NETWORK //
          </span>

          <h2 className="mt-4 text-[34px] md:text-[42px] xl:text-[48px] font-bold uppercase text-[#5E7D4D]">
            Tactical Marketplace
          </h2>

          <p className="mt-5 text-white text-[20px] leading-8">
            Buy, sell and discover premium airsoft equipment, tactical apparel
            and mission-ready gear from the community.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="
    mt-16
    border
    border-[0.5px]
    border-[#7C876180]
    bg-[#7C87611A]
    rounded-[5px]
    p-[15px]
    overflow-x-auto
    scrollbar-hide
  "
        >
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveCat("all")}
              className={`px-5 py-3 uppercase text-sm tracking-wider rounded-[5px] transition-all ${activeCat === "all"
                ? "bg-[#5E7D4D] text-white"
                : "text-[#8c8c8c] hover:text-white"
                }`}
            >
              All Products
            </button>

            {categories
              .filter((cat) => cat.slug !== "uncategorized")
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`
    px-6.5
    py-3
    uppercase
    text-sm
    tracking-wider
    whitespace-nowrap
    rounded-[5px]
    cursor-pointer
    transition-all
    duration-300
    ${activeCat === cat.id
                      ? "bg-[#5E7D4D] text-white"
                      : "text-[#8c8c8c] hover:text-white hover:bg-[#5E7D4D]/10"
                    }
  `}
                >
                  {cat.name}
                </button>
              ))}
          </div>
        </div>

        {/* Products */}
        {loading ? (
          <div className="text-center text-white py-20">
            Loading Products...
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="mt-14 tactical-swiper"
          >
            {filteredProducts.map((product) => {
              const image =
                product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/placeholder.jpg";

              const features =
                product.acf?.features?.split(",").map((item) => item.trim()) ||
                [];

              return (
                <SwiperSlide key={product.id}>
                  <div className="group">
                    <div className="relative overflow-hidden">
                      <img
                        src={image}
                        alt={product.title.rendered}
                        className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div
                        className="
    absolute
    top-4
    left-0
    w-[180px]
    bg-gradient-to-r
    from-[#7C8761]
    to-transparent
    text-white
    text-xs
    uppercase
    px-4
    py-2
  "
                      >
                        {product.acf?.brand_name}
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="border-l-2 border-[#5E7D4D] pl-3 text-[#5E7D4D] uppercase text-sm">
                        {product.acf?.product_subtitle}
                      </div>

                      <h3 className="mt-4 text-white text-[30px] font-bold uppercase leading-[1.5] min-h-[110px]">
                        {product.title.rendered}
                      </h3>

                      <div className="border-t border-[#1b2220] pt-3 flex items-center justify-between">
                        <div className="text-[#5E7D4D] text-[42px] font-bold">
                          $
                          {product.meta?._price || product.meta?.price || "145"}
                        </div>

                        <button className="border border-[#5d5d5d] px-8 py-4 uppercase text-white hover:bg-[#6f8d5c] transition">
                          Add To Cart
                        </button>
                      </div>

                      <div className="border-t border-[#1b2220] mt-6 pt-5 flex flex-wrap gap-2">
                        {features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-[#4d613e] text-[#d5d5d5] text-[11px] uppercase px-3 py-2"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#6f8d5c] text-white uppercase px-12 py-4 hover:opacity-90 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TacticalMarketplace;
