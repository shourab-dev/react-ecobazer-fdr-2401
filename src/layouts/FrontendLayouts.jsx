import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/Header/TopHeader";
import MainHeader from "../components/Header/MainHeader";
import Footer from "../components/Footer/Footer";
const FrontendLayouts = () => {
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontendLayouts;
