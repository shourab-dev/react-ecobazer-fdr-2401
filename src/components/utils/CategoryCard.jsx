import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, url = "" }) => {
  return (
    <div className="bg-white pt-8 pb-6 text-center max-w-[200px] rounded-md border border-gray-300 hover:border-branding-success-dark hover:shadow-lg hover:shadow-branding-success-dark">
      <Link to={url}>
        <img src="/public/images/vegetable.png" alt="" className="mx-auto" />
        <h4 className="mt-5 mb-1.5 text-branding-success-dark text-lg font-medium  leading-relaxed">
          {title}
        </h4>
        <p className="text-gray-500 text-sm font-normal leading-tight">
          165 Products
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
