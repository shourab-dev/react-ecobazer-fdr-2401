import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <Swiper
      className="relative"
      pagination={true}
      navigation={{
        enabled: true,
        prevEl: ".prevArrow",
        nextEl: ".nextArrow",
      }}
      loop={true}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      
    >
      <div className="prevArrow lg:inline-flex hidden">
        <FiArrowLeft />
      </div>
      <div className="nextArrow lg:inline-flex hidden">
        <FiArrowRight />
      </div>
      <SwiperSlide>
        <BannerSlider />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlider />
      </SwiperSlide>
      <SwiperSlide>
        <BannerSlider />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
