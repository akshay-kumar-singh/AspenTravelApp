import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendedSection = ({ images }) => {
  const navigate = useNavigate();

  const handleImageClick = (image) => {
    navigate(`/details/${image.id}`, { state: { image } });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recommended</h2>
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

export default RecommendedSection;


