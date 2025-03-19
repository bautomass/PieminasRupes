import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-emerald-500 animate-spin"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-r-2 border-l-2 border-transparent border-t-emerald-200 border-b-emerald-200 animate-ping opacity-20"></div>
      </div>
    </div>
  );
}
