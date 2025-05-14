import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Rating from "../components/utils/Rating";

const SingleProduct = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    //   console.log(product && product.rating)
  }, [id]);

  return (
    <div className="container">
      {/* product info */}
      <div className="grid lg:grid-cols-2 mt-6">
        <div className="productSlider grid lg:grid-cols-5 gap-3">
          <div className="lg:col-span-1 col-span-5 max-w-[100vw] thumbnailSlider order-2 lg:order-1">
            <Swiper
              style={{ height: "400px" }}
              direction={"vertical"}
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                700: {
                  direction: "vertical",
                },
              }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {product?.images.map((thumb) => (
                <SwiperSlide key={thumb} className="p-2">
                  <img
                    className="max-w-[85px] rounded-sm opacity-70 block ms-auto"
                    src={thumb}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:col-span-4 max-w-[100vw] order-1 lg:order-2">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                height: "500px",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product?.images.map((main) => (
                <SwiperSlide key={main}>
                  <img className="max-w-[100]" src={main} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="productInfo">
          <h2>{product?.title}</h2>
          <div className="rating">
            {product?.rating && <Rating count={product.rating} />}
            <p>{product?.reviews.length} Review</p>
          </div>
          <p>SKU: {product?.sku}</p>
          <p className="text-zinc-900 text-base font-medium leading-normal">
            $
            {(
              product?.price -
              Math.round(product?.price * (product?.discountPercentage / 100))
            ).toFixed(2)}{" "}
            <del className="text-neutral-400 text-base ">${product?.price}</del>
          </p>
          <p>{product?.discountPercentage} % off</p>
          <p>Brand: {product?.brand}</p>
        </div>
      </div>
      {/* product info ends */}
    </div>
  );
};

export default SingleProduct;
