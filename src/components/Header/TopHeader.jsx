import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Select from "../utils/Select";
const TopHeader = () => {
  const languages = [
    { value: "en", label: "Eng" },
    { value: "bn", label: "Bn" },
    { value: "es", label: "Esp" },
    { value: "fr", label: "Fra" },
  ];
  const currencies = [
    { value: "usd", label: "USD" },
    { value: "bdt", label: "BDT" },
    { value: "ru", label: "In" },
  ];

  return (
    <div className="bg-gren-gray-scale-50">
      <div className="container hidden lg:grid grid-cols-2 py-3">
        <div className="location">
          <p className="flex gap-2 items-center text-xs text-gren-gray-scale-700">
            <span className="text-xl">
              <CiLocationOn />
            </span>
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div className="details flex justify-end gap-5">
          <Select options={languages} />
          <Select options={currencies} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
