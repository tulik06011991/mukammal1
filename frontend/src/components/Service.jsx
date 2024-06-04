// Service.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Service = () => {
    // Redux do'konidan malumotlarni olish
    const cartItems = useSelector((state) => state.cart);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Istemol savatchasi</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-md p-4">
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 mb-2">${item.price}</p>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">O'chirish</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">Savatcha bo'sh</p>
                )}
            </div>
        </div>
    );
};

export default Service;
