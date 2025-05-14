import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setProductCategory } from "../../features/categorySlice";

const PrimaryMenu = () => {
  const [menus, setMenus] = useState([
    { id: 1, name: "Home", path: "/" },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
      subMenus: null,
    },
    { id: 3, name: "Blogs", path: "/blogs" },
    { id: 4, name: "Contact", path: "/contact" },
  ]);

  const dispatch = useDispatch();

  useEffect(()=>{
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then(res=>{
        const newMenus = [...menus];
        newMenus[1].subMenus = res
        setMenus(newMenus)
        dispatch(setProductCategory(res));
      });
  }, [])

  return (
    <ul className="primaryMenu lg:flex gap-7">
      {menus.map((menu) => (
        <li key={menu.id} className="relative group">
          <NavLink
            className="font-medium text-sm text-gray-scale-gray--500 hover:text-gray-scale-gray--900"
            to={menu.path}
          >
            {menu.name}
          </NavLink>
          {menu.subMenus && (
            <ul className="subMenu group-hover:opacity-100 group-hover:visible mt-5 group-hover:mt-0 transition-all duration-300  opacity-0 invisible absolute z-10 bg-white py-4 px-5 border border-gray-300 min-w-[200px]">
              {menu.subMenus.map((item) => (
                <li key={item.slug} className="my-2">
                  <NavLink
                    to={`/category/${item.slug}`}
                    className="hover:text-branding-success text-sm font-medium text-gray-400 hover:pl-2 transition-all duration-200"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PrimaryMenu;
