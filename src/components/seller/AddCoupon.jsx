// src/components/AddCoupon.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const schema = yup.object().shape({
  code: yup.string().required("Coupon code is required"),
  type: yup
    .string()
    .oneOf(["percentage", "amount"], "Select a valid discount type")
    .required("Discount type is required"),
  value: yup
    .number()
    .positive("Value must be a positive number")
    .required("Discount value is required"),
  expiryDate: yup.date().nullable(),
  isActive: yup.boolean().required(),
});

export const AddCoupon = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data) => {
    try {
      console.log(data);
      const res = await axios.post("http://localhost:5555/api/v1/coupon/add", data, {
        withCredentials: true,
      });
      if (!res.data.success) {
        return toast.error("Coupon not Added");
      }
      toast.success("Coupon Added Successfully");
      console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Coupon Code
        </label>
        <input
          type="text"
          {...register("code")}
          className={`w-full px-3 py-2 border rounded ${
            errors.code ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.code && (
          <p className="text-red-500 text-xs mt-1">{errors.code.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Discount Type
        </label>
        <select
          {...register("type")}
          className={`w-full px-3 py-2 border rounded ${
            errors.type ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select Type</option>
          <option value="percentage">Percentage</option>
          <option value="amount">Amount</option>
        </select>
        {errors.type && (
          <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Discount Value
        </label>
        <input
          type="number"
          {...register("value")}
          className={`w-full px-3 py-2 border rounded ${
            errors.value ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.value && (
          <p className="text-red-500 text-xs mt-1">{errors.value.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Expiry Date
        </label>
        <input
          type="date"
          {...register("expiryDate")}
          className={`w-full px-3 py-2 border rounded ${
            errors.expiryDate ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.expiryDate && (
          <p className="text-red-500 text-xs mt-1">
            {errors.expiryDate.message}
          </p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          {...register("isActive")}
          className={`h-4 w-4 text-blue-600 border-gray-300 rounded ${
            errors.isActive ? "border-red-500" : "border-gray-300"
          }`}
        />
        <label className="ml-2 block text-sm font-medium text-gray-700">
          Is Active
        </label>
        {errors.isActive && (
          <p className="text-red-500 text-xs mt-1">{errors.isActive.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Coupon
      </button>
    </form>
    </>
  );
};
