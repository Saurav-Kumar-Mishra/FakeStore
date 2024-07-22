import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='bg-black text-white p-4 fixed top-0 w-full z-50 shadow-md '>
      <div className='container mx-auto flex justify-between items-center'>
        <NavLink to="/" className='flex items-center gap-2'>
          <img src='./shop.png' width="35px" alt='Logo' />
          <span className='text-2xl font-bold'>Ecomz</span>
        </NavLink>
        <div className='flex items-center gap-6'>
          <NavLink
            to="/"
            className='text-xl hover:text-gray-300 transition duration-200'
            activeClassName='text-gray-300'
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className='relative flex items-center text-xl hover:text-gray-300 transition duration-200'
            activeClassName='text-gray-300'
          >
            <FaShoppingCart size={24} />
            {/* Example badge for cart items count, optional */}
            {/* <span className='absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1'>3</span> */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
