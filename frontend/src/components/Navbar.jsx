import React from 'react';
import '../index.css'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-xl">MyNavbar</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Services</a>
              </li>
              <li>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
