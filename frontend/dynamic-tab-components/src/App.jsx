import React, { useState } from 'react';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Default to the 0th index tab

  const tabs = [
    {
      name: "Home",
      content: (
        <div>
          <h3 className="text-2xl font-semibold">Welcome Home!</h3>
          <p>This is the home tab. Clean and minimal design.</p>
        </div>
      ),
    },
    {
      name: "Profile",
      content: (
        <div>
          <h3 className="text-2xl font-semibold">Welcome to your Profile!</h3>
          <p>This is the profile tab. Customize your information here.</p>
        </div>
      ),
    },
    {
      name: "Settings",
      content: (
        <div>
          <h3 className="text-2xl font-semibold">Settings</h3>
          <p>This is the settings tab. Adjust your preferences.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex w-full mb-6 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`py-2 px-4 w-full text-lg font-medium transition-all duration-300 ease-in-out 
              ${selectedTab === index
                ? 'text-blue-500 border-b-4 border-blue-500 font-semibold'
                : 'text-gray-600 hover:text-blue-500 hover:border-b-4 hover:border-blue-500'} 
              focus:outline-none`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white shadow-lg rounded-lg w-full">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default App;
