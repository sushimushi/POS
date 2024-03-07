import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../apiClient";

function SellingPreferences() {
  const { register, control, handleSubmit, watch, formState, setValue } =
    useForm();

  const accountId = localStorage.getItem("accountId");

  const { isLoading, data } = useQuery("sellingPreferences", () => {
    return axiosClient.get("/selling-preferences/", {
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
      console.log(data);
      setValue("isRoundoffDisabled", data.data[0].isRoundoffDisabled);
      setValue(
        "isQuantityModalPromptEnabled",
        data.data[0].isQuantityModalPromptEnabled
      );
      setValue("isOrderTicketEnabled", data.data[0].isOrderTicketEnabled);
      setValue(
        "isAutoKotEnabledForOrders",
        data.data[0].isAutoKotEnabledForOrders
      );
      setValue("isQuickBillingEnabled", data.data[0].isQuickBillingEnabled);
      setValue("isListViewDefault", data.data[0].isListViewDefault);
      setValue("isSequentialLrnEnforced", data.data[0].isSequentialLrnEnforced);
      setValue(
        "isQuantityIncreaseDecreaseButtonDisabled",
        data.data[0].isQuantityIncreaseDecreaseButtonDisabled
      );
      setValue(
        "isAllAndTopCategoryHidden",
        data.data[0].isAllAndTopCategoryHidden
      );
      setValue("isCustomerDataEnforced", data.data[0].isCustomerDataEnforced);
      setValue("isIncomingOrderEnabled", data.data[0].isIncomingOrderEnabled);
      setValue("isShiftEnforced", data.data[0].isShiftEnforced);
    }
  }, [data, setValue]);

  const { mutate } = useMutation((formData) => {
    return axiosClient.put("/selling-preferences/" + accountId, formData); // Adjust the endpoint as per your API
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
          Selling Preferences
        </h2>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Customize how you sell, enable order tickets / KOTs.
        </span>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <label
            htmlFor="isRoundoffDisabled"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isRoundoffDisabled"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isRoundoffDisabled")}
            />
            <span className="ml-2">Do not roundoff sale total</span>
          </label>

          <label
            htmlFor="isListViewDefault"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isListViewDefault"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isListViewDefault")}
            />
            <span className="ml-2">
              Display items in sell screen as a list instead of grid
            </span>
          </label>

          <label
            htmlFor="isOrderTicketEnabled"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isOrderTicketEnabled"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isOrderTicketEnabled")}
            />
            <span className="ml-2">Enable order ticket / KOT generation</span>
          </label>

          <label
            htmlFor="isAutoKotEnabledForOrders"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isAutoKotEnabledForOrders"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isAutoKotEnabledForOrders")}
            />
            <span className="ml-2">
              Enable automatic order ticket / KOT generation for incoming orders
            </span>
          </label>

          <label
            htmlFor="isQuickBillingEnabled"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isQuickBillingEnabled"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isQuickBillingEnabled")}
            />
            <span className="ml-2">Enable quick billing</span>
          </label>

          <label
            htmlFor="isQuantityIncreaseDecreaseButtonDisabled"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isQuantityIncreaseDecreaseButtonDisabled"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isQuantityIncreaseDecreaseButtonDisabled")}
            />
            <span className="ml-2">
              Hide quantity increase / decrease buttons
            </span>
          </label>

          <label
            htmlFor="isAllAndTopCategoryHidden"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isAllAndTopCategoryHidden"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isAllAndTopCategoryHidden")}
            />
            <span className="ml-2">Hide All and Top categories </span>
          </label>

          <label
            htmlFor="isCustomerDataEnforced"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isCustomerDataEnforced"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isCustomerDataEnforced")}
            />
            <span className="ml-2">Enforce customer mobile number</span>
          </label>

          <label
            htmlFor="isIncomingOrderEnabled"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isIncomingOrderEnabled"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isIncomingOrderEnabled")}
            />
            <span className="ml-2">
              Enable billing only when shift is opened
            </span>
          </label>

          <label
            htmlFor="isShiftEnforced"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isShiftEnforced"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isShiftEnforced")}
            />
            <span className="ml-2">
              Show incoming dine-in orders on waiter app
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

export default SellingPreferences;
