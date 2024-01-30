import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function PettyCashCategories() {
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
            Setup Custom Fields
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            You can setup custom fields like Payment Types, Petty Cash
            Categories, Receipt Additional Details and Tags.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Petty Cash Category Name */}
          <div className="my-4">
            <label
              htmlFor="pettyCashCategoryName"
              className="block text-sm font-medium text-gray-600"
            >
              Petty Cash Category Name
            </label>
            <Controller
              name="pettyCashCategoryName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="pettyCashCategoryName"
                  type="text"
                  {...field}
                  placeholder="Petty Cash Category Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Description */}
          <div className="my-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="description"
                  type="text"
                  {...field}
                  placeholder="Description (Optional)"
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

export default PettyCashCategories;
