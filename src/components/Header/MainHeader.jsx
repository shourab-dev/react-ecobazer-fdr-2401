import React, { useState } from "react";

import PrimaryMenu from "../utils/PrimaryMenu";
import { Link } from "react-router-dom";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import Search from "../utils/Search";
import Sidebar from "../utils/Sidebar";

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMobileNav = () => {
    setShowMenu(true);
  };
  const hideMobileNav = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="container grid grid-cols-5 py-5 items-center px-5 lg:px-0">
        <div className="col-span-1 lg:col-span-2 menus ">
          <div className="hidden lg:block">
            <PrimaryMenu />
          </div>
          <div className="lg:hidden text-2xl">
            <button onClick={showMobileNav}>
              <HiMenuAlt3 />
            </button>

            <Sidebar
              position="left"
              hideSidebar={hideMobileNav}
              showSidebar={showMenu}
              heading="Shopping Cart"
            >
              <PrimaryMenu />
            </Sidebar>
          </div>
        </div>
        <div className=" logos col-span-3 lg:col-span-1 ">
          <Link to="/">
            <img src="/public/images/logo.png" className="mx-auto" alt="" />
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2 quickLinks flex justify-end place-items-center gap-10">
          <a
            href="tel:(219) 555-0114"
            className="lg:flex gap-2 place-items-center hidden "
          >
            <span className="text-3xl">
              <PiPhoneCallLight />
            </span>
            (219) 555-0114
          </a>

          <ul className="flex gap-5 lg:text-3xl text-2xl">
            <li>
              <Search />
            </li>
            <li className="hidden lg:inline-block">
              <Link>
                <FaRegHeart />
              </Link>
            </li>
            <li className="relative">
              <Link>
                <HiOutlineShoppingBag />
                <div className="cartCounter top-0 right-[-3px] border border-white absolute rounded-full w-[15px] lg:w-[18px] h-[15px] lg:h-[18px] bg-branding-success-dark text-[10px] text-white text-center lg:leading-[18px] leading-[15px]">
                  2
                </div>
              </Link>
            </li>
            <li className="hidden lg:inline-block">
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
