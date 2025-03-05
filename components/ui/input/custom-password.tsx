import { useState } from "react";
import { Input } from "./input";
import { CustomInputProps } from "./types";

export const CustomPasswordInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="space-y-1">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium font-karla"
      >
        {label}
        <span className="text-destructive">*</span>
      </label>
      <div className="relative">
        <Input
          {...props}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          className={`w-full pr-10 outline-none ${
            error ? "border-destructive" : ""
          }`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-sm font-bold"
          aria-label="Toggle password visibility"
        >
          {showPassword ? <p>Hide</p> : <p>Show</p>}
        </button>
      </div>
      {error && <small className="mt-1 text-destructive">{error}</small>}
    </div>
  );
};
