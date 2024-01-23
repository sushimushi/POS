import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

const variants = [
  { id: "1", name: "Burger Addons" },
  { id: "2", name: "Cheese Addons" },
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
            Setup Addon Group
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Addon groups are used to bunch a set of addons and attach to a
            product. Multiple addons can be chosen from an addon group.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Addon Group Name */}
          <div className="my-4">
            <label
              htmlFor="addonGroupName"
              className="block text-sm font-medium text-gray-600"
            >
              Addon Group Name
            </label>
            <Controller
              name="addonGroupName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="addonGroupName"
                  type="text"
                  {...field}
                  placeholder="Addon group name"
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

          <div className="grid grid-cols-2 gap-4">
            {/* Min Selectable */}
            <div className="my-4">
              <label
                htmlFor="minSelectable"
                className="block text-sm font-medium text-gray-600"
              >
                Min Selectable
              </label>
              <Controller
                name="minSelectable"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="minSelectable"
                    type="text"
                    {...field}
                    placeholder="Min number of addons (Default 0)"
                    className="mt-1"
                  />
                )}
              />
            </div>
            {/* Max Selectable */}
            <div className="my-4">
              <label
                htmlFor="maxSelectable"
                className="block text-sm font-medium text-gray-600"
              >
                Max Selectable
              </label>
              <Controller
                name="maxSelectable"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="maxSelectable"
                    type="text"
                    {...field}
                    placeholder="Max number of addons"
                    className="mt-1"
                  />
                )}
              />
            </div>
          </div>

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
