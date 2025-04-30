import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="productCard border border-gray-300 rounded-lg">
      <div className="productThumb">
        <Link>
          <img
            src="/public/images/productpng.png"
            className="max-w-full mx-auto bg-white"
            alt=""
          />
        </Link>
      </div>
      <div className="productCnt p-4 relative">
        <Link className="text-neutral-600 text-sm font-normal leading-tight">
          Green Apple
        </Link>
        <p className="text-zinc-900 text-base font-medium leading-normal">
          $14.99 <del className="text-neutral-400 text-base ">$20.99</del>
        </p>

        <Link className="absolute top-1/2 right-5 bg-gray-300 w-10 h-10 flex justify-center items-center rounded-full translate-y-[-50%]">
          <FiShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
