import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { CameraLinedIcon } from "../../icons";
import { Input, Button, Textarea, Select } from "@windmill/react-ui";

function OrderTicketGroupsDetails() {
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
            Your Order Ticket Group Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-4">
            You can use Order Ticket Group to split and print KOTs across
            kitchens. For example, you can create a group called Sandwich
            Counter and assign Sandwich category products to use a separate KOT
            printer.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Register Name */}
          <div className="my-4">
            <label
              htmlFor="orderTicketGroupName"
              className="block text-sm font-medium text-gray-600"
            >
              Order Ticket Group Name
            </label>
            <Controller
              name="orderTicketGroupName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="orderTicketGroupName"
                  type="text"
                  {...field}
                  placeholder="Order Ticket Group Name"
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

export default OrderTicketGroupsDetails;
