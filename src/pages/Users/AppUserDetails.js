import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function AppUserDetails() {
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
            App User Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            App users have access only to TheGenie Apps. An app user will
            require a PIN to lock and unlock the application.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* App User Name */}
          <div className="my-4">
            <label
              htmlFor="appUserName"
              className="block text-sm font-medium text-gray-600"
            >
              App User Name
            </label>
            <Controller
              name="appUserName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="appUserName"
                  type="text"
                  {...field}
                  placeholder="App User Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* App User PIN */}
          <div className="mb-4">
            <label
              htmlFor="appUserPin"
              className="block text-sm font-medium text-gray-600"
            >
              App User PIN
            </label>
            <Controller
              name="appUserPin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="appUserPin"
                  type="text"
                  {...field}
                  placeholder="4 to 6 Digit App User PIN Eg: 1234"
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

export default AppUserDetails;
