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
    if (isValid && phoneNumber.length !== 0) {
      // Form submission logic
      alert(`Habar jo'natildi`);
    } else {
      alert('iltimos telefon raqamni kiriting');
    }
  };

  return (
    <div className='flex flex-col items-center p-4' onClick={handleClick}>
      <div className='flex flex-col sm:flex-row w-full justify-center items-center space-x-0 sm:space-x-4'>
        <div className='w-full sm:w-1/3 md:w-1/4 lg:w-2/5 flex justify-center py-4'>
          <img src="../../src/assets/iphone.webp" alt="iPhone" className="w-full h-auto max-w-xs" />
        </div>
        <div className='w-full sm:w-2/3 md:w-3/4 lg:w-3/5 mx-auto'>
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
              <button type="submit" className='w-full active:scale-95 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200'>Submit</button>
            </form>
            {!isValid && <p className='text-red-500 text-sm mt-2'>Please enter a valid phone number starting with +998 followed by 9 digits.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
