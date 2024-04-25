import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { MdHelp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className=" mx-auto ">

        {/* upper section */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
         
            <h3 className="text-md text-gray-500 font-semibold mb-2">About</h3>
            <p className='text-xs font-poppins mb-1'>Contact Us</p>
            <p className='text-xs font-poppins mb-1'>About Us</p>
            <p className='text-xs font-poppins mb-1'>Carrers</p>
            <p className='text-xs font-poppins mb-1'>Flipkart Stories</p>
            <p className='text-xs font-poppins mb-1'>Press</p>
            <p className='text-xs font-poppins mb-1'>Corporate Information</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
         
            <h3 className="text-md font-semibold mb-2 text-gray-500 ">Group Companies</h3>
            <p className='text-xs font-poppins mb-1'>Myntra</p>
            <p className='text-xs font-poppins mb-1'>Flipkart Wholescale</p>
            <p className='text-xs font-poppins mb-1'>Cleartrip</p>
            <p className='text-xs font-poppins mb-1'>Shopsy</p>
           
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
          
            <h3 className="text-md font-semibold mb-2 text-gray-500">Help</h3>
            <p className='text-xs font-poppins mb-1'>Payments</p>
            <p className='text-xs font-poppins mb-1'>Shipping</p>
            <p className='text-xs font-poppins mb-1'>Cancelaation and Returns</p>
            <p className='text-xs font-poppins mb-1'>FAQS</p>
            <p className='text-xs font-poppins mb-1'>Report Infringement</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
        
           
            <h3 className="text-md font-semibold mb-2 text-gray-500">Cancellation & Returns</h3>
            <p className='text-xs font-poppins mb-1'>Terms of Use</p>
            <p className='text-xs font-poppins mb-1'>Security</p>
            <p className='text-xs font-poppins mb-1'>Privacy</p>
            <p className='text-xs font-poppins mb-1'>Sitemap</p>
            <p className='text-xs font-poppins mb-1'>Grieveness Redressal</p>
            <p className='text-xs font-poppins mb-1'>EPR Compliance</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
      
            <h3 className="text-md font-semibold mb-2 text-gray-500 ">Mail Us</h3>
            <p className='text-xs font-poppins mb-1'>Flipkart Internet Private Limited,</p>
            <p className='text-xs font-poppins  mb-1'> Buildings Alyssa, Begonia & </p>
            <p className='text-xs font-poppins mb-1'> Clove Embassy Tech Village, </p>
            <p className='text-xs font-poppins mb-1'> Outer Ring Road, Devarabeesanahalli Village, </p>
             <p className='text-xs font-poppins mb-1'> Bengaluru, 560103, </p>
             <p className='text-xs font-poppins mb-1'>  Karnataka, India </p>
             <h3 className="text-md font-semibold mb-2 text-gray-500 mt-2 ">Social</h3>
             <div className='flex gap-2'>
             <FaFacebook size={20} />
             <FaTwitter size={20}  />
             <FaYoutube size={20}  />
             </div>

         
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-4 md:mb-0">
         
            <h3 className="text-md font-semibold mb-2 text-gray-500">Registered Office Address:</h3>
            <p className='text-xs font-poppins mb-1'>Flipkart Internet Private Limited, </p>
            <p className='text-xs font-poppins mb-1'>  Buildings Alyssa, Begonia & </p>
            <p className='text-xs font-poppins mb-1'>  Clove Embassy Tech Village,  </p>
            <p className='text-xs font-poppins mb-1'> Outer Ring Road, Devarabeesanahalli Village, </p>
             <p className='text-xs font-poppins mb-1'> Bengaluru, 560103, </p>
             <p className='text-xs font-poppins mb-1'>  Karnataka, India </p>
             <p className='text-xs font-poppins mb-1'> CIN : U51109KA2012PTC066107  </p>
             <p className='text-xs font-poppins mb-1'> Tel : 044-45614700  </p>
          </div>
        </div>

<hr className='my-8' />
        {/* lower section */}
        <div className="flex flex-wrap justify-between">
            <div className='flex gap-2'>
            <p className='text-xs font-poppins mb-1'>Become a Seller</p><CiShop />
            </div>
            <div className='flex gap-2'>
            <p className='text-xs font-poppins mb-1'>Advertise</p><CiShop />
            </div>

            <div className='flex gap-2'>
            <p className='text-xs font-poppins mb-1'>Gift Cards</p><CiGift  />
            </div>

            <div className='flex gap-2'>
            <p className='text-xs font-poppins mb-1'>Help Center</p><MdHelp />
            </div>

            <div className='flex gap-2'>
            <FaRegCopyright /> <p className='text-xs font-poppins mb-1'>2007-2014 Flipkart.com</p>
            </div>

        
       
       
       
       
        
       
       

        </div>
      </div>
    </footer>
  );
}

export default Footer;
