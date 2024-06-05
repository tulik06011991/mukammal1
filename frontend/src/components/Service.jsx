import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productContext from './context/ProductContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { remove } from './Redux/CartSlice';

const Service = () => {
    const [Data, setData] = useState([]);
    const { setIsSidebarOpen } = useContext(productContext);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    
    const handleClick = () => {
        setIsSidebarOpen(false);
    };

    const handleRemove = (product) => {
        localStorage.setItem('mahsulot', product);
        dispatch(remove(product));
    };

    return (
        <div className="container mx-auto px-4 py-12" onClick={handleClick}>
            <h1 className="text-3xl font-bold text-center mb-8">Istemol savatchasi</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between">
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <div className="text-center flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 mb-4">${item.price}</p>
                            </div>
                            <button 
                                onClick={() => handleRemove(item.id)} 
                                className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none active:scale-95"
                            >
                                O'chirish
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl font-bold items-center w-full mx-auto text-gray-600 my-12">Savatcha bo'sh</p>
                )}
            </div>
            {cartItems.length === 0 ? "" :
                <Link to='/carta'>
                    <button className='btn btn-outline-primary mt-5 w-full active:scale-95'>sotib olmoq</button>
                </Link>
            }
        </div>
    );
};

export default Service;
