import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Input, Button } from "@windmill/react-ui";

const ProductData = [
  { name: "Burger", price: "100.00" },
  { name: "Pizza", price: "100.00" },
  { name: "Biryani", price: "100.00" },
  { name: "Dahi", price: "100.00" },
  { name: "Mango Shake", price: "100.00" },
  { name: "DBC", price: "100.00" },
  { name: "Burger", pice: "100.00" },
  { name: "Pizza", price: "100.00" },
  { name: "Biryani", price: "100.00" },
  { name: "Dahi", price: "100.00" },
  { name: "Mango Shake", price: "100.00" },
  { name: "DBC", price: "100.00" },
  { name: "Burger", pice: "100.00" },
  { name: "Pizza", price: "100.00" },
  { name: "Biryani", price: "100.00" },
  { name: "Dahi", price: "100.00" },
  { name: "Mango Shake", price: "100.00" },
  { name: "DBC", price: "100.00" },
  { name: "Burger", pice: "100.00" },
  { name: "Pizza", price: "100.00" },
  { name: "Biryani", price: "100.00" },
  { name: "Dahi", price: "100.00" },
  { name: "Mango Shake", price: "100.00" },
  { name: "DBC", price: "100.00" },
  { name: "Burger", pice: "100.00" },
  { name: "Pizza", price: "100.00" },
  { name: "Biryani", price: "100.00" },
  { name: "Dahi", price: "100.00" },
  { name: "Mango Shake", price: "100.00" },
  { name: "DBC", price: "100.00" },
  { name: "Burger", pice: "100.00" },
  { name: "Pizza", price: "100.00" },
  { name: "Biryani", price: "100.00" },
  { name: "Dahi", price: "100.00" },
  { name: "Mango Shake", price: "100.00" },
  { name: "DBC", price: "100.00" },
  { name: "Vanilla Ice Cream", price: "100.00" },
];

function Order() {
  const { register, control, handleSubmit, watch, formState } = useForm();
  const [orderData, setOrderData] = useState([]);

  return (
    <div className="px-4 py-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:grid grid-cols-[200px,1fr]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="">
            <Controller
              name="searchItem"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="searchItem"
                  type="text"
                  {...field}
                  placeholder="Search items"
                  className="mb-4 "
                />
              )}
            />
          </div>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {ProductData.map((data, i) => {
              return (
                <Link
                  to={"/app/sell/order/" + i}
                  className="bg-gray-100 p-4 text-center flex flex-col items-center justify-center rounded cursor-pointer"
                >
                  <p>{data.name}</p>
                  {data.price && (
                    <p className="text-gray-500 text-xs">{data.price}</p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-gray-100 rounded px-4 py-2">
            <div className="my-2">
              <Controller
                name="registerName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="registerName"
                    type="text"
                    {...field}
                    placeholder="Customer Mobile Number (F8)"
                    className=""
                  />
                )}
              />
            </div>
            <div>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th
                      className="text-xs font-semibold text-left"
                      width="auto"
                    >
                      Item
                    </th>
                    <th
                      className="text-xs font-semibold text-left"
                      width="80px"
                    >
                      Quality
                    </th>
                    <th
                      className="text-xs font-semibold text-left"
                      width="60px"
                    >
                      Price
                    </th>
                    <th
                      className="text-xs font-semibold text-left"
                      width="20px"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {orderData && (
                    <>
                      <tr>
                        <td className="text-xs text-left pt-1">burger</td>
                        <td className="text-xs text-left pt-1">$100</td>
                        <td className="text-xs text-left pt-1">
                          <OrderItem />
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
              {!orderData && (
                <p className="text-xs pb-8 pt-2">
                  Add items by selecting from the list. If you want to remove
                  this saved draft, click clear.
                </p>
              )}
              {orderData && (
                <div className="text-center">
                  <button className="text-blue-500 font-semibold text-xs mb-2">
                    Bulk Discount
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="mb-4" type="submit">
                Order Ticket
              </Button>
              <Button className="mb-4" type="submit">
                Charge {}
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Order;

const OrderItem = (OrderCount) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-between">
      <button className="bg-gray-300 rounded p-1" onClick={decrement}>
        -
      </button>
      <span className="">{count}</span>
      <button className="bg-gray-300 rounded p-1" onClick={increment}>
        +
      </button>
    </div>
  );
};
