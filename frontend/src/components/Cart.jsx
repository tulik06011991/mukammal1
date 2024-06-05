import React, {useContext} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import productContext from './context/ProductContext';

const Cart = () => {
  const { setIsSidebarOpen } = useContext(productContext);
    const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
    const handleClick = () => {
      setIsSidebarOpen(false);
      
  }; 
    const handleSubmit  =async (e) =>{
      e.preventDefault()
      try {
          const response = await axios.post('http://localhost:3000/', cartItems)
          setData(response.data)
      } catch (error) {
          console.log(error)
          
      }
  }

  return (
    <div>
    
<div className="max-w-2xl mx-auto bg-white p-16" onClick={handleClick}>

	<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
         
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{0-9}-[0-8]{3}-[2]{2}" required/>
        </div>
        
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cart Number</label>
        <input type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456789" required/>
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kartaning amal qilish muddat</label>
        <input type="text" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="02/24" required/>
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="date" type="checkbox" value="" className="w-2 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

	<p className="mt-5">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
		more by going to the official <a className="text-blue-600 hover:underline"
			href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite
			Documentation</a>.
	</p>
</div>
    </div>
  )
}

export default Cart
