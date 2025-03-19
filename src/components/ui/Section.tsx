// Update this file: src/components/ui/Section.tsx
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: "white" | "light" | "dark" | "primary";
}

// Use forwardRef to properly handle the ref
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, className = "", children, bgColor = "white" }, ref) => {
    const bgStyles = {
      white: "bg-white dark:bg-gray-800",
      light: "bg-gray-50 dark:bg-gray-900",
      dark: "bg-gray-800 dark:bg-gray-800 text-white",
      primary: "bg-emerald-600 dark:bg-emerald-700 text-white",
    };

    return (
      <section
        id={id}
        ref={ref}
        className={`py-20 md:py-24 lg:py-28 ${bgStyles[bgColor]} ${className}`}
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      </section>
    );
  }
);

// Add a displayName to the component for easier debugging
Section.displayName = "Section";

export default Section;
