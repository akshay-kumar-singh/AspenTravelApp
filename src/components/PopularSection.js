import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularSection = ({ images }) => {
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    navigate(`/details/${image.id}`, { state: { image } });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Popular</h2>
        <h2 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Show All
        </h2>
      </div>
      <div className="flex overflow-x-scroll space-x-4 py-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer flex-shrink-0"
            style={{ width: 'calc(50% - 1rem)' }}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
              <div className="text-lg font-semibold">{image.title}</div>
              <div className="flex items-center space-x-1 text-yellow-400">
                <span>{image.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
