"use client";
import { useState } from "react";

interface AnimatedCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  color?: string;
  border?: string;
}

export const CustomCheckbox = ({
  checked = false,
  onChange,
  label,
  color = "bg-secondary-1",
}: AnimatedCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheck = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer space-x-2 select-none">
      <div
        role="checkbox"
        aria-checked={isChecked}
        onClick={toggleCheck}
        className={`relative w-4 h-4 rounded border-2 transition-colors duration-300 
          ${isChecked ? `${color} border-none` : "bg-white border-[#A5A5A5]"}`}
      >
        <svg
          className={`absolute inset-0 w-full h-full p-0.5 text-white transition-transform duration-300
            ${isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 10l2 2 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};
