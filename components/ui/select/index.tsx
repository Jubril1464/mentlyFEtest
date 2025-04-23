"use client";
import { useState, useRef, useEffect } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
interface SelectProps {
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

const CustomSelect: React.FC<SelectProps> = ({
  options,
  placeholder = "Select",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-[64px" ref={dropdownRef}>
      {/* Select Box */}
      <div
        className="flex items-center justify-between border border-[#E1E7EC] text-[#595564] w-[78px] rounded-sm h-6 p-1 text-xs cursor-pointer transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#595564]">{selected || placeholder}</span>
        <LiaAngleDownSolid
          className={`size-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Options */}
      <div
        className={`absolute left-0 mt-2 w-full bg-white text-[#595564] rounded-lg shadow-lg z-10 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen
            ? "max-h-60 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <ul className="py-2">
          {options.map((option) => (
            <li
              key={option}
              className="px-2 py-1 cursor-pointer transition"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
