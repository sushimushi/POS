import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function KitchenUserDetails() {
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
            Kitchen User Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Kitchen users have access only to TheGenie Kitchen Display System
            (KDS) App.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Kitchen User Name */}
          <div className="my-4">
            <label
              htmlFor="kitchenUserName"
              className="block text-sm font-medium text-gray-600"
            >
              Kitchen User Name
            </label>
            <Controller
              name="kitchenUserName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="kitchenUserName"
                  type="text"
                  {...field}
                  placeholder="Kitchen User Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Kitchen User PIN */}
          <div className="mb-4">
            <label
              htmlFor="kitchenUserPin"
              className="block text-sm font-medium text-gray-600"
            >
              Kitchen User PIN
            </label>
            <Controller
              name="kitchenUserPin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="kitchenUserPin"
                  type="text"
                  {...field}
                  placeholder="4 to 6 Digit Kitchen User PIN Eg: 1234"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Kitchen User Register */}
          <div className="mb-4">
            <label
              htmlFor="kitchenUserRegister"
              className="block text-sm font-medium text-gray-600"
            >
              Kitchen User Register
            </label>
            <Controller
              name="kitchenUserRegister"
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

export default KitchenUserDetails;
