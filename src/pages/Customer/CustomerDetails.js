import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function CustomerDetails() {
  const { register, control, handleSubmit, watch, formState } = useForm();

  const currentDate = new Date();

  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Format the current date
  const formattedDate = dateTimeFormatter.format(currentDate);

  const submitHandler = (data) => console.log(data);
  return (
    <>
      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Customer Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
           Created At {formattedDate}
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Customer Name */}
          <div className="my-4">
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-600"
            >
              Customer Name
            </label>
            <Controller
              name="customerName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="customerName"
                  type="text"
                  {...field}
                  placeholder="Customer Name (2 to 50 characters)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Customer Mobile */}
          <div className="mb-4">
            <label
              htmlFor="customerMobile"
              className="block text-sm font-medium text-gray-600"
            >
              Customer Mobile
            </label>
            <Controller
              name="customerMobile"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="customerMobile"
                  type="text"
                  {...field}
                  placeholder="Customer Mobile"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Customer Email */}
          <div className="mb-4">
            <label
              htmlFor="customerEmail"
              className="block text-sm font-medium text-gray-600"
            >
              Customer Email
            </label>
            <Controller
              name="customerEmail"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="customerEmail"
                  type="text"
                  {...field}
                  placeholder="Customer Email"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Shipping Address */}
          <div className="mb-4">
            <label
              htmlFor="shippingAddress"
              className="block text-sm font-medium text-gray-600"
            >
              Shipping Address
            </label>
            <Controller
              name="shippingAddress"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  id="shippingAddress"
                  {...field}
                  placeholder="Street Address"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* City and Pincode */}
          <div className="grid grid-cols-2 gap-4">
            {/* City */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="city"
                    type="text"
                    {...field}
                    placeholder="City"
                    className="mt-1"
                  />
                )}
              />
            </div>
            {/* Pincode */}
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-600"
              >
                Pincode
              </label>
              <Controller
                name="pincode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id="pincode"
                    type="text"
                    {...field}
                    placeholder="Pincode"
                    className="mt-1"
                  />
                )}
              />
            </div>
          </div>

          <Button className="mb-4 mr-2" type="button">
            Go Back
          </Button>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>

      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Additional Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Update additional details and custom tags.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Test */}
          <div className="my-4">
            <label
              htmlFor="test"
              className="block text-sm font-medium text-gray-600"
            >
              Test
            </label>
            <Controller
              name="test"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="test"
                  type="text"
                  {...field}
                  placeholder="Test"
                  className="mt-1"
                />
              )}
            />
          </div>


          <Button className="mb-4 mr-2" type="button">
            Go Back
          </Button>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>

      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Order Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Last Seen At {formattedDate}
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Test */}
          <div className="my-4">
            <label
              htmlFor="test"
              className="block text-sm font-medium text-gray-600"
            >
              Test
            </label>
            <Controller
              name="test"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="test"
                  type="text"
                  {...field}
                  placeholder="Test"
                  className="mt-1"
                />
              )}
            />
          </div>


          <Button className="mb-4 mr-2" type="button">
            Go Back
          </Button>

          <Button className="mb-4" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
}

export default CustomerDetails;
