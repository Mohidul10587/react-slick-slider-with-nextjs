
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataDigitalBestSeller } from '../components/data';
import Image from 'next/image';
// import imgGirl from './assets/images/defaultImage.jpg';

function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <div className=' mt-10'>

<h1 className='text-center text-2xl font-bold'>This is a Slider</h1>

     <div className='flex justify-center'>
      <div className="w-9/12 mt-3">

        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div key={item.id} className=" border border-white bg-black rounded-lg overflow-hidden h-[400px] text-white cursor-pointer">

              <div>
                <Image src={item.linkImg} height={250} width={300} alt={item.title} />
                <h1 className='m-5'>{item.title}</h1>
              </div>

              <div className=" mx-5 my-3">
                <h3>{item.price}</h3>
                <span>{item.category}</span>
                <div className='bg-red-500 h-[2px] w-24 mt-3'></div>
              </div>
            </div>
          ))}

        </Slider>

      </div>
    </div>
   </div>
  );
}

export default Home;