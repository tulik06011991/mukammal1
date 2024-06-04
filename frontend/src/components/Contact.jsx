import React, {useContext} from 'react';
import productContext from './context/ProductContext';

const Contact = () => {
  const { setIsSidebarOpen } = useContext(productContext);
  const handleClick = () => {
    setIsSidebarOpen(false);
    
}; 

  return (
    <div className=' flex' onClick={handleClick}>
      <div className=' w-4/12 flex py-4 text-center space-x-auto mx-auto '><img src="../../src/assets/iphone.webp" alt="" srcset="" /></div>
      <div className='w-4/12 mx-auto'><br /><br />
      <label htmlFor="text1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
        <input type="email" className='w-full rounded px-4 py-2 border border-gray-500 border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 mx-auto' placeholder='Email adress'  />
        <br /><br />
        <label htmlFor="text1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <textarea type='text' className='border border-gray-500 focus:outline-none w-full px-4 py-12 rounded  owerflow-auto' placeholder='Message' name="" id=""></textarea>
        <br /><br /><br />
        <button type="submit" className='btn btn-outline-dark border-none w-full text-md bg-blue-300 text-white font-base text-dark '>Jo'natish</button>
        <br /><br />
      </div>
    </div>
  )
}

export default Contact