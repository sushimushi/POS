import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";
import axiosClient from "../apiClient";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (authToken) return history.replace("/app/dashboard");

      const response = await axiosClient.post("/signin", data);

      console.log(response);
      if (response.status === 200) {
        const authToken = response.data.token;
        const account = response.data.account;
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("account", account);
        history.replace("/app/dashboard");
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
                Login
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

                <Button type="submit" className="mt-4" block>
                  Log in
                </Button>
              </form>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
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
