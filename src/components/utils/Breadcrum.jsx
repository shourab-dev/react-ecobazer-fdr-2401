import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Breadcrum = ({url, title}) => {
  return (
    <div className="bg-[url('/public/images/breadcrumbs.png')] py-[48px]">
      <div className="container text-white flex gap-2 items-center">
        <Link to="/">Home</Link>
        <MdOutlineKeyboardArrowRight />
        <Link to={url} className="text-branding-success capitalize">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrum;
