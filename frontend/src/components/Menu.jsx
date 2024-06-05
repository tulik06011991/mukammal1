import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import productContext from './context/ProductContext';
import { add } from './Redux/CartSlice';
import { useDispatch } from 'react-redux';

const Menu = () => {
    const [isButtonChecked, setIsButtonChecked] = useState(false);
    const [data, setData] = useState([]);
    const { setIsSidebarOpen } = useContext(productContext);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsSidebarOpen(false);
    };

    const handleAdd = (product) => {
        localStorage.setItem('mahsulot', product);
        dispatch(add(product));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div onClick={handleClick}>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-center">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((d, i) => (
                        <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-3 flex flex-col justify-between hover:cursor-pointer" style={{ height: "450px" }} onClick={handleClick}>
                            <img className="w-full mx-auto mt-2" style={{ height: "180px", width: '150px' }} src={d.image} alt={d.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{d.title}</div>
                                <p className="text-gray-700 text-base font-bold">
                                    $ {d.price}
                                </p>
                            </div>
                            <div className="flex justify-center items-center mb-4">
                                <button
                                    type="button"
                                    className='rounded-full mx-auto px-3 py-1 cursor-pointer text-sm font-semibold bg-gray-500 hover:bg-gray-700 active:scale-95' onClick={() => handleAdd(d)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full h-screen mx-auto">
                        <div
                            className="inline-block w-16 h-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Menu;
