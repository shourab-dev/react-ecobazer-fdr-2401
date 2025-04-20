import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchProductCard from "./SearchProductCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (search.length > 3) {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data));
    }
  };

  return (
    <>
      <button className="cursor-pointer">
        <LuSearch />
      </button>

      <div className="searchBox fixed inset-0 bg-white/60 backdrop-blur-[2px] z-10 lg:p-20">
        <div className="searchArea">
          <input
            onChange={(e) => handleSearch(e)}
            type="search"
            className="w-full border-b pb-5 border-gray-400 focus:border-branding-success outline-0"
            placeholder="Search...."
          />
        </div>
        {search.length > 3 && (
          <div className="results grid lg:grid-cols-4">
            {searchResult?.products.length > 0
              ? searchResult?.products.map((product) => (
                  <SearchProductCard product={product} />
                ))
              : "No search results has found!"}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
