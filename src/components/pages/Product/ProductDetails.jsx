import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../Api/Api";

const ProductDetails = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/product?slug=${slug}&_embed`);

        if (res.data.length > 0) {
          setProduct(res.data[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen bg-[#080b0c] flex items-center justify-center">
        <h2 className="text-white text-2xl">Loading...</h2>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="min-h-screen bg-[#080b0c] flex items-center justify-center">
        <h2 className="text-white text-2xl">Product Not Found</h2>
      </section>
    );
  }

  const image =
    product._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const features =
    product.acf?.features
      ?.split(",")
      .map((item) => item.trim()) || [];

  return (
    <section className="bg-[#080b0c] text-white py-20 min-h-screen font-['Chakra_Petch']">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Product Image */}
          <div>
            <img
              src={image}
              alt={product.title.rendered}
              className="w-full h-auto object-cover border border-[#1d2521]"
            />
          </div>

          {/* Product Info */}
          <div>

            <span className="inline-block bg-[#6f8d5c] px-4 py-2 uppercase text-xs tracking-wider">
              {product.acf?.brand_name}
            </span>

            <div className="mt-8 border-l-2 border-[#5E7D4D] pl-3 text-[#5E7D4D] uppercase text-sm">
              {product.acf?.product_subtitle}
            </div>

            <h1 className="mt-5 text-[40px] xl:text-[56px] font-bold uppercase leading-tight">
              {product.title.rendered}
            </h1>

            <div className="mt-8 text-[#6f8d5c] text-[48px] font-bold">
              $
              {product.meta?._price ||
                product.meta?.price ||
                "145"}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-[#4d613e] px-4 py-2 text-xs uppercase"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="mt-10 bg-[#6f8d5c] hover:bg-[#7d9d67] transition px-10 py-4 uppercase font-semibold">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-20 border-t border-[#1d2521] pt-12">

          <h2 className="text-[32px] font-bold uppercase mb-8">
            Product Description
          </h2>

          <div
            className="prose prose-invert max-w-none text-gray-300"
            dangerouslySetInnerHTML={{
              __html: product.content.rendered,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;