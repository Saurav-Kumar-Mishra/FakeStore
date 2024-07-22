import React from "react";
import { AppContext } from "./AppContextProvider";

export default function Card(props) {
  const [selected, setSelected] = React.useState(false);
  const{setGetId,getId,}=React.useContext(AppContext);
  
  function handleButton() {
    setSelected((prevSelected)=>!prevSelected);
    const isSelected = getId.some((item) => item.id === props.id);    if (isSelected) {
      const newArray = getId.filter((item) => item.id !== props.id);
      setGetId(newArray);
    } else {
      setGetId((prevIds) => [...prevIds, props]);
    }
  }
  return (
    <div className="bg-white border-2 flex w-[300px] justify-center  content-between flex-wrap p-2 rounded-2xl hover:shadow-
    2xl hover:scale-110 transition delay-50 duration-300 ease-in-out my-6 mx-auto  shadow-xl mt-24">
      <h1 className="font-semibold font-verdana">{props.title}</h1>
      <p className="text-[10px] w-fit min-h-5">{props.description}</p>
      <div className="w-36 h-52 flex mt-4">
        <img className="" src={props.img} alt="Product" />
      </div>
      <div className="flex justify-between items-baseline w-full mt-5">
        <p className="text-green-700 font-bold">${props.price}</p>
        <button
          onClick={handleButton}
          className="border-2 rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
        >
          {selected ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
