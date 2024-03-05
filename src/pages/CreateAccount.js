import React from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Input, Label, Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axiosClient from "../apiClient";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axiosClient.post("/signup", data);

      if (response.status === 200) {
        history.replace("/login");
      }
    } catch (error) {
      console.error(error); // handle errors
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                  <span>Email</span>
                  <Input
                    className="mt-1"
                    type="email"
                    placeholder="john@doe.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </Label>
                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </Label>
                <Label className="mt-4">
                  <span>Confirm password</span>
                  <Input
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: value =>
                        value === watch("password") || "The passwords do not match"
                    })}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </Label>

                <Label className="mt-6" check>
                  <Input type="checkbox" />
                  <span className="ml-2">
                    I agree to the{" "}
                    <span className="underline">privacy policy</span>
                  </span>
                </Label>

                <Button tag={Link} to="/login" block className="mt-4">
                  Create account
                </Button>
              </form>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
