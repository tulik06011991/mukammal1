import React, { useContext } from 'react';
import productContext from './context/ProductContext';

const Contact = () => {
  const { setIsSidebarOpen } = useContext(productContext);
  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-4 lg:p-8' onClick={handleClick}>
      <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 flex justify-center lg:justify-start py-4 lg:py-0'>
        <img
          src="../../src/assets/iphone.webp"
          alt="iPhone"
          className="w-full h-auto max-w-xs"
        />
      </div>
      <div className='w-full sm:w-10/12 md:w-8/12 lg:w-5/12 mx-auto lg:mx-0'>
        <div className='bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
          <input
            type="email"
            id="email"
            className='w-full rounded px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:border-blue-400 mb-4'
            placeholder='Email address'
          />
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
          <textarea
            id="message"
            className='w-full rounded px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:border-blue-400 mb-4'
            placeholder='Message'
          ></textarea>
          <button type="submit" className='w-full py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
