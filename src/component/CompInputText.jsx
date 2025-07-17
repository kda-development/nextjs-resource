"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const colorMap = {
  primary: {
    bg: "bg-white",
    text: "text-gray-600",
    border: "border-blue-600 focus:border-blue-600 focus:ring-0",
  },
  secondary: {
    bg: "bg-white",
    text: "text-white",
    border: "border-gray-600 focus:border-gray-600 focus:ring-0",
  },
  error: {
    bg: "bg-red-600",
    text: "text-red-600",
    border: "border-red-600 focus:border-red-600 focus:ring-0",
  },
  warning: {
    bg: "bg-yellow-500",
    text: "text-yellow-600",
    border: "border-yellow-500 focus:border-yellow-500 focus:ring-0",
  },
  success: {
    bg: "bg-green-600",
    text: "text-white",
    border: "border-green-600 focus:border-green-600 focus:ring-0",
  },
};

const sizeMap = {
  xs: "text-xs h-7 px-2",
  sm: "text-sm h-8 px-3",
  md: "text-base h-10 px-3",
  lg: "text-lg h-11 px-4",
  xl: "text-xl h-12 px-5",
  full: "w-full text-base h-10 px-4",
};

const roundedMap = {
  xs: "rounded-sm",
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const variantMap = {
  outlined: "border",
  filled: "bg-gray-200",
  standard: "border-b",
};

const CompInputText = ({
  color = "primary",
  type = "text",
  size = "full",
  rounded = "md",
  className = "",
  adornment = null, // { start, end }
  variant = "outlined",
  ...props
}) => {
  const colorSet = colorMap[color] || colorMap.primary;

  const inputPadding = clsx({
    "pl-10": adornment?.start,
    "pr-10": adornment?.end,
  });

  const inputClasses = clsx(
    `tracking-wide focus:outline-none transition-all duration-150 w-full ${variantMap[variant]}`,
    sizeMap[size],
    variant !== "standard" && roundedMap[rounded],
    {
      [colorSet.bg]: variant === "filled",
      [colorSet.text]: variant === "filled",
      "bg-transparent": variant !== "filled" || color === "transparent",
      [colorSet.border]: variant === "outlined" || variant === "standard",
      "border-transparent": variant === "filled",
    },
    inputPadding,
  );

  return (
    <div className={`relative w-full ${className}`}>
      {adornment?.start && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          {adornment.start}
        </div>
      )}
      <motion.input
        type={type}
        whileFocus={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className={inputClasses}
        {...props}
      />
      {adornment?.end && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          {adornment.end}
        </div>
      )}
    </div>
  );
};

export default CompInputText;
