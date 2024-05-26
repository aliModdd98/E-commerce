import { useState } from "react";
import { brand } from "./../../assets/svgIcons/index";
import logo from "./../../assets/logo-symbol.png";
// import { IoMdClose } from "react-icons/io";
import Search from "../Search/Search";

import { person } from "./../../assets/svgIcons/index";
import { cart } from "./../../assets/svgIcons/index";
import { orders } from "./../../assets/svgIcons/index";
import { message } from "./../../assets/svgIcons/index";
import Cart from "../Cart/Cart";
import Modal from "../Modal/Modal";
import { IoClose } from "react-icons/io5";
const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCartOpen = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <div className="flex justify-center w-full bg-gray-100 py-4">
      <div className="flex justify-between items-center w-82 ">
        <div className="flex items-center w-[22%]">
          <img src={logo} alt="logo" className="mr-2" />
          <img src={brand} alt="brand" />
        </div>

        <div className="hidden md:flex w-[56%] flex-grow mx-4">
          <Search />
        </div>

        <div className="hidden md:flex justify-center space-x-4 w-[24%]">
          <button className="text-gray-700 flex flex-col items-center">
            <img src={person} alt="Profile" className="mb-2" />
            <h6 className="text-[12px]">Profile</h6>
          </button>
          <button className="text-gray-700 flex flex-col items-center">
            <img src={message} alt="Message" className="mb-2" />
            <span className="text-[12px]">Message</span>
          </button>
          <button className="text-gray-700 flex flex-col items-center">
            <img src={orders} alt="Orders" className="mb-2" />
            <span className="text-[12px]">Orders</span>
          </button>
          <button
            className="text-gray-700 flex flex-col items-center"
            onClick={handleCartOpen}
          >
            <img src={cart} alt="Cart" className="mb-2" />
            <span className="text-[12px]">My cart</span>
          </button>
        </div>

        <button className="md:hidden text-gray-700" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isDrawerOpen && (
        <div className="fixed md:hidden inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50">
          <div className="bg-white w-85 h-full p-4">
            <button className="text-gray-700 mb-4" onClick={toggleDrawer}>
              {/* <IoMdClose /> */}
              <IoClose className="w-10 h-10" />
            </button>

            <Search />

            <button className="text-gray-700 mt-4 mb-4 block">Profile</button>
            <button className="text-gray-700 mb-4 block">Cart</button>
            <button className="text-gray-700 mb-4 block">Orders</button>
            <button className="text-gray-700 mb-4 block">Person</button>
          </div>
        </div>
      )}

      <Modal isOpen={openCart} onClose={handleCartOpen}>
        <Cart />
      </Modal>
    </div>
  );
};

export default NavBar;
