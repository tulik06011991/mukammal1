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
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState(null);
  const items = useSelector((state) =>state.cart)
        console.log(items)

  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'file_input') {
      setProductImage(files[0]);
    } else if (id === 'text1') {
      setProductName(value);
    } else if (id === 'text2') {
      setProductDescription(value);
    } else if (id === 'product_price') {
      setProductPrice(value);
    } else if (e.target.tagName === 'SELECT') {
      setProductCategory(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productCategory', productCategory);
    formData.append('productImage', productImage);

    try {
      const response = await axios.post('http://localhost:300/postProducts', formData, {
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
          <label htmlFor="text1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
          <input
            id="text1"
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter product name"
            value={productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
          <input
            id="text2"
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter product description"
            value={productDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="product_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
          <input
            id="product_price"
            type="number"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter product price"
            value={productPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="product_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <select
            id="product_category"
            className="w-full mb-2 py-2 text-sm bg-gray-200 font-medium text-gray-900 dark:text-white"
            value={productCategory}
            onChange={handleChange}
          >
            <option value='' disabled>Select category</option>
            <option value='texnika'>Texnika</option>
            <option value='kitob'>Kitob</option>
            <option value='oyoq kiyim'>Oyoq kiyim</option>
          </select>
        </div>
        <div>
          <label htmlFor="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
          <input
            id="file_input"
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
