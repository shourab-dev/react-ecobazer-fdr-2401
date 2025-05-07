import React from "react";
import Banner from "../components/Banner/Banner";
import ProductsGrid from "../components/Products/ProductsGrid";
import CategorySlider from "../components/utils/CategorySlider";

const Homepage = () => {
  return (
    <>
      <Banner />
      <ProductsGrid limit={4} />

      <section id="topCategory" className="py-[80px] my-[80px] bg-gray-200">
        <div className="container">
          <CategorySlider />
        </div>
      </section>
    </>
  );
};

export default Homepage;
