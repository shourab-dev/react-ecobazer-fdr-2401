import React from "react";

import PrimaryMenu from "../utils/PrimaryMenu";

const MainHeader = () => {
  return (
    <nav>
      <div className="container grid lg:grid-cols-5 ">
        <div className=" lg:col-span-2 menus ">
          <PrimaryMenu />
        </div>
        <div className=" logos ">Lorem ipsum dolor sit amet.</div>
        <div className=" lg:col-span-2 quickLinks">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
