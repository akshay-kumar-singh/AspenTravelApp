
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

const PopularSection = ({ images }) => {
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    navigate(`/details/${image.id}`, { state: { image } });
  };

  const handleSeeAllClick = () => {
    navigate('/popular');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Popular</h2>
        <button
          onClick={handleSeeAllClick}
          className="text-blue-500 hover:underline mr-6"
          style={{ textDecoration: 'none' }}
        >
          See All
        </button>
      </div>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer flex-none w-1/2"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg ">
              <div className="text-lg font-semibold">{image.title}</div>
              <div className="flex items-center space-x-1 text-yellow-400">
                <span>{image.rating}</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
              <AiFillHeart className="text-red-500" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;


