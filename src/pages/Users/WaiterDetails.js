import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function WaiterDetails() {
  const { register, control, handleSubmit, watch, formState } = useForm();

  const submitHandler = (data) => console.log(data);
  return (
    <>
      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Waiter Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Waiters can take table orders using the TheGenie Waiter app. Make
            sure you have contacted admin@thegenie.com and enabled Waiter app
            for your account.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Waiter Name */}
          <div className="my-4">
            <label
              htmlFor="waiterName"
              className="block text-sm font-medium text-gray-600"
            >
              Waiter Name
            </label>
            <Controller
              name="waiterName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="waiterName"
                  type="text"
                  {...field}
                  placeholder="Waiter Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Waiter PIN */}
          <div className="mb-4">
            <label
              htmlFor="waiterPin"
              className="block text-sm font-medium text-gray-600"
            >
              Waiter PIN
            </label>
            <Controller
              name="waiterPin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="waiterPin"
                  type="text"
                  {...field}
                  placeholder="4 to 6 Digit Waiter PIN Eg: 1234"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Waiter Register */}
          <div className="mb-4">
            <label
              htmlFor="waiterRegister"
              className="block text-sm font-medium text-gray-600"
            >
              Waiter Register
            </label>
            <Controller
              name="waiterRegister"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option1">Select a Register</option>
                  <option value="option2">Main Register</option>
                </Select>
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

export default WaiterDetails;
