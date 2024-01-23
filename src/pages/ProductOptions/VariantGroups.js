import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

const variants = [
  { id: "1", name: "donut" },
  { id: "2", name: "chicken" },
];

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
            Setup Variant Group
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Variant groups are used to bunch a set of variants and attach it to
            a product. Only one variant can be chosen from a variant group.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Variant Group Name */}
          <div className="my-4">
            <label
              htmlFor="variantGroupName"
              className="block text-sm font-medium text-gray-600"
            >
              Variant Group Name
            </label>
            <Controller
              name="variantGroupName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="variantGroupName"
                  type="text"
                  {...field}
                  placeholder="Variant Group Name"
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
                  placeholder="Sort Order (optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Select the Variant */}
          <label
            htmlFor="selectTheVariant"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Select the variants
          </label>
          {variants.map((variant) => (
            <div className="mb-2 flex items-center gap-2">
              <Controller
                name={variant.id}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id={variant.id}
                    type="checkbox"
                    {...field}
                    placeholder=""
                    className=""
                  />
                )}
              />
              <label
                htmlFor={variant.id}
                className="block text-sm font-medium text-gray-600"
              >
                {variant.name}
              </label>
            </div>
          ))}
          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
}

export default ProductCategoriesDetails;
