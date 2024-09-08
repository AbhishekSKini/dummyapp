import React, { useState } from 'react';

const MobileNavbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        {/* Left side: Back button and title */}
        <div className="flex items-center space-x-3">
          <button className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
            {/* Back button icon */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m7 7-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-white text-[14px] font-titillium ">
            Romantic Comedy
          </span>
        </div>

        {/* Right side: Search icon and search input */}
        <div className="flex items-center space-x-2">
          {/* Search input field */}
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search..."
              className="block w-32 p-2 text-[10px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
          {/* Search button */}
          <button
            onClick={handleSearchClick}
            className="text-gray-500 p-2 rounded focus:outline-none "
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0-4.28a7 7 0 1 1 0-9.9 7 7 0 0 1 0 9.9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
