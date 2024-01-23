import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PrintingPreferences() {
  const { register, handleSubmit, watch, formState } = useForm();

  const submitHandler = (data) => console.log(data);
  return (
    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:grid grid-cols-[200px,1fr]"
    style={{ gridTemplateColumns: "max(380px) 1fr" }}>
      <div className="mt-4 ml-4">
        <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200">
          Printing Preferences
        </h2>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Customize how you print receipts and order tickets. Make sure the
          register is setup to allow printing.
        </span>
      </div>

      <form onSubmit={handleSubmit(submitHandler)}>
        <label
          htmlFor="printReceiptFirstThenPayment"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="printReceiptFirstThenPayment"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("printReceiptFirstThenPayment")}
          />
          <span className="ml-2">Print receipt first, then accept payment</span>
        </label>

        <label
          htmlFor="printSettlementBillAfterAcceptingPayment"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="printSettlementBillAfterAcceptingPayment"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("printSettlementBillAfterAcceptingPayment")}
          />
          <span className="ml-2">
            Print settlement bill after accepting payment
          </span>
        </label>

        <label
          htmlFor="printProductNotesInTheReceipt"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="printProductNotesInTheReceipt"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("printProductNotesInTheReceipt")}
          />
          <span className="ml-2">Print product notes in the receipt</span>
        </label>

        <label
          htmlFor="doNotPrintTaxRatesAgainstEachProduct"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="doNotPrintTaxRatesAgainstEachProduct"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("doNotPrintTaxRatesAgainstEachProduct")}
          />
          <span className="ml-2">
            Do not print tax rates against each product
          </span>
        </label>

        <label
          htmlFor="doNotPrintCopyOfReceiptAndOrderTickets"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="doNotPrintCopyOfReceiptAndOrderTickets"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("doNotPrintCopyOfReceiptAndOrderTickets")}
          />
          <span className="ml-2">
            Do not print copy of receipt and order tickets
          </span>
        </label>

        <label
          htmlFor="printOrderTicketKOTNumberInTheReceipt"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="printOrderTicketKOTNumberInTheReceipt"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("printOrderTicketKOTNumberInTheReceipt")}
          />
          <span className="ml-2">
            Print order ticket / KOT number in the receipt
          </span>
        </label>

        <label
          htmlFor="printServerCopyOfOrderTicketKOT"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="printServerCopyOfOrderTicketKOT"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("printServerCopyOfOrderTicketKOT")}
          />
          <span className="ml-2">Print server copy of order ticket / KOT</span>
        </label>

        <label
          htmlFor="rintRegisterNameOnReceipt"
          className="block text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
        >
          <input
            type="checkbox"
            id="rintRegisterNameOnReceipt"
            className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700"
            {...register("printRegisterNameOnReceipt")}
          />
          <span className="ml-2">Print register name on receipt</span>
        </label>
        <button className="align-bottom inline-flex mt-6 items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PrintingPreferences;
