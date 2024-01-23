import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CameraLinedIcon } from "../../icons";
import { Input, Button } from "@windmill/react-ui";
function Shop() {
  const { register, control, handleSubmit, watch, formState } = useForm();
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // handle file change for logo upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  // function to trigger select file for logo
  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const submitHandler = (data) => console.log(data);
  return (
    <>
      <div
        className="px-4 pt-3 lg:grid grid-cols-[200px,1fr]"
        style={{ gridTemplateColumns: "max(380px) 1fr" }}
      >
        <div className="mt-4 ml-4">
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your Shop Setup
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
            Your shop details and settings.
          </span>
          <Link
            className="text-md text-blue-500 block"
            to={"/app/subscription"}
          >
            View Subscription Details
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* img input */}
          {!previewUrl && (
            <label
              htmlFor="logo"
              className="block mb-4 text-sm text-gray-700 dark:text-gray-400 items-center mt-6"
            >
              <input
                type="file"
                className="hidden"
                accept="image/*"
                {...register("logo")}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-2">
                <div
                  onClick={openFileInput}
                  className="border-2 p-4 rounded inline-block border-gray-700 dark:border-gray-400 cursor-pointer"
                >
                  <CameraLinedIcon />
                </div>
                <p
                  onClick={openFileInput}
                  className="text-blue-500 text-xs cursor-pointer"
                >
                  Upload your logo. It should be a square image less than 1 MB.
                </p>
              </div>
            </label>
          )}
          {previewUrl && (
            <label
              htmlFor="printReceiptFirstThenPayment"
              className="block mb-4 text-sm text-gray-700 dark:text-gray-400 items-center mt-6  flex items-center"
            >
              <img
                src={previewUrl}
                alt="Preview"
                className="image-preview h-w-16 w-16"
              />
              <p className="text-blue-500 text-xs">Remove</p>
            </label>
          )}

          {/* Shop Name */}
          <div className="mb-4">
            <label
              htmlFor="shopName"
              className="block text-sm font-medium text-gray-600"
            >
              Shop Name
            </label>
            <Controller
              name="shopName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="shopName"
                  type="text"
                  {...field}
                  placeholder="Enter your shopname"
                  className="mt-1"
                />
              )}
            />
          </div>

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
                  placeholder="Type to choose from Google Suggestions "
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Shop Owner PIN */}
          <div className="mb-4">
            <label
              htmlFor="pin"
              className="block text-sm font-medium text-gray-600"
            >
              Shop Owner PIN
            </label>
            <Controller
              name="pin"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="pin"
                  type="text"
                  {...field}
                  rules={{
                    required: "Password is required",
                    pattern: {
                      value: /^\d{4,6}$/,
                      message:
                        "Password must be numeric and have 4 to 6 digits",
                    },
                  }}
                  placeholder="4 to 6 digit owner Pin eg:1234"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Website Link */}
          <div className="mb-4">
            <label
              htmlFor="websiteLink"
              className="block text-sm font-medium text-gray-600"
            >
              Website Link
            </label>
            <Controller
              name="websiteLink"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="websiteLink"
                  type="text"
                  {...field}
                  placeholder="https://<your domin> (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Facebook Link */}
          <div className="mb-4">
            <label
              htmlFor="facebookLink"
              className="block text-sm font-medium text-gray-600"
            >
              Facebook Link
            </label>
            <Controller
              name="facebookLink"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="facebookLink"
                  type="text"
                  {...field}
                  placeholder="https:/www.facebook.com/<your profile> (Optional)"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Instagram Link */}
          <div className="mb-4">
            <label
              htmlFor="instagramLink"
              className="block text-sm font-medium text-gray-600"
            >
              Instagram Link
            </label>
            <Controller
              name="instagramLink"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="instagramLink"
                  type="text"
                  {...field}
                  placeholder="https:/www.instagram.com/<your profile> (Optional)"
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
            Your Account Details
          </h2>
          <span className="block text-sm text-gray-700 dark:text-gray-200 mb-2">
            Your details help us serve you better.
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="px-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {/* Your Name */}
          <div className="mb-4 mt-4">
            <label
              htmlFor="yourName"
              className="block text-sm font-medium text-gray-600"
            >
              Your Name
            </label>
            <Controller
              name="yourName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="yourName"
                  type="text"
                  {...field}
                  placeholder="Enter your Name"
                  className="mt-1"
                />
              )}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="email"
                  type="text"
                  {...field}
                  placeholder="Enter your Name"
                  className="mt-1"
                />
              )}
            />
          </div>
          {/* Mobile Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="mobilePhoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Mobile Phone Number
            </label>
            <Controller
              name="mobilePhoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  id="mobilePhoneNumber"
                  type="text"
                  {...field}
                  placeholder="Enter your Mobile phone number"
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

export default Shop;
