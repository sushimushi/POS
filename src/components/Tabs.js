import React from "react";

function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b-2 dark:border-gray-600">
        <nav className="flex">
          {tabs.map((item, key) => (
            <button
              key={key}
              onClick={() => setActiveTab(item)}
              className={`text-gray-600 py-3 px-4 block font-semibold hover:black dark:hover:text-white focus:outline-none  ${
                activeTab === item &&
                "black dark:text-white border-b-2 border-black font-semibold dark:border-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Tabs;
