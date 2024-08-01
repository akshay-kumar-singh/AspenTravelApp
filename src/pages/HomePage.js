import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import PopularSection from '../components/PopularSection';
import RecommendedSection from '../components/RecommendedSection';
import BottomMenuBar from '../components/BottomMenuBar';

import place1 from '../assets/place1.jpg';
import place2 from '../assets/place2.jpg';
import place3 from '../assets/place3.jpg';
import place4 from '../assets/place4.jpg';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('location');

  const images = [
    { id: 1, src: place1, alt: 'Newyork', title: 'NewYork',price:'1999', rating: '4.5' , reviews:'155', description:'Aspen Palace offers a luxurious retreat with breathtaking mountain views and exquisite amenities.' },
    { id: 2, src: place2, alt: 'France', title: 'France',price:'1599', rating: '4.2',reviews:'1515',description:'Aspen Palace offers a luxurious retreat with breathtaking mountain views and exquisite amenities.' },
    { id: 3, src: place3, alt: 'Europe', title: 'Europe',price:'2999', rating: '4.7', reviews:'541',description:'Aspen Palace offers a luxurious retreat with breathtaking mountain views and exquisite amenities.' },
    { id: 4, src: place4, alt: 'Ladakh', title: 'Ladakh',price:'2599', rating: '4.9', reviews:'954',description:'Aspen Palace offers a luxurious retreat with breathtaking mountain views and exquisite amenities.' },
  ];

  return (
    <div className="px-4 py-4">
      <Header />
      <SearchBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'location' && (
        <>
          <PopularSection images={images} />
          <RecommendedSection images={images} />
        </>
      )}
       {activeTab === 'hotels' && (
        <>
         Welcome to hotel page
        </>
      )}
      <BottomMenuBar />
    </div>
  );
};

export default HomePage;
