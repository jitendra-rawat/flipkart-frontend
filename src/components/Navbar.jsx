import React, { useState } from 'react';
import {  FaShoppingCart } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { motion } from 'framer-motion';
import { CiBellOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsGraphUp } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiGift } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubHemMenu, setShowSubHemMenu] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showSubMenuOnHover = () => {
    setShowSubMenu(true);
  };

  const hideSubMenuOnLeave = () => {
    setShowSubMenu(false);
  };

  const showSubMenuHemOnHover = () => {
    setShowSubHemMenu(true);
  };

  const hideSubMenuHemOnLeave = () => {
    setShowSubHemMenu(false);
  };

  return (
    <nav className='py-4 px-4 lg:px-8 mx-auto container flex space-x-2 justify-between items-center '>
      {/* Left section */}
      <div>
        <img className='-ml-10 lg:-ml-0' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" />
      </div>
      {/* Middle section */}
      <div className="hidden md:block lg:relative ">
        <input type="text" placeholder="Search Your Products and Brands and More" className="border bg-gray-100 border-gray-300 w-full lg:w-[700px] py-2 px-12 rounded-lg font-poppins focus:outline-none " />
        <CiSearch size={24} className="absolute top-2 left-4 text-gray-500" />
      </div>








      {/* Last section */}
      <div className="flex items-center">
        {/* Hamburger menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <HiOutlineDotsVertical size={24} color='black' />
          </button>
        </div>


                       {/* New icon for search on smaller screens */}
  <div className="lg:hidden">
            <CiSearch size={30} color='black' />
          </div>



        {/* Desktop view menu items */}
        <div className="hidden lg:flex lg:space-x-10 items-center">
          <div  onMouseEnter={showSubMenuOnHover} 
              onMouseLeave={hideSubMenuOnLeave}  className='flex items-center space-x-2'>
            <FaRegUserCircle size={24} color='black' />
            <div 
             
              className="relative flex gap-2 items-center cursor-pointer"
            >
              <Link to={''} className="text-gray-700 hover:text-gray-900  text-base font-poppins">Login</Link>
              <FaAngleDown />
              {/* Sub-menu */}
              {showSubMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 bg-white flex flex-col p-4 w-80 rounded-lg shadow-lg "
                  onMouseEnter={showSubMenuOnHover}
                  onMouseLeave={hideSubMenuOnLeave}
                >


<div className='flex items-start justify-between gap-2 shadow-sm mb-4'>
                  <p className='font-poppins mb-2 text-base  '>New Customer</p>     <Link to="/" className='font-poppins mb-2 text-base text-blue-500 '>Signup</Link>
                  </div>

<div className='flex items-start gap-2'>
                  <FaRegUserCircle size={20}  color='black'/>      <Link to="/" className='font-poppins mb-2 text-base  '>My Profile</Link>
                  </div>


                  
<div className='flex items-start gap-2'>
                  <FaToolbox  size={20}  color='black'/>      <Link to="/" className='font-poppins mb-2 text-base  '>Orders</Link>
                  </div>

                  <div className='flex items-start gap-2'>
                  <CiHeart size={20}  color='black'/>      <Link to="/" className='font-poppins mb-2 text-base  '>Wishlist</Link>
                  </div>

                  <div className='flex items-start gap-2'>
                  <CiGift size={20}  color='black'/>      <Link to="/" className='font-poppins mb-2 text-base  '>Rewards</Link>
                  </div>
               
                
               
              
                </motion.div>
              )}
            </div>
          </div>
          <div className='flex space-x-2'>
            <FaShoppingCart size={24} color='black' />
            <Link to={''} className="text-gray-700 hover:text-gray-900 text-base  font-poppins">Cart</Link>
          </div>
          <div className='flex space-x-2'>
            <CiShop size={24} color='black' />
            <Link to={''} className="text-gray-700 hover:text-gray-900 text-base  font-poppins">Become a seller</Link>
          </div>

          <div 
              onMouseEnter={showSubMenuHemOnHover} 
              onMouseLeave={hideSubMenuHemOnLeave} 
              className="relative flex gap-2 items-center cursor-pointer"
            >
           
           <HiOutlineDotsVertical size={24} color='black' />
              {/* Sub-menu */}
              {showSubHemMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 bg-white flex flex-col p-4 w-64 rounded-lg shadow-lg "
                  onMouseEnter={showSubMenuHemOnHover}
                  onMouseLeave={hideSubMenuHemOnLeave}
                >
                  <div className='flex items-start gap-2'>
                  <CiBellOn size={20}  color='black'/>   <Link to="/" className='font-poppins mb-2 text-base '>Notification </Link>
                  </div>

                  <div className='flex items-start gap-2'>
                  <TfiHeadphoneAlt size={20}  color='black'/>     <Link to="/" className='font-poppins mb-2 text-base  '>24x7 Customer Support</Link>
                  </div>


                  <div className='flex items-start gap-2'>
                  <BsGraphUp size={20}  color='black'/>     <Link to="/" className='font-poppins mb-2  text-base '>Advertise</Link>
                  </div>


                  <div className='flex items-start gap-2'>
                  <IoMdDownload size={20}  color='black'/>      <Link to="/" className='font-poppins text-base '>Download App</Link>
                  </div>
              
                
                 
                 
                </motion.div>
              )}
            </div>

     



        </div>

  
        

        {/* Mobile view menu items */}
        <motion.div
          className={`lg:hidden absolute top-16 right-4 bg-white rounded-lg shadow-lg ${menuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className='flex flex-col space-y-2 p-4'>
            <div className='flex items-center space-x-2'>
              <FaRegUserCircle size={24} color='black' />
              <Link to={'/'} className="text-gray-700 hover:text-gray-900  font-poppins">Login</Link>
            </div>
            <div className='flex items-center space-x-2'>
              <FaShoppingCart size={24} color='black' />
              <Link to={'/'} className="text-gray-700 hover:text-gray-900  font-poppins">Cart</Link>
            </div>
            <div className='flex items-center space-x-2'>
              <CiShop size={24} color='black' />
              <Link to={'/'} className="text-gray-700 hover:text-gray-900  font-poppins">Become a seller</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
