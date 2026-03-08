import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-18 h-18 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
