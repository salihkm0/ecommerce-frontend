import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-no-background-3.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import { useRecoilState } from "recoil";
import { toast } from "react-hot-toast";
import { StyledContainer } from "../../styles/ContainerStyle";

export const UserSignup = () => {
  const navigate = useNavigate();

  // const schema = yup
  //   .object({
  //     firstName: yup.string().required(),
  //     lastName: yup.string().required(),
  //     email: yup.string().email().required(),
  //     password: yup.string().min(6),
  //   })
  //   .required();

  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const schema = yup
    .object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .matches(/[a-z]/, "A lowercase letter")
        .matches(/[A-Z]/, "A capital (uppercase) letter")
        .matches(/\d/, "A number")
        .matches(passwordRegEx, "Minimum 8 characters")
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    })
    .required()

  const checkUser = async () => {
    try {
      const res = await axios.get("http://localhost:5555/api/v1/check-user", {
        withCredentials: true,
      });
      console.log(res.data);
      if (res.data.success) {
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( () => {
     checkUser();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [passwordLength, setPasswordLength] = useState(0);
  const [passwordCriteria, setPasswordCriteria] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    length: false,
  });

  const handlePasswordChange = (value) => {
    setPasswordLength(value.length);
    setPasswordCriteria({
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /\d/.test(value),
      length: value.length >= 8,
    });
  };
  // console.log(passwordLength);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:5555/api/v1/signup",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success("Successfully Registred");
        return navigate("/");
      } else {
        // alert(res.data.message);
        toast.error(`Registration Failed! ${res.data.message}`);
        return navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledContainer className=" bg-gray-50 dark:bg-gray-900 h-full" >
        <section className=" w-full h-full pb-10">
          <div className="flex flex-col items-center h-full  px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link
              to="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img style={{ width: "250px" }} src={logo} alt="logo" />
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-wrap">
                    <div className="w-full pr-1 flex-1">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ullas"
                        // required
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full pl-1 flex-1">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Raj"
                        // required
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                        <p className="text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      // required
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // required
                      {...register("password")}
                      onChange={(e) => {
                        handlePasswordChange(e.target.value);
                      }}
                    />
                    {passwordLength > 0 ? (
                      <div className="mt-5 rounded-lg">
                        <h3 className="text-md font-medium text-white">
                          Password must contain the following:
                        </h3>
                        <ul className="mt-2 space-y-2">
                          <li
                            className={`flex items-center ${
                              passwordCriteria.lowercase
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {passwordCriteria.lowercase ? "✔" : "✘"} A lowercase
                            letter
                          </li>
                          <li
                            className={`flex items-center ${
                              passwordCriteria.uppercase
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {passwordCriteria.uppercase ? "✔" : "✘"} A capital
                            (uppercase) letter
                          </li>
                          <li
                            className={`flex items-center ${
                              passwordCriteria.number
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {passwordCriteria.number ? "✔" : "✘"} A number
                          </li>
                          <li
                            className={`flex items-center ${
                              passwordCriteria.length
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {passwordCriteria.length ? "✔" : "✘"} Minimum 8
                            characters
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // required
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          // required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-emerald-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account yet?
                    <Link
                      to={"/signin"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </StyledContainer>
    </>
  );
};
