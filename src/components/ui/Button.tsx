// components/ui/Button.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all";

  const variantStyles = {
    primary:
      "text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-md hover:shadow-lg",
    secondary:
      "text-emerald-700 bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700",
    outline:
      "text-emerald-600 bg-transparent hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-gray-800 border border-emerald-600 dark:border-emerald-500",
    ghost:
      "text-emerald-600 bg-transparent hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-gray-800",
  };

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2.5 font-semibold",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <motion.span
      className="relative z-10 flex items-center"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick}>
      {content}
    </button>
  );
}
