import React from 'react';
import { IoMdHome, IoMdCard, IoMdHeart, IoMdPerson } from 'react-icons/io';

const BottomMenuBar = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around items-center py-2 z-10">
    <div className="flex flex-col items-center">
      <IoMdHome className="text-2xl text-gray-700" />
    </div>
    <div className="flex flex-col items-center">
      <IoMdCard className="text-2xl text-gray-700" />
    </div>
    <div className="flex flex-col items-center">
      <IoMdHeart className="text-2xl text-gray-700" />
    </div>
    <div className="flex flex-col items-center">
      <IoMdPerson className="text-2xl text-gray-700" />
    </div>
  </div>
);

export default BottomMenuBar;
