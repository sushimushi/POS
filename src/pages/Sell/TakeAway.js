import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TabsVerticle from "../../components/TabsVerticle";

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

function TakeAway() {
  const { register, handleSubmit, watch, formState } = useForm();

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
          className=" grid "

          // style={{ gridTemplateColumns: "max(100px) 1fr" }}
        >
          {/* <TabsVerticle
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TablesData.map((data) => {
              return (
                <div class="bg-gray-100 p-4 text-center flex flex-col items-center justify-center">
                  <p>{data.name}</p>
                  {data.status && (
                    <p className="text-gray-500 text-xs">{data.status}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TakeAway;
