import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TabsVerticle from "../../components/TabsVerticle";
import ModalPage from "../../components/Modal";

const TablesData = [
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "In progress" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
  { name: "Table", status: "" },
];

function Tables() {
  const { register, handleSubmit, watch, formState } = useForm();

  // setup data for every tables
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ["All", "Free", "Occupied", "Unpaid"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const submitHandler = (data) => console.log(data);
  return (
    <>
      <div
        className="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800"
        style={{ "min-height": "calc(100vh - 170px)" }}
      >
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "max(100px) 1fr" }}
        >
          <TabsVerticle
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TablesData.map((data) => {
              return (
                <button
                  className="bg-gray-100 p-4 text-center flex flex-col items-center justify-center rounded cursor-pointer"
                >
                  <p>{data.name}</p>
                  {data.status && (
                    <p className="text-gray-500 text-xs">{data.status}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Tables;
