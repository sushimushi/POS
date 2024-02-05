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
            Your Product Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Edit your product details here. Product name should be unique.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Product Name */}
          <div className="my-4">
            <label
              htmlFor="productCategoryName"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name
            </label>
            <Controller
              name="productName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="productName"
                  type="text"
                  {...field}
                  placeholder="Product name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <label
              htmlFor="productCategory"
              className="block text-sm font-medium text-gray-600"
            >
              Product Category
            </label>
            <Controller
              name="productCategory"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="Main Kitchen">General</option>
                </Select>
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
                  <option value="Main Kitchen">Zero Tax Group</option>
                </Select>
              )}
            />
          </div>

          {/* Product Price */}
          <div className="my-4">
            <label
              htmlFor="productPrice"
              className="block text-sm font-medium text-gray-600"
            >
              Sort Order
            </label>
            <Controller
              name="productPrice"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="productPrice"
                  type="text"
                  {...field}
                  placeholder="Product Price"
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

      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr] gap-4"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Product Options
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            You can add one ore more variant groups and an add-on group to the
            product.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Product Name */}
          <div className="my-4">
            <label
              htmlFor="productCategoryName"
              className="block text-sm font-medium text-gray-600"
            >
              Product Name
            </label>
            <Controller
              name="productName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="productName"
                  type="text"
                  {...field}
                  placeholder="Product name"
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

      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr] gap-4"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Product Additional Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Additional details about the product.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Unit of Measure */}
          <div className="my-4">
            <label
              htmlFor="unitOfMeasure"
              className="block text-sm font-medium text-gray-600"
            >
              Unit of Measure
            </label>
            <Controller
              name="unitOfMeasure"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="unitOfMeasure"
                  type="text"
                  {...field}
                  placeholder="Unit of Measure (optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Product Code */}
          <div className="my-4">
            <label
              htmlFor="productCode"
              className="block text-sm font-medium text-gray-600"
            >
              Product Code
            </label>
            <Controller
              name="productCode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="productCode"
                  type="text"
                  {...field}
                  placeholder="Product Code (optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Notes */}
          <div className="my-4">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-600"
            >
              Notes
            </label>
            <Controller
              name="notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="notes"
                  type="text"
                  {...field}
                  placeholder="Notes (optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Limit to Register */}
          <div className="mb-4">
            <label
              htmlFor="limitToRegister"
              className="block text-sm font-medium text-gray-600"
            >
              Limit to Register
            </label>
            <Controller
              name="limitToRegister"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="Main Kitchen">All Register</option>
                </Select>
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
                  type="number"
                  {...field}
                  placeholder="Sort Order"
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
