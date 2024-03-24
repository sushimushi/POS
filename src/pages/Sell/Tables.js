import React, { useEffect, useState } from "react";
import TabsVerticle from "../../components/TabsVerticle";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "react-query";
import axiosClient from "../../apiClient";
import { register } from "../../serviceWorker";

function Tables() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRegisterOrders, setCurrentRegisterOrders] = useState("");
  const [currentRegisterId, setCurrentRegisterId] = useState(
    localStorage.getItem("currentRegister")
  );
  const accountId = localStorage.getItem("accountId");

  const tableObjects = [];
  const tabs = ["All", "Free", "Occupied", "Unpaid"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { isLoading: isOrdersLoading, data: ordersData } = useQuery(
    "dine-in",
    () => {
      return axiosClient.get("/orders/", {
        params: {
          filter: {
            where: {
              accountId: accountId,
              registerId: currentRegisterId,
              isRunningOrder: true,
              saleType: "dine-in",
            },
          },
        },
      });
    }
  );

  const { isLoading: isRegisterLoading, data: registerData } = useQuery(
    "registerList",
    async () => {
      return await axiosClient.get("/registers/", {
        params: {
          filter: {
            where: {
              accountId: accountId,
            },
          },
        },
      });
    }
  );

  useEffect(() => {
    if (registerData && ordersData) {
      setCurrentRegisterOrders(() => {
        const register =
          registerData.data.find((register) => {
            return register.registerId === currentRegisterId;
          }) ?? registerData.data[0];
        register.tableStart = parseInt(register.tableNumbers.split("-")[0]);
        register.tableEnd = parseInt(register.tableNumbers.split("-")[1]);



        // creating table objects
        for (let i = register.tableStart; i <= register.tableEnd; i++) {
          const ordersObject = {
            orderId: ,
            tableNumber: i,
            isOccupied: ordersData.data
              .map((data) => data.tableNumber)
              .includes(i.toString()),
            numberOfPeople: 0,
            order: {},
          };
          tableObjects.push(ordersObject);
        }
        return tableObjects;
      });
    }
  }, [registerData, ordersData, currentRegisterId]);

  const createOrder = async (tableNumber) => {
    try {
      const orderObject = {
        registerId: currentRegisterId,
        accountId: accountId,
        isRunningOrder: true,
        tableNumber: tableNumber,
        status: "in-progress",
        paymentStatus: "unpaid",
        fullfillmentStatus: "unpaid",
        saleType: "dine-in",
      };

      const response = await axiosClient.post("/orders/", orderObject);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (isRegisterLoading || isOrdersLoading) {
    return <div>Loading...</div>;
  }

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
            {currentRegisterOrders &&
              currentRegisterOrders.map((data, i) => {
                return (
                  <button
                    type="button"
                    onClick={() =>
                      !data.isOccupied && createOrder(data.tableNumber)
                    }
                  >
                    {console.log(data)}
                    <Link
                      to={"/app/sell/order/" + data.orderId}
                      className={`${
                        data.isOccupied ? "bg-green-200" : "bg-gray-100"
                      } p-4 text-center flex flex-col items-center justify-center rounded cursor-pointer text-gray-700`}
                    >
                      <p>Table {data.tableNumber}</p>
                      {
                        <p className="text-gray-500 text-xs">
                          {data.isOccupied && "In progress"}
                        </p>
                      }
                    </Link>
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
