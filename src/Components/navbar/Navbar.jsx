import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchedWord } from "../../redux/slicereducer";

const MobileNavbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  //state to display it in searchbar
  const [searchValue , setSearchValue] = useState(""); 
  const dispatch = useDispatch();
  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const searchBarChange = (e) => {
    setSearchValue(e.target.value);
    //this action will take care of the filtering operation
    dispatch(searchedWord(e.target.value));
  };

  return (
    <nav className="sticky top-0 z-50  p-4 navbar font-titillium">
      <div className="flex items-center justify-between">
        {/* Left side: Back button and title */}
        <div className="flex items-center space-x-3">
          <button className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
            {/* Back button icon */}
            <img
              className="w-4 h-4"
              src="https://test.create.diagnal.com/images/Back.png"
            />
          </button>
          <span className="text-white text-[14px] font-titillium ">
            Romantic Comedy
          </span>
        </div>

        {/* Right side: Search icon and search input */}
        <div className="flex items-center space-x-2">
          {/* Search input field */}
          {isSearchVisible && (
             <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => {
                searchBarChange(e);
              }}
              className="block w-32 p-2 text-[10px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
            type="button"
            className="absolute top-[-5px] right-0 p-2 bg-transparent text-gray-500 hover:text-gray-800"
            onClick={() => {
                // Clear the input field
                searchBarChange({ target: { value: "" } });
            }}
        >
            X
        </button>
        </div>
          )}
          {/* Search button */}
          <button
            onClick={handleSearchClick}
            className="text-gray-500 p-2 rounded focus:outline-none "
          >
            <img
              className="w-4 h-4 text-white"
              src="https://test.create.diagnal.com/images/search.png"
            />
          </button>
        </div>
      </div>
    </nav>
    
  );
};

export default MobileNavbar;
