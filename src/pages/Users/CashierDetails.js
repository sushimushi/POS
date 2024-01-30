import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function CashierDetails() {
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
            Cashier Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Cashiers have access only to billing. Cashier will use PIN to lock
            and unlock their register.
          </span>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
            Once you have cashiers, TheGenie will prompt for a unlock PIN when
            you sign in.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Cashier Name */}
          <div className="my-4">
            <label
              htmlFor="cashierName"
              className="block text-sm font-medium text-gray-600"
            >
              Cashier Name
            </label>
            <Controller
              name="cashierName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="cashierName"
                  type="text"
                  {...field}
                  placeholder="Cashier Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Cashier PIN */}
          <div className="mb-4">
            <label
              htmlFor="cashierPin"
              className="block text-sm font-medium text-gray-600"
            >
              Cashier PIN
            </label>
            <Controller
              name="cashierPin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="cashierPin"
                  type="text"
                  {...field}
                  placeholder="4 Digit Cashier PIN Eg: 1234"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Cashier Register */}
          <div className="mb-4">
            <label
              htmlFor="cashierRegister"
              className="block text-sm font-medium text-gray-600"
            >
              Cashier Register
            </label>
            <Controller
              name="cashierRegister"
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

          {/* Allow manager permissions */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="allowManagerPermissions"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="allowManagerPermissions"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="allowManagerPermissions"
              className="block text-sm font-medium text-gray-600"
            >
              Allow manager permissions
            </label>
          </div>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
}

export default CashierDetails;
