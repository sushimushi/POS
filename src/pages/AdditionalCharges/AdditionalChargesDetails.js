import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function AdditionalChargesDetails() {
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
            Additional Charge Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Delivery charges, parcel charges, service charges etc. can be setup
            as additional charges.
          </span>

          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Additional charges are applied on top of the discounted subtotal.
            Also, additional charges can have taxes.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Additional Charge Name */}
          <div className="my-4">
            <label
              htmlFor="additionalChargeName"
              className="block text-sm font-medium text-gray-600"
            >
              Additional Charge Name
            </label>
            <Controller
              name="additionalChargeName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="additionalChargeName"
                  type="text"
                  {...field}
                  placeholder="Additional Charge Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Additional Charge Type */}
          <div className="mb-4">
            <label
              htmlFor="additionalChargeType"
              className="block text-sm font-medium text-gray-600"
            >
              Additional Charge Type
            </label>
            <Controller
              name="additionalChargeType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">
                    Select Additional Charge Type
                  </option>
                  <option value="option 2">Cash</option>
                  <option value="option 3">Percentage</option>
                </Select>
              )}
            />
          </div>

          {/* Additional Charge Value */}
          <div className="my-4">
            <label
              htmlFor="additionalChargeValue"
              className="block text-sm font-medium text-gray-600"
            >
              Additional Charge Value
            </label>
            <Controller
              name="additionalChargeValue"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="additionalChargeValue"
                  type="text"
                  {...field}
                  placeholder="Additional Charge Value"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Tax Group */}
          <div className="mb-4">
            <label
              htmlFor="taxGroup"
              className="block text-sm font-medium text-gray-600"
            >
              Tax Group
            </label>
            <Controller
              name="taxGroup"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a Tax Group</option>
                  <option value="option 2">Zero Tax Group</option>
                </Select>
              )}
            />
          </div>

          {/* Order Type */}
          <div className="mb-4">
            <label
              htmlFor="orderType"
              className="block text-sm font-medium text-gray-600"
            >
              Order Type
            </label>
            <Controller
              name="orderType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a Type</option>
                  <option value="option 2">All Orders</option>
                  <option value="option 3">Take Away</option>
                  <option value="option 4">Delivery</option>
                  <option value="option 5">Dine In</option>
                </Select>
              )}
            />
          </div>

          {/* Is automatically added */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="isAutomaticallyAdded"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="isAutomaticallyAdded"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="isAutomaticallyAdded"
              className="block text-sm font-medium text-gray-600"
            >
              Is Automatically Added?
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

export default AdditionalChargesDetails;
