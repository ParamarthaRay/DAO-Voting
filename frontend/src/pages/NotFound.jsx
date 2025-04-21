import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-700 mb-4">404</h1>
        <p className="text-xl text-red-600">Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
