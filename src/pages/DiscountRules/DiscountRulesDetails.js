import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function DiscountRulesDetails() {
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
            Discount Rule Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Choose the type of discount rule you want to create. Discount rules
            are identified by a unique coupon code.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Coupon Code */}
          <div className="my-4">
            <label
              htmlFor="couponCode"
              className="block text-sm font-medium text-gray-600"
            >
              Coupon Name
            </label>
            <Controller
              name="couponCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="couponCode"
                  type="text"
                  {...field}
                  placeholder="Discount Coupon Code"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Discount Type */}
          <div className="mb-4">
            <label
              htmlFor="discountType"
              className="block text-sm font-medium text-gray-600"
            >
              Discount Type
            </label>
            <Controller
              name="discountType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a type</option>
                  <option value="option 2">Fixed Amount</option>
                  <option value="option 3">Percentage</option>
                  <option value="option 4">Buy X Get Y</option>
                </Select>
              )}
            />
          </div>

          {/* Level */}
          <div className="mb-4">
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-600"
            >
              Level
            </label>
            <Controller
              name="level"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a level</option>
                  <option value="option 2">Order</option>
                  <option value="option 3">Product</option>
                </Select>
              )}
            />
          </div>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>

      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr] gap-4"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Discount Visibility
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Set the time period when the discount rule is active. Two column
            layout for start and end date.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Coupon Code */}
          <div className="my-4">
            <label
              htmlFor="couponCode"
              className="block text-sm font-medium text-gray-600"
            >
              Coupon Name
            </label>
            <Controller
              name="couponCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="couponCode"
                  type="text"
                  {...field}
                  placeholder="Discount Coupon Code"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Discount Type */}
          <div className="mb-4">
            <label
              htmlFor="discountType"
              className="block text-sm font-medium text-gray-600"
            >
              Discount Type
            </label>
            <Controller
              name="discountType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a type</option>
                  <option value="option 2">Fixed Amount</option>
                  <option value="option 3">Percentage</option>
                  <option value="option 4">Buy X Get Y</option>
                </Select>
              )}
            />
          </div>

          {/* Level */}
          <div className="mb-4">
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-600"
            >
              Level
            </label>
            <Controller
              name="level"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a level</option>
                  <option value="option 2">Order</option>
                  <option value="option 3">Product</option>
                </Select>
              )}
            />
          </div>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>

      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr] gap-4"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Discount Conditions
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Select the conditions required for the discount rule to be applied.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Coupon Code */}
          <div className="my-4">
            <label
              htmlFor="couponCode"
              className="block text-sm font-medium text-gray-600"
            >
              Coupon Name
            </label>
            <Controller
              name="couponCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="couponCode"
                  type="text"
                  {...field}
                  placeholder="Discount Coupon Code"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Discount Type */}
          <div className="mb-4">
            <label
              htmlFor="discountType"
              className="block text-sm font-medium text-gray-600"
            >
              Discount Type
            </label>
            <Controller
              name="discountType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a type</option>
                  <option value="option 2">Fixed Amount</option>
                  <option value="option 3">Percentage</option>
                  <option value="option 4">Buy X Get Y</option>
                </Select>
              )}
            />
          </div>

          {/* Level */}
          <div className="mb-4">
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-600"
            >
              Level
            </label>
            <Controller
              name="level"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option 1">Select a level</option>
                  <option value="option 2">Order</option>
                  <option value="option 3">Product</option>
                </Select>
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

export default DiscountRulesDetails;
