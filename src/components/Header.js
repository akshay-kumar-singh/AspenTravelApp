import React from 'react';
import { IoMdPin } from 'react-icons/io';

const Header = () => (
  <div className="flex justify-between items-center mb-8">
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-4xl font-bold">Aspen</h1>
      <h1 className="text-3xl md:text-5xl font-bold">Explore</h1>
    </div>
    <div className="flex items-center space-x-1">
      <IoMdPin className="text-xl text-gray-700 bg-white p-1 rounded" />
      <span className="text-lg"></span>
      <select className="border p-1 rounded bg-white text-gray-700 text-sm w-32">
        <option>Aspen,USA</option>
        <option>Aspen,India</option>
        <option>Aspen,Japan</option>
        <option>AspenFrance</option>
      </select>
    </div>
  </div>
);

export default Header;
