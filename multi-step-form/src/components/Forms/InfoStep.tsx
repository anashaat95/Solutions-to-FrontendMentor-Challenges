import React from "react";
import { useFormContext } from "react-hook-form";
import FormBox from "../../elements/FormBox";
import { FormTypes } from "../types/formTypes";

const InfoStep: React.FC = () => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext<FormTypes>();

  return (
    <>
      <FormBox
        {...register("name", { required: "This field is required" })}
        label="Name"
        id="name"
        name="name"
        type="text"
        placeholder="e.g. Stephen King"
        defaultValue={getValues("name")}
        error={errors?.name}
      />
      <FormBox
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
        })}
        label="Email Address"
        id="email"
        name="email"
        type="email"
        placeholder="e.g. example@example.com"
        defaultValue={getValues("email")}
        error={errors?.email}
      />
      <FormBox
        {...register("phone", {
          required: "Phone number is required",
          pattern: { value: /^[0-9+\s-]+$/, message: "Invalid phone address" },
        })}
        label="Phone Number"
        id="phone"
        name="phone"
        type="tel"
        placeholder="e.g. +1 234 567 890"
        defaultValue={getValues("phone")}
        error={errors?.phone}
      />
    </>
  );
};

export default InfoStep;
