import { useContext } from 'react';
import React from  'react';
import productContext from '../components/context/ProductContext';
import axios from 'axios';

const GetProducts = () => {
  const { setIsSidebarOpen } = useContext(productContext);

  
  const handleClick = () => {
    setIsSidebarOpen(false);
    
}; 

const handleSubmit = async (e) =>{
  e.preventDefault();
  // const response = axios.post()
  console.log(e)
}
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" onClick={handleClick} >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 1</label>
          <input
            id="text1"
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter text 1"
          />
        </div>
        <div>
          <label htmlFor="text2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 2</label>
          <input
            id="text2"
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter text 2"
          />
        </div>
        <div>
          <label htmlFor="text3" className="block mb-2 text-sm font-medium rounded-lg text-gray-900 dark:text-white">Tanglang</label>
         <select className="w-full mb-2 py-2 text-sm bg-gray-200 font-medium  text-gray-900 dark:text-white">
          <option value='' disabled className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanglang</option>
          <option className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">texnika</option>
          <option className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">kitob</option>
          <option className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">oyoq kiyim</option>

         </select>
        </div>
        <div>
          <label htmlFor="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rasm yuklash </label>
          <input
            id="file_input"
            type="file"
           className="block w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
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
}

export default GetProducts;
