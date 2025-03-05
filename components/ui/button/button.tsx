import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  children: ReactNode | string;
  color?: string;
  bgColor?: string;
  size?: string;
  hoverBgColor?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (prop: any) => void;
  as: string;
  to?: string;
  borderRadius?: string;
  disabled?: boolean;
  variant?: string;
};

export const Button = ({
  className,
  children,
  color = "text-black",
  bgColor = "bg-secondary-1",
  size = "sm",
  hoverBgColor = "hover:bg-secondary-1/90",
  onClick,
  as,
  to = "/",
  borderRadius = "rounded-md",
  disabled,
  variant = "solid",
}: ButtonProps) => {
  let buttonStyle = `${bgColor} ${color} ${borderRadius}`;

  if (variant === "outline") {
    buttonStyle = `border border-secondary-1 text-secondary-1 ${color} ${borderRadius}`;
    bgColor = "bg-transparent";
    hoverBgColor = "hover:border-secondary-1";
  }

  if (as === "link")
    return (
      <Link
        href={to}
        className={`${className} flex justify-center font-karla items-center gap-2`}
      >
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` ${
        size === "sm"
          ? "h-[36px] w-[99px] text-xs"
          : size === "md"
          ? "h-11 w-[134px] text-base"
          : "h-12 w-full text-base"
      } px-5 font-medium flex justify-center cursor-pointer items-center gap-2 ${buttonStyle} ${className} duration-100 ${hoverBgColor} `}
    >
      {children}
    </button>
  );
};
