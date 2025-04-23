import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  color = "text-white",
  bgColor = "bg-secondary-1",
  size = "sm",
  hoverBgColor = "hover:bg-secondary-1/50",
  onClick,
  as,
  to = "/",
  borderRadius = "rounded-md",
  disabled,
  variant = "solid",
}: ButtonProps) => {
  const buttonStyle = cn(
    bgColor,
    color,
    borderRadius,
    {
      "border border-secondary-1 hover:!bg-transparent text-secondary-1 bg-transparent":
        variant === "outline",
    },
    className
  );

  const sizeStyle = cn({
    "h-[36px] text-xs": size === "sm",
    "h-11 text-base": size === "md",
    "h-12 w-full text-base": size === "lg",
  });

  if (as === "link")
    return (
      <Link
        href={to}
        className={cn(
          "flex justify-center font-chivo items-center gap-2 text-secondary-1",
          className
        )}
      >
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "px-3 font-medium flex justify-center  cursor-pointer items-center gap-2 duration-100",
        buttonStyle,
        sizeStyle,
        hoverBgColor,
        { "cursor-not-allowed opacity-50": disabled }
      )}
    >
      {children}
    </button>
  );
};
