import React from "react";
import { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch,  } from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import {MdFavorite, MdHelp} from "react-icons/md"
import {FaWallet,FaUserFriends } from "react-icons/fa"


const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30}/>
        </div>
        <h1 className="r=text-2xl sm:text-3xl lg:text-4xl px-2">
          best <span className=" font-bold ">Eats</span>
        </h1>
        <div></div>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="flex items-center rounded-full bg-gray-200 px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25}/>
        <input type="text" name="" placeholder="Search Foods" className="bg-transparent p-2 w-full focus:outline-none"/>
      </div>
      <button className=" bg-black text-white hidden lg:flex items-center py-2 ">
        <BsFillCartFill size={20} className="mr-2"/> cart
      </button>

      {nav ? <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div> : ""}
      

        <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 " : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className=" absolute right-4 top-4 cursor-pointer "/>
        <h2 className="text-2xl mt-3 px-4">Best <span className="font-bold">Eats</span></h2>
        <nav>
            <ul className="flex flex-col p-4 text-gray-800">
                <li className="text-xl py-4 flex"> <TbTruckDelivery className="mr-4"/> Orders </li>
                <li className="text-xl py-4 flex"> <MdFavorite className="mr-4"/> Favourites </li>
                <li className="text-xl py-4 flex"> <FaWallet className="mr-4"/> Wallet </li>
                <li className="text-xl py-4 flex"> <MdHelp className="mr-4"/> Help </li>
                <li className="text-xl py-4 flex"> <AiFillTag className="mr-4"/> Promotions </li>
                <li className="text-xl py-4 flex"> <BsFillSaveFill className="mr-4"/> Best Ones </li>
                <li className="text-xl py-4 flex"> <FaUserFriends className="mr-4"/> Invite Friends </li>
            </ul>
        </nav>
        </div>

    </div>
  );
};

export default Navbar;
