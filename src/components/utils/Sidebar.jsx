import React from 'react'
import { MdOutlineClose } from 'react-icons/md';

const Sidebar = ({ heading, children, showSidebar, hideSidebar,position="right" }) => {
  return (
    <div
      onClick={(e) => {
        e.target.classList.contains("sidebar") ? hideSidebar() : false;
      }}
      className={`sidebar fixed inset-0 bg-gray-950/50 z-10 duration-200 transition-all ${
        showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
      } `}
    >
      <div
        className={`sidebarCnt w-full max-w-[350px] bg-white h-screen duration-300 transition-all  ${
          !showSidebar
            ? `translate-x-[${position =='left' ? '-' : '' }100%] opacity-0`
            : "translate-x-[0%] opacity-100"
        } ${position}-0 absolute `}
      >
        {heading && (
          <div className="sidebarHeader text-xl flex justify-between py-4 px-3 border-b border-gray-200">
            {heading}
            <button
              onClick={hideSidebar}
              className="inline-flex items-center gap-3 text-xs"
            >
              <MdOutlineClose /> Close
            </button>
          </div>
        )}

        <div className="sidebarBody px-3">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar
