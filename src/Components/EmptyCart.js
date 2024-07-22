import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart is Empty!</h2>
      <Link
        to="/"
        className="bg-green-500 text-white px-6 py-3 font-bold rounded-md hover:bg-green-600 transition duration-300"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default EmptyCart;
