import React from "react";
import { AppContext } from "./AppContextProvider";
import EmptyCart from "./EmptyCart";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const { getId, setGetId } = React.useContext(AppContext);
  let cartSum = 0;
  if (getId.length > 0) {
    cartSum = getId.reduce(
      (accumulator, currentVal) => accumulator + currentVal.price,
      0
    );
  }

  function handleButton(id) {
    console.log(id);
    const isSelected = getId.some((item) => item.id === id);
    if (isSelected) {
      const newArray = getId.filter((item) => item.id !== id);
      setGetId(newArray);
    }
  }

  const filterData = getId.map((element) => {
    return (
      <div key={element.id} className="border-b border-gray-300 py-4 sm:mt-24 mt-36">
        <div className="flex gap-6">
          <div className="flex items-center">
            <img
              src={element.img}
              width="100%"

              alt="couldn't load the product img"
              className="w-24 h-24 object-contain rounded"
            />
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div>
              <p className="font-semibold text-lg">{element.title}</p>
              <p className="text-sm text-gray-600">{element.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-green-600 font-bold">${element.price}</p>
              <button
                onClick={() => handleButton(element.id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-start pt-8">
      {getId.length !== 0 ? (
        <div className="flex flex-col md:flex-row gap-8 w-4/5 max-w-6xl">
          <div className="w-full md:w-2/3">
            {filterData}
          </div>
          <div className="w-full md:w-1/3 bg-white p-4 shadow-md rounded-lg flex flex-col justify-between  sm:mt-24 items-center">
            <div >
              <p className="text-lg font-medium">YOUR CART</p>
              <p className="text-2xl font-bold">SUMMARY</p>
              <p className="mt-4 text-gray-700">Total Items: {getId.length}</p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                Total Amount: <span className="font-bold">${cartSum.toFixed(2)}</span>
              </p>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl font-bold hover:bg-green-600 transition">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
