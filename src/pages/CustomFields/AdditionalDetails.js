import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function AdditionalDetails() {
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
          {/* Additional Detail Name */}
          <div className="my-4">
            <label
              htmlFor="additionalDetailName"
              className="block text-sm font-medium text-gray-600"
            >
              Additional Detail Name
            </label>
            <Controller
              name="additionalDetailName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="additionalDetailName"
                  type="text"
                  {...field}
                  placeholder="Additional Detail Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Additional Detail Type */}
          <div className="mb-4">
            <label
              htmlFor="additionalDetailType"
              className="block text-sm font-medium text-gray-600"
            >
              Additional Detail Type
            </label>
            <Controller
              name="additionalDetailType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option1">Select Field Type</option>
                  <option value="option2">Customer Data</option>
                  <option value="option3">Sale Data</option>
                </Select>
              )}
            />
          </div>

          {/* Print this field on receipts */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="printThisFieldOnReceipts"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="printThisFieldOnReceipts"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="printThisFieldOnReceipts"
              className="block text-sm font-medium text-gray-600"
            >
              Print this field on receipts
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

export default AdditionalDetails;
