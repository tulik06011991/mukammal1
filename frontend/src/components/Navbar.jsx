import React, { useContext } from 'react';
import productContext from './context/ProductContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
   
    const { isSidebarOpen, setIsSidebarOpen } = useContext(productContext);
        const items = useSelector((state) =>state.cart)
        console.log(items)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleClick = () => {
        setIsSidebarOpen(false);
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
                            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleClick}>
                                Home
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/about" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleClick}>
                                About
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/service" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleClick}>
                                Services : {items.length}
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link to="/contact" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleClick}>
                                Contact
                            </Link>
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
                        <Link to="/" className="text-gray-700 hover:text-gray-900 ">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-gray-900 ">
                            About
                        </Link>
                        <Link to="/service" className="text-gray-700 hover:text-gray-900 ">
                            Services: {items.length}
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-gray-900 ">
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
