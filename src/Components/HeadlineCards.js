import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4">sus's out BOGO's out</p>
            <p className="px-2">Through 8/26</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={require("../Assets/food2.jpg")} alt="" />
      </div>

       {/* card */}
       <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={require("../Assets/food3.jpg")} alt="" />
      </div>

       {/* card */}
       <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
            <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts too</p>
            <p className="px-2">Tastey Treats</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={require("../Assets/food1.avif")} alt="" />
      </div>
    </div>
  );
};

export default HeadlineCards;
