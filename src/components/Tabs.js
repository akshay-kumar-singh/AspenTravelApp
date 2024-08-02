import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Location', 'Hotels', 'Foods', 'Adventure'];

  return (
    <div className="flex justify-around mt-4 mb-4">
      {tabs.map((tab) => (
        <span
          key={tab}
          onClick={() => setActiveTab(tab.toLowerCase())}
          className={`cursor-pointer text-lg px-4 py-2 rounded-full ${
            activeTab === tab.toLowerCase()
              ? 'text-blue-500 bg-gray-200 font-semibold'
              : 'text-gray-500'
          }`}
          style={{ textDecoration: 'none' }} 
        >
          {tab}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
