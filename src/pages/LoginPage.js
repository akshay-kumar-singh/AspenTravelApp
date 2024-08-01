import React from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../assets/cover.jpg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <div className="relative h-screen w-screen">
      <img
        src={coverImage}
        alt="Background"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      <div className="relative flex flex-col justify-between h-full">
        <div className="text-center mt-8 md:mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Aspen</h1>
        </div>
        <div className="text-center mb-8 md:mb-16 flex flex-col items-center">
          <div className="flex flex-col items-start">
            <p className="text-lg md:text-xl text-white">Plan your</p>
            <p className="text-xl md:text-2xl font-bold text-white mb-4">Luxurious Vacation</p>
          </div>
          <button
            onClick={handleExploreClick}
            className="px-16 py-3 bg-blue-500 text-white rounded-lg"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
