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
            Setup Variant
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Create product variants for sizes, flavours etc.
          </span>

          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            For example, create variants Small, Medium & Large and group them under a variant group
            called Size.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Variant Name */}
          <div className="my-4">
            <label
              htmlFor="variantName"
              className="block text-sm font-medium text-gray-600"
            >
              Variant Name
            </label>
            <Controller
              name="variantName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="variantName"
                  type="text"
                  {...field}
                  placeholder="Variant Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Variant Comment */}
          <div className="my-4">
            <label
              htmlFor="variantComment"
              className="block text-sm font-medium text-gray-600"
            >
              Variant Name
            </label>
            <Controller
              name="variantComment"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="variantComment"
                  type="text"
                  {...field}
                  placeholder="Comment (optional)"
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
