import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import productContext from './context/ProductContext';

const Menu = () => {
    const [data, setData] = useState([]);
    const { setProducts, setIsSidebarOpen } = useContext(productContext);

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

    const handleCardClick = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
        setIsSidebarOpen(false); // Sidebarni yopish
    };

    return (
        <div>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((d, i) => (
                        <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-3 flex flex-col justify-between" style={{ height: "450px" }}>
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
                                    className='rounded-full mx-auto px-3 py-1 cursor-pointer text-sm font-semibold bg-gray-500 hover:bg-gray-700'
                                    onClick={() => handleCardClick(d)}
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
    );
};

export default Menu;
