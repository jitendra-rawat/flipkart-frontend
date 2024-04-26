import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdNavigateNext } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MySlider = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        nextArrow: <FaAngleRight color='black' size={120} />, 
        prevArrow: <FaAngleLeft  color='black' size={120}  />, 
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          }
        ]
      };
    

  return (
    <section className='px-8 mx-auto container py-10'>
      <Slider {...settings}>
        <div>
         <img className='w-full object-contain lg:object-cover' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/196881c1ecfbaad5.jpg?q=20" alt="" />
        </div>
        <div>
         <img className='w-full object-contain lg:object-cover' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20" alt="" />
        </div>
        <div>
       <img className='w-full object-contain lg:object-cover' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8895f907e967aed9.png?q=20" alt="" />
        </div>
        <div>
       <img className='w-full object-contain lg:object-cover' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="" />
        </div>


        <div>
       <img className='w-full object-contain lg:object-cover' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20" alt="" />
        </div>


    
     
      </Slider>
    </section>
  );
}

export default MySlider;
