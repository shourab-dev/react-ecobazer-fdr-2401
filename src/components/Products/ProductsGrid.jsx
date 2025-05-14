import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import { useDispatch } from "react-redux";
import { storeProducts } from "../../features/productSlice";

const ProductsGrid = ({ limit = 4 }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=50`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        dispatch(storeProducts(data));
      });
  }, []);

  return (
    <section id="featuredProducts">
      <div className="container grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
