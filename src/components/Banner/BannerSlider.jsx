import React from "react";
import { Link } from "react-router-dom";
const BannerSlider = () => {
  return (
    <div className=" lg:h-[640px] bannerBg ">
      <div className="container grid lg:grid-cols-2 h-full items-center">
        <div className="bannerImg">
          <img src="/public/images/Image.png" className=" max-w-full mx-auto" alt="" />
        </div>
        <div className="bannerCnt px-3">
          <h4 className="font-medium text-sm leading-full tracking-[0.02rem] uppercase  text-branding-success">Welcome to shopery</h4>
          <h2 className="font-semibold text-4xl lg:text-[72px] leading-[120%] text-gray-900 lg:mt-2 lg:mb-7">Fresh & Healthy Organic Food</h2>
          <h3>
            Sale up to <span className="discount">30%</span> OFF
          </h3>
          <p>Free shipping on all your order. we deliver, you enjoy</p>
          <Link className="btn lg:mt-8" to="/">Shop Now </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
