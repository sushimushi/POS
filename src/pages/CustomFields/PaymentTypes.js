import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function PaymentTypes() {
  const { register, control, handleSubmit, watch, formState } = useForm();

  const submitHandler = (data) => console.log(data);
  return (
    <>
      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr] gap-4"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your Product Category Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Products will be grouped under these categories in the sales
            register.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Product Category Name */}
          <div className="my-4">
            <label
              htmlFor="productCategoryName"
              className="block text-sm font-medium text-gray-600"
            >
              Product Category Name
            </label>
            <Controller
              name="productCategoryName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="productCategoryName"
                  type="text"
                  {...field}
                  placeholder="Product category  name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Order Ticket Group */}
          <div className="mb-4">
            <label
              htmlFor="orderTicketGroup"
              className="block text-sm font-medium text-gray-600"
            >
              Order Ticket Group
            </label>
            <Controller
              name="orderTicketGroup"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="Main Kitchen">Main Kitchen</option>
                  <option value="No Order Ticket">No Order Ticket</option>
                </Select>
              )}
            />
          </div>

          {/* Sort Order */}
          <div className="my-4">
            <label
              htmlFor="sortOrder"
              className="block text-sm font-medium text-gray-600"
            >
              Sort Order
            </label>
            <Controller
              name="sortOrder"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="sortOrder"
                  type="text"
                  {...field}
                  placeholder="Sort Order (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
}

export default PaymentTypes;
