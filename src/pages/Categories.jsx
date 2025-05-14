import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/utils/Breadcrum";
import ProductCard from "../components/utils/ProductCard";

const Categories = () => {
  const { name } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [name]);

  return (
    <div>
      <Breadcrum url={`/categories/${name}`} title={name} />

      <div className="container my-8 grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
