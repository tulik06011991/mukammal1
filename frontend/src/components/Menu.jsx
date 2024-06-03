import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import productContext from './context/ProductContext';

const Menu = () => {
    const [isButtonChecked, setIsButtonChecked] = useState(false);
    const [data, setData] = useState([]);
    const { setIsSidebarOpen } = useContext(productContext);

    const handleClick = () => {
        setIsSidebarOpen(false);
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
        <div>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
                                    className='rounded-full mx-auto px-3 py-1 cursor-pointer text-sm font-semibold bg-gray-500 hover:bg-gray-700'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Yuklanmoqda ...</p>
                )}
            </main>
        </div>
    );
};

export default Menu;
