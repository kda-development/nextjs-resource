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
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
  xl: "px-6 py-3 text-xl",
  full: "w-full px-4 py-2 text-base",
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

export default function CompInputText({
  children,
  color = "primary", // primary, secondary, error, warning, success
  type = "text", // text, password, email,
  size = "full",
  rounded = "md",
  className = "",
  adorment = null, // start, end
  variant = "outlined", // outlined, filled, standard
  ...props
}) {
  const colorSet = colorMap[color] || colorMap.primary;
  const styleClasses = clsx(
    `tracking-wide focus:outline-none transition-all duration-150 ${variantMap[variant]}`,
    sizeMap[size],
    variant !== "standard" && roundedMap[rounded],
    {
      [colorSet.bg]: color === "primary" && variant === "filled",
      [colorSet.text]: color === "primary" && variant === "filled",
      "bg-transparent": variant !== "filled" || color === "transparent",
      [colorSet.border]: variant === "outlined" || variant === "standard", // 👈 FIXED
      "border-transparent": variant === "filled",
    },
  );

  return (
    <motion.input
      type={type}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={styleClasses}
      {...props}
    >
      {children}
    </motion.input>
  );
}
