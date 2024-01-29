import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function RegisterDetails() {
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
            Setup Taxes and Tax Groups
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Create separate taxes for different tax rates and types.
          </span>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
            One or more taxes can be grouped under a tax group and applied to
            products.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Tax Name */}
          <div className="my-4">
            <label
              htmlFor="taxName"
              className="block text-sm font-medium text-gray-600"
            >
              Tax Name
            </label>
            <Controller
              name="taxName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="taxName"
                  type="text"
                  {...field}
                  placeholder="Tax Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Tax Percent */}
          <div className="mb-4">
            <label
              htmlFor="taxPercent"
              className="block text-sm font-medium text-gray-600"
            >
              Tax Percent
            </label>
            <Controller
              name="taxPercent"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="taxPercent"
                  type="text"
                  {...field}
                  placeholder="Tax Percentage"
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

export default RegisterDetails;
