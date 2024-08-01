import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const SearchBar = () => (
  <div className="mb-8">
    <div className="flex items-center border border-gray-300 rounded-lg p-2">
      <IoMdSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Find things to do"
        className="w-full bg-white border-none outline-none placeholder-gray-500"
      />
    </div>
  </div>
);

export default SearchBar;
