import React from 'react'

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-0.5 border font-medium 
        border-[#F0F0F0] bg-white text-[#262626] 
        hover:bg-gray-100 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
