import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function ProductCategoriesDetails() {
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
            Setup Addon
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Create product addons like toppings, group using addon groups and
            attach to products.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Addon Name */}
          <div className="my-4">
            <label
              htmlFor="addonName"
              className="block text-sm font-medium text-gray-600"
            >
              Addon Name
            </label>
            <Controller
              name="addonName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="addonName"
                  type="text"
                  {...field}
                  placeholder="Addon Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Price */}
          <div className="my-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price
            </label>
            <Controller
              name="price"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="price"
                  type="text"
                  {...field}
                  placeholder="Price"
                  className="mt-1"
                />
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

export default ProductCategoriesDetails;
