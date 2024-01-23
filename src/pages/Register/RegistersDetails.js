import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function RegisterDetails() {
  const { register, control, handleSubmit, watch, formState } = useForm();

  const submitHandler = (data) => console.log(data);
  return (
    <>
      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your Register Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            Enable receipt printing to print receipts while billing with this
            register.
          </span>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
            By default, The shop name will be printed on the receipt.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Register Name */}
          <div className="my-4">
            <label
              htmlFor="registerName"
              className="block text-sm font-medium text-gray-600"
            >
              Register Name
            </label>
            <Controller
              name="registerName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="registerName"
                  type="text"
                  {...field}
                  placeholder="Enter your Register Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Receipt Number Prefix */}
          <div className="mb-4">
            <label
              htmlFor="receiptNumberPrefix"
              className="block text-sm font-medium text-gray-600"
            >
              Receipt Number Prefix
            </label>
            <Controller
              name="receiptNumberPrefix"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="receiptNumberPrefix"
                  type="text"
                  {...field}
                  placeholder="Receipt Number Prefix"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Bill Header */}
          <div className="mb-4">
            <label
              htmlFor="billHeader"
              className="block text-sm font-medium text-gray-600"
            >
              Bill Header
            </label>
            <Controller
              name="billHeader"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  id="billHeader"
                  {...field}
                  placeholder="Bill Header Content (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Bill Footer */}
          <div className="mb-4">
            <label
              htmlFor="billFooter"
              className="block text-sm font-medium text-gray-600"
            >
              Bill Footer Content
            </label>
            <Controller
              name="billFooter"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  id="billFooter"
                  {...field}
                  placeholder="Bill Footer Content (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Printer type */}
          <div className="mb-4">
            <label
              htmlFor="printerType"
              className="block text-sm font-medium text-gray-600"
            >
              Printer Type
            </label>
            <Controller
              name="printerType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select id="selectOption" {...field} className="mt-1">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              )}
            />
          </div>

          {/* Print receipts and order tickets */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="printReceiptsAndOrderTickets"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="printReceiptsAndOrderTickets"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="printReceiptsAndOrderTickets"
              className="block text-sm font-medium text-gray-600"
            >
              Print receipts and order tickets (for Web)
            </label>
          </div>

          {/* Include shop logo in printed receipts */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="includeShopLogoInPrintedReceipts"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="includeShopLogoInPrintedReceipts"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="includeShopLogoInPrintedReceipts"
              className="block text-sm font-medium text-gray-600"
            >
              Include shop logo in printed receipts (for Web)
            </label>
          </div>

          {/* Table Number */}
          <div className="mb-4">
            <label
              htmlFor="tableNumbers"
              className="block text-sm font-medium text-gray-600"
            >
              Table Numbers
            </label>
            <Controller
              name="tableNumbers"
              control={control}
              defaultValue="1-10"
              render={({ field }) => (
                <Textarea
                  id="tableNumbers"
                  {...field}
                  placeholder="1-10"
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
        className="px-4 py-3 mb-8 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your Waiter App / Kitchen Display System (KDS) Settings.
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
            To enable Waiter app / KDS, configure the IP address of the SlickPOS
            Desktop. The Waiter app and KDS should be on the same network.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Server IP Address For Waiter / KDS App */}
          <div className="mb-4 mt-4">
            <label
              htmlFor="serverIp"
              className="block text-sm font-medium text-gray-600"
            >
              Server IP Address For Waiter / KDS App
            </label>
            <Controller
              name="serverIp"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="serverIp"
                  type="text"
                  {...field}
                  placeholder="Server IP Address For Waiter / KDS App (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* KDS Stale Time  */}
          <div className="mb-4">
            <label
              htmlFor="kdsStaleTime"
              className="block text-sm font-medium text-gray-600"
            >
              KDS Stale Time
            </label>
            <Controller
              name="kdsStaleTime"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="kdsStaleTime"
                  type="text"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Enable accept status for orders in KDS */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="acceptStatusForOrdersInKDS"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="acceptStatusForOrdersInKDS"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="acceptStatusForOrdersInKDS"
              className="block text-sm font-medium text-gray-600"
            >
              Enable accept status for orders in KDS
            </label>
          </div>

          {/* Enable served status for orders in KDS */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="acceptServedForOrdersInKDS"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="acceptServedForOrdersInKDS"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="acceptServedForOrdersInKDS"
              className="block text-sm font-medium text-gray-600"
            >
              Enable accept served for orders in KDS
            </label>
          </div>
          {/* Allow to change status at item level in KDS */}
          <div className="mb-4 flex items-center gap-2">
            <Controller
              name="allowToChangeStatusAtItemLevelInKDS"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="allowToChangeStatusAtItemLevelInKDS"
                  type="checkbox"
                  {...field}
                  placeholder="Stale time in minutes (Optional)"
                  className=""
                />
              )}
            />
            <label
              htmlFor="allowToChangeStatusAtItemLevelInKDS"
              className="block text-sm font-medium text-gray-600"
            >
              Allow to change status at item level in KDS
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

export default RegisterDetails;
