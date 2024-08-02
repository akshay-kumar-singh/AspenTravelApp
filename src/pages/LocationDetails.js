import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdWifi, IoMdRestaurant, IoMdWater, IoMdTrophy, IoMdArrowForward } from 'react-icons/io'; 
import { AiFillHeart } from 'react-icons/ai'; 

const LocationDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { image } = location.state || { image: {} };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4">
      {image.src && (
        <div className="relative">
          <img src={image.src} alt={image.alt} className="w-full h-96 object-cover" />
          <button 
            className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md"
            onClick={() => window.history.back()}
          >
            <span className="text-gray-700 text-xl">&#8592;</span> 
          </button>
          <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 mt-4">
            <AiFillHeart className="text-red-500 " size={24} />
          </div>
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-3xl font-bold">{image.title}</h1>
        <button className="text-blue-500 hover:underline">
          Show map
        </button>
      </div>
      <div className="flex items-center space-x-1 text-yellow-400 mt-2">
        <span className="text-xl">&#9733;</span> 
        <span>{image.rating}</span>
        <span className="text-gray-600">({image.reviews} reviews)</span>
      </div>
      <p className={`mt-4 text-gray-700 ${isExpanded ? '' : 'line-clamp-2'}`}>
        Nestled in the heart of Aspen, Alley Palace offers a luxurious retreat with breathtaking mountain views and exquisite amenities. Perfect for those seeking both adventure and relaxation, this destination promises an unforgettable experience with world-class dining and thrilling outdoor activities.
      </p>
      <button 
        className="text-blue-500 hover:underline flex items-center mt-2"
        onClick={handleReadMoreClick}
      >
        {isExpanded ? 'Read less' : 'Read more'}
        <IoMdArrowDropdown className={`ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <IoMdWifi className="text-gray-600 text-2xl" />
            <span className="text-gray-700">Wifi</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <IoMdRestaurant className="text-gray-600 text-2xl" />
            <span className="text-gray-700">Dinner</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <IoMdWater className="text-gray-600 text-2xl" />
            <span className="text-gray-700">Pool</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
            <IoMdTrophy className="text-gray-600 text-2xl" />
            <span className="text-gray-700">Tub</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className='flex'>
        <h2 className="text-2xl font-semibold mb-4">Price</h2>
        <button 
            className="ml-auto flex items-center bg-blue-500 text-white px-8 py-2  rounded-lg shadow-md hover:bg-blue-600"
          >
           
            Book Now
            <IoMdArrowForward className="mr-2 text-lg" />
          </button>
          </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex space-x-4">
            <span className="text-2xl font-bold">${image.price}</span>
            <span className="text-2xl font-bold"></span>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
 