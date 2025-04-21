import React from "react";

const Card = ({ title, description, children }) => {
  return (
    <div className="bg-gradient-to-r from-pink-700 to-purple-700 text-white px-8 py-5 shadow-md">
      <h2 className="text-2xl font-bold text-yellow-300 mb-3">{title}</h2>
      {description && <p className="text-yellow-300 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
