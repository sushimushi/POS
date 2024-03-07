import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button } from "@windmill/react-ui";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../apiClient";

function PermissionPreferences() {
  const { register, control, handleSubmit, watch, formState, setValue } =
    useForm();

  const accountId = localStorage.getItem("accountId");

  const { isLoading, data } = useQuery("permissionPreferences", () => {
    return axiosClient.get("/permission-preferences/", {
      params: {
        filter: {
          where: {
            accountId: accountId,
          },
        },
      },
    });
  });

  useEffect(() => {
    if (data) {
      setValue(
        "isCashierAllowedToOfferDiscount",
        data.data[0].isCashierAllowedToOfferDiscount
      );
      setValue(
        "isManagerAllowedToEditEmailAddress",
        data.data[0].isManagerAllowedToEditEmailAddress
      );
      setValue(
        "isShiftSummaryHiddenOnLock",
        data.data[0].isShiftSummaryHiddenOnLock
      );
    }
  }, [data, setValue]);

  const { mutate } = useMutation((formData) => {
    return axiosClient.put("/permission-preferences/" + accountId, formData); // Adjust the endpoint as per your API
  });

  const submitHandler = async (formData) => {
    try {
      const originalFormData = data.data[0];
      formData = { ...originalFormData, ...formData };
      await mutate(formData);
      console.log("Form data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div
      className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:grid grid-cols-[200px,1fr]"
      style={{ gridTemplateColumns: "max(380px) 1fr" }}
    >
      <div className="mt-4 ml-4">
        <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200">
          Permission Preferences
        </h2>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Customize permissions for your Cahiers and Managers.
        </span>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <label
            htmlFor="isCashierAllowedToOfferDiscount"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isCashierAllowedToOfferDiscount"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isCashierAllowedToOfferDiscount")}
            />
            <span className="ml-2">Allow cashiers to offer discounts</span>
          </label>

          <label
            htmlFor="isManagerAllowedToEditEmailAddress"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isManagerAllowedToEditEmailAddress"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isManagerAllowedToEditEmailAddress")}
            />
            <span className="ml-2">
              Allow managers to change email address while requesting reports
            </span>
          </label>

          <label
            htmlFor="isShiftSummaryHiddenOnLock"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isShiftSummaryHiddenOnLock"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isShiftSummaryHiddenOnLock")}
            />
            <span className="ml-2">
              Hide the shift summary link in lock screen
            </span>
          </label>

          <button className="align-bottom inline-flex mt-6 items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default PermissionPreferences;
