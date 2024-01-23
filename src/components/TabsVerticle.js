import React from "react";

function TabsVerticle({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="">
      <nav className="flex flex-col">
        {tabs.map((item, key) => (
          <button
            key={key}
            onClick={() => setActiveTab(item)}
            className={`text-gray-600 text-sm text-left py-2 block hover:black dark:hover:text-white focus:outline-none p-2 ${
              activeTab === item && "text-blue-500 bg-blue-50 rounded"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default TabsVerticle;
