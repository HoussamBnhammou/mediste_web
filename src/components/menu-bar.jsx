// components/MenuBar.js
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component for the profile icon

const MenuBar = () => {
  return (
    <nav className="bg-[#7EC8E3] h-[60px] flex items-center">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="ml-[-25px] text-white text-[28px] font-medium font-inter">
          Mediste
        </div>
        <div className="flex items-center space-x-4">
        <svg 
            className="h-8 w-8 text-white" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
