import React, { useState } from "react";
import { data } from "../Data/Data";
const Food = () => {
  const [foods, setFoods] = useState(data);
  // filter type burgers/pizza/etc
  const filtertype = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600 "
            >
              All
            </button>
            <button
              onClick={() => filtertype("burger")}
              className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600"
            >
              Burgers
            </button>
            <button
              onClick={() => filtertype("pizza")}
              className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600"
            >
              Pizza
            </button>
            <button
              onClick={() => filtertype("salad")}
              className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600"
            >
              Salads
            </button>
            <button
              onClick={() => filtertype("chicken")}
              className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => filterPrice('$')} className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600 ">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600 ">
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600 ">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className=" m-1 border-orange text-orange-600 hover:bg-orage-600 hover:text-white hover:bg-orange-600 ">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((items, index) => (
          <div
            key={index}
            className="border rounded-lg p-1 shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={items.image}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 ">
              <p>{items.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
