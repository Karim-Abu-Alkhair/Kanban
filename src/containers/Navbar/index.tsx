import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-center items-center h-16">
        <h1 className="font-semibold text-gray-800 text-xl">
          Client Management
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
