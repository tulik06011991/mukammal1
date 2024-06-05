import { useContext, useState } from 'react';
import React from 'react';
import productContext from '../components/context/ProductContext';
import axios from 'axios';
import { useSelector } from 'react-redux';

const GetProducts = () => {
  const { setIsSidebarOpen } = useContext(productContext);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const items = useSelector((state) => state.cart);
  
  console.log(items);

  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'productImage') {
      setProductImage(files[0]);
    } else if (name === 'productName') {
      setProductName(value);
    } else if (name === 'productDescription') {
      setProductDescription(value);
    } else if (name === 'productPrice') {
      setProductPrice(value);
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);

    try {
      const response = await axios.post('http://localhost:3000/postProducts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product saved', response.data);
    } catch (error) {
      console.error('Error saving product', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" onClick={handleClick}>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
          <input
            id="productName"
            name="productName"
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter product name"
            value={productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
          <input
            id="productDescription"
            name="productDescription"
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter product description"
            value={productDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
          <input
            id="productPrice"
            name="productPrice"
            type="number"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter product price"
            value={productPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
          <input
            id="productImage"
            name="productImage"
            type="file"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default GetProducts;
