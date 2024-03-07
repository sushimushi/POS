import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button } from "@windmill/react-ui";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../apiClient";

function PrintingPreferences() {
  const { register, control, handleSubmit, watch, formState, setValue } =
    useForm();

  const accountId = localStorage.getItem("accountId");

  const { isLoading, data } = useQuery("printingPreferences", () => {
    return axiosClient.get("/printing-preferences", {
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
        "isReceiptPrintedBeforePayment",
        data.data[0].isReceiptPrintedBeforePayment
      );
      setValue(
        "isProductNotesPrintedOnReceipt",
        data.data[0].isProductNotesPrintedOnReceipt
      );
      setValue(
        "isProductTaxRateNotPrintedOnReceipt",
        data.data[0].isProductTaxRateNotPrintedOnReceipt
      );
      setValue("isLargerFontKot", data.data[0].isLargerFontKot);
      setValue(
        "isReceiptDetailsPrintedOnKot",
        data.data[0].isReceiptDetailsPrintedOnKot
      );
      setValue("isServerCopyPrinted", data.data[0].isServerCopyPrinted);
      setValue("isPOSFooterNotPrinted", data.data[0].isPOSFooterNotPrinted);
      setValue("isDisablePrintCopy", data.data[0].isDisablePrintCopy);
      setValue(
        "isOrderTicketNumberPrintedOnReceipt",
        data.data[0].isOrderTicketNumberPrintedOnReceipt
      );
      setValue(
        "isReceiptNotPrintedForOrders",
        data.data[0].isReceiptNotPrintedForOrders
      );
    }
  }, [data, setValue]);

  const { mutate } = useMutation((formData) => {
    return axiosClient.put("/printing-preferences/" + accountId, formData); // Adjust the endpoint as per your API
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
          Printing Preferences
        </h2>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Customize how you print receipts and order tickets. Make sure the
          register is setup to allow printing.
        </span>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit(submitHandler)}>
          <label
            htmlFor="isReceiptPrintedBeforePayment"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isReceiptPrintedBeforePayment"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isReceiptPrintedBeforePayment")}
            />
            <span className="ml-2">
              Print receipt first, then accept payment
            </span>
          </label>

          <label
            htmlFor="isProductNotesPrintedOnReceipt"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isProductNotesPrintedOnReceipt"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isProductNotesPrintedOnReceipt")}
            />
            <span className="ml-2">Print product notes in the receipt</span>
          </label>

          <label
            htmlFor="isReceiptNotPrintedForOrders"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isReceiptNotPrintedForOrders"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isReceiptNotPrintedForOrders")}
            />
            <span className="ml-2">
              Do not print copy of receipt and order tickets
            </span>
          </label>

          <label
            htmlFor="isOrderTicketNumberPrintedOnReceipt"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isOrderTicketNumberPrintedOnReceipt"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isOrderTicketNumberPrintedOnReceipt")}
            />
            <span className="ml-2">
              Print order ticket / KOT number in the receipt
            </span>
          </label>

          <label
            htmlFor="isServerCopyPrinted"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isServerCopyPrinted"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isServerCopyPrinted")}
            />
            <span className="ml-2">
              Print server copy of order ticket / KOT
            </span>
          </label>

          <label
            htmlFor="isPOSFooterNotPrinted"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isPOSFooterNotPrinted"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isPOSFooterNotPrinted")}
            />
            <span className="ml-2">Print register name on receipt</span>
          </label>

          <label
            htmlFor="isServerCopyPrinted"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isServerCopyPrinted"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isServerCopyPrinted")}
            />
            <span className="ml-2">
              Print settlement bill after accepting payment
            </span>
          </label>

          <label
            htmlFor="isProductTaxRateNotPrintedOnReceipt"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isProductTaxRateNotPrintedOnReceipt"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isProductTaxRateNotPrintedOnReceipt")}
            />
            <span className="ml-2">
              Do not print tax rates against each product
            </span>
          </label>

          <label
            htmlFor="isLargerFontKot"
            className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
          >
            <input
              type="checkbox"
              id="isLargerFontKot"
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
              {...register("isLargerFontKot")}
            />
            <span className="ml-2">Large KOT font for better visibility</span>
          </label>

          <button className="align-bottom inline-flex mt-6 items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default PrintingPreferences;
