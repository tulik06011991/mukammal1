import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isButtonChecked, setIsButtonChecked] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        getProducts();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleButtonClick = () => {
        setIsButtonChecked(!isButtonChecked);
    };

    console.log(data);

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
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Home
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                                About
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                                Services
                            </a>
                        </li>
                        <li className="mt-4">
                            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
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
                        <a href="#" className="text-gray-700 hover:text-gray-900 ">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 ">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 ">
                            Services
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 ">
                            Contact
                        </a>
                    </div>
                </nav>
                <main className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4 " onClick={closeSidebar}>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((d, i) => (
                            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-3 flex flex-col justify-between " style={{height: "450px"}}>
                                <img className="w-full mx-auto mt-2" style={{height: "180px", width: '150px'}} src={d.image} alt={d.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{d.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {d.price}
                                    </p>
                                </div>
                                <div className=" flex justify-center items-center mb-4">
                                    <button
                                        type="button" className='rounded-full mx-auto px-3 py-1 cursor-pointer text-sm font-semibold bg-gray-500 hover:bg-gray-700'
                                        // className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mx-auto ${
                                        //     isButtonChecked ? 'bg-gray-900 text-gray-200' : 'bg-gray-200 text-gray-700'
                                        // }`}
                                        // onClick={handleButtonClick}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Navbar;
