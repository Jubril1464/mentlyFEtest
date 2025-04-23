"use client";

import { useState } from "react";

type SwitchProps = {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-xs font-bold text-white">{label}</span>}
      <button
        role="switch"
        aria-checked={isChecked}
        onClick={toggle}
        className={`relative cursor-pointer inline-flex h-5 w-11 items-center rounded-full transition-colors duration-300 bg-white `}
      >
        <span
          className={`inline-block h-[18px] w-[18px] transform rounded-full bg-[#1F0954] transition-transform duration-300 ${
            isChecked ? "translate-x-6" : "translate-x-[2px]"
          }`}
        />
      </button>
    </div>
  );
};
