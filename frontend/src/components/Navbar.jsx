import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   

   

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  

    const handleButtonClick = () => {
        setIsButtonChecked(!isButtonChecked);
    };

  

    return (
        <div className="flex">
            {/* Sidebar for small and medium screens */}
            <div
                className={`fixed inset-0 bg-gray-800 text-white w-64 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:hidden transition-all`}
            >
                <div className="p-4">
                    <h2 className="text-2xl font-semibold">Sidebar</h2>
                    <ul>
                        <li className="mt-4">
                            <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Home
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="/about" className="block py-2 px-4 rounded hover:bg-gray-700">
                                About
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Services
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex-1">
                {/* Navbar for desktop screens */}
                <nav className="bg-white shadow p-4 md:flex md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">Brand</div>
                        <button
                            onClick={toggleSidebar}
                            className="block md:hidden text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-700 hover:text-gray-900 ">
                            Home
                        </a>
                        <a href="/about" className="text-gray-700 hover:text-gray-900 ">
                            About
                        </a>
                        <a href="/" className="text-gray-700 hover:text-gray-900 ">
                            Services
                        </a>
                        <a href="/" className="text-gray-700 hover:text-gray-900 ">
                            Contact
                        </a>
                    </div>
                </nav>
               
            </div>
        </div>
    );
};

export default Navbar;
