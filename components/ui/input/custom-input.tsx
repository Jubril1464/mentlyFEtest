"use client";
import { useState } from "react";
import { Input } from "./input";
import { CustomInputProps } from "./types";

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  register,
  errors,
  icon,
  type = "text",
  placeholder,
  inputType = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium font-karla">
        {label}
      </label>
      <div className="relative">
        {inputType === "text" ? (
          <Input
            {...register(name)}
            type={type}
            id={name}
            placeholder={placeholder}
            className={`w-full h-12 outline-none ${icon ? "pl-10" : ""} ${
              errors[name] ? "border-red-500" : ""
            }`}
          />
        ) : (
          <div className="relative">
            <Input
              {...register(name)}
              type={showPassword ? "text" : "password"}
              id={name}
              placeholder={placeholder}
              className={`w-full pr-10 h-12 outline-none ${
                errors[name] ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-sm font-bold"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <span className="cursor-pointer">Hide</span>
              ) : (
                <span className="cursor-pointer">Show</span>
              )}
            </button>
          </div>
        )}

        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm font-light text-red-600">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
