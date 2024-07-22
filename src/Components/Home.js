import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Spinner from "./Spinner";
import { AppContext } from "./AppContextProvider";

export default function Home() {
  let card = null;
  const { data,loading, selected } = React.useContext(AppContext);
  console.log(selected)
  if (data) {
    card = data.map((item) => {
      return (
        <Card

          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          img={item.image}
          
        />
      );
    });
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <div className="bg-white mt-0">
          <div className="max-w-[1100px] gap-5 h-fit m-auto flex flex-wrap">
            {card}
          </div>
        </div>
      ) : (
        <div className="flex justify-center  h-screen bg-red-200">
          <div className="flex justify-center items-center">
            <div>Data Not Found</div>
          </div>
        </div>
      )}
    </div>
  );
}
/*
        "rating": {
            "rate": 3.9,
            "count": 120
            */
