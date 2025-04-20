import React from "react";

import PrimaryMenu from "../utils/PrimaryMenu";
import { Link } from "react-router-dom";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Search from "../utils/Search";

const MainHeader = () => {
  return (
    <nav>
      <div className="container grid lg:grid-cols-5 py-5">
        <div className=" lg:col-span-2 menus ">
          <PrimaryMenu />
        </div>
        <div className=" logos ">
          <Link to="/">
            <img src="/public/images/logo.png" alt="" />
          </Link>
        </div>
        <div className=" lg:col-span-2 quickLinks flex justify-end place-items-center gap-10">
          <a
            href="tel:(219) 555-0114"
            className="flex gap-2 place-items-center"
          >
            <span className="text-3xl">
              <PiPhoneCallLight />
            </span>
            (219) 555-0114
          </a>

          <ul className="flex gap-5 text-3xl">
            <li>
              <Search />
            </li>
            <li>
              <Link>
                <FaRegHeart />
              </Link>
            </li>
            <li className="relative">
              <Link>
                <HiOutlineShoppingBag />
                <div className="cartCounter top-0 right-[-3px] border border-white absolute rounded-full w-[18px] h-[18px] bg-branding-success-dark text-[10px] text-white text-center leading-[18px]">
                  2
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <FaRegUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
