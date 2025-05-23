'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const colorMap = {
  primary: {
    bg: 'bg-blue-600',
    text: 'text-white',
    border: 'border-blue-600',
    textOnBorder: 'text-blue-600',
  },
  secondary: {
    bg: 'bg-gray-600',
    text: 'text-white',
    border: 'border-gray-600',
    textOnBorder: 'text-gray-600',
  },
  error: {
    bg: 'bg-red-600',
    text: 'text-white',
    border: 'border-red-600',
    textOnBorder: 'text-red-600',
  },
  warning: {
    bg: 'bg-yellow-500',
    text: 'text-black',
    border: 'border-yellow-500',
    textOnBorder: 'text-yellow-500',
  },
  success: {
    bg: 'bg-green-600',
    text: 'text-white',
    border: 'border-green-600',
    textOnBorder: 'text-green-600',
  },
};

const sizeMap = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl',
};

const roundedMap = {
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

export default function CompButton({
  children,
  color = 'primary',
  type = 'primary', // primary, bordered, transparent
  size = 'md',
  rounded = 'xl',
  className = '',
  ...props
}) {
  const colorSet = colorMap[color] || colorMap.primary;
  const styleClasses = clsx(
    'font-semibold tracking-wide focus:outline-none cursor-pointer transition-all duration-150 border',
    sizeMap[size],
    roundedMap[rounded],
    {
      [colorSet.bg]: type === 'primary',
      [colorSet.text]: type === 'primary',
      'bg-transparent': type === 'bordered' || type === 'transparent',
      [colorSet.border]: type === 'bordered',
      [colorSet.textOnBorder]: type === 'bordered' || type === 'transparent',
      'border-transparent': type === 'transparent',
    },
    className
  );

  let aaa = 'sadmsa';
  let bb = 'dasdsada';

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.01,
        boxShadow:
          type === 'primary' ? '0px 8px 20px rgba(59,130,246,0.3)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={styleClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}
