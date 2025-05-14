import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard border border-gray-300 rounded-lg">
      <div className="productThumb relative">
        <Link to={`/product/${product.id}`}>
          <p className="bg-branding-error text-white py-[3px] px-2 inline-block rounded-sm top-4 left-4 absolute text-sm">
            Save {product.discountPercentage} %
          </p>
          <img
            loading="lazy"
            src={product.thumbnail}
            className="max-w-full mx-auto bg-white"
            alt=""
          />
        </Link>
      </div>
      <div className="productCnt p-4 relative">
        <Link
          to={`/product/${product.id}`}
          className="text-neutral-600 text-sm font-normal leading-tight"
        >
          {product.title}
        </Link>
        <p className="text-zinc-900 text-base font-medium leading-normal">
          $
          {(
            product.price -
            Math.round(product.price * (product.discountPercentage / 100))
          ).toFixed(2)}{" "}
          <del className="text-neutral-400 text-base ">${product.price}</del>
        </p>
        <Rating count={product.rating} />
        <Link className="absolute top-1/2 right-5 bg-gray-300 w-10 h-10 flex justify-center items-center rounded-full translate-y-[-50%]">
          <FiShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
