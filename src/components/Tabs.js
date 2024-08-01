import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="mb-8">
    <div className="flex space-x-4">
      {['location', 'hotels', 'foods', 'adventure'].map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  </div>
);

export default Tabs;
