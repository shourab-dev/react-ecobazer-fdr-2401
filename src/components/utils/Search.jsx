import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchProductCard from "./SearchProductCard";
import { IoClose } from "react-icons/io5";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (search.length > 3) {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data));
    }
  };

  const handleClose = (e) => {
    console.log('hellow');
    
    setIsOpen(false);
    setSearchResult(null)
    setSearch("")
  };

  return (
    <>
      <button onClick={()=> setIsOpen(true)} className="cursor-pointer">
        <LuSearch />
      </button>

      <div
        className={`searchBox fixed inset-0 bg-white/60 backdrop-blur-[2px] z-10 lg:p-20 transition-all duration-300 ${
          !isOpen
            ? "translate-y-[100%] opacity-0 invisible"
            : "translate-y-[0%] opacity-100 visible"
        }`}
      >
        <button
          onClick={(e) => handleClose(e)}
          className="absolute top-5 right-10 cursor-pointer"
        >
          <IoClose />
        </button>

        <div className="searchArea">
          <input
          value={search}
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
