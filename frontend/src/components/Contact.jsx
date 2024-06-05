import React, { useState, useContext } from 'react';
import productContext from './context/ProductContext';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { setIsSidebarOpen } = useContext(productContext);

  const handleClick = () => {
    setIsSidebarOpen(false);
    
}; 


  const phonePattern = /^\+998[0-9]{9}$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsValid(phonePattern.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Form submission logic
      alert('Form submitted');
    } else {
      alert('Invalid phone number');
    }
  };

  return (
    <div className='flex flex-col items-center p-4' onClick={handleClick} >
      <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 flex justify-center py-4'>
        <img src="../../src/assets/iphone.webp" alt="iPhone" className="w-full h-auto max-w-xs" />
      </div>
      <div className='w-full sm:w-10/12 md:w-8/12 lg:w-5/12 mx-auto'>
        <div className='bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className={`w-full rounded px-4 py-2 border ${isValid ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:border-blue-400 mb-4`}
              placeholder='+998xxxxxxxxx'
            />
            <textarea name="" id="" className='w-full border border-gray-300 py-3 mb-2 rounded px-4' placeholder='Message'></textarea>
            <button type="submit" className='w-full py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200'>Submit</button>
          </form>
          {!isValid && <p className='text-red-500 text-sm mt-2'>Please enter a valid phone number starting with +998 followed by 9 digits.</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
