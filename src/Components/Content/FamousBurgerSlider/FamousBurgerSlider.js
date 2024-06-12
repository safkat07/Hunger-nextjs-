import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import img from '../../../../public/sliderWaveSection.svg'
import img2 from '../../../../public/wave-haikei.svg'
import Image from 'next/image'
import beefLogo from '../../../../public/beefLogo.png'
import { LuPlus } from "react-icons/lu";


import burger1 from '../../../../public/burger1.png'
import burger3 from '../../../../public/burger3.png'
import burger4 from '../../../../public/burger4.png'
export default function FamousBurgerSlider() {
    return (
        <div className=' bg-[#0D0E13]  flex justify-center items-center mx-auto relative'>


            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper text-white"
            >
                <SwiperSlide>
                    <div className='   flex items-center justify-center mx-auto w-[80%]'>
                        <div className='mx-auto  '>
                            <div>
                                <p className='headingFont  text-8xl'>
                                    Worlds Famous Burger
                                </p>

                                <p className='text-white w-3/4 gap-7 flex items-center'>
                                    <Image className='w-1/6 ' src={beefLogo} />
                                    100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun
                                </p>
                            </div>

                            <div className='bg-white px-2 rounded-full group cursor-pointer py-3   flex justify-between w-1/3  text-black'>
                                <div className='pl-7'>
                                    <p className='text-2xl font-semibold'>
                                        $12.00
                                    </p>
                                    <p className='font-medium'>
                                        220gr / 600 cal
                                    </p>
                                </div>
                                <div className='xl:w-16 xl:h-16 cursor-pointer  md:w-10 md:h-10  flex justify-center  items-center text-4xl text-red-500 border-2 group-hover:bg-red-500 group-hover:text-white   border-red-500 rounded-full transition-all duration-500'>
                                    <LuPlus />
                                </div>
                            </div>
                        </div>
                        <Image className='w-full    mx-auto' src={burger1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='   flex items-center justify-center mx-auto w-[80%]'>
                        <div className='mx-auto  '>
                            <div>
                                <p className='headingFont  text-8xl'>
                                    Popular Shoombacon
                                </p>

                                <p className='text-white w-3/4 gap-7 flex items-center'>
                                    <Image className='w-1/6 ' src={beefLogo} />
                                    100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun
                                </p>
                            </div>

                            <div className='bg-white px-2 rounded-full group cursor-pointer py-3   flex justify-between w-1/3  text-black'>
                                <div className='pl-7'>
                                    <p className='text-2xl font-semibold'>
                                        $12.00
                                    </p>
                                    <p className='font-medium'>
                                        220gr / 600 cal
                                    </p>
                                </div>
                                <div className='xl:w-16 xl:h-16 cursor-pointer  md:w-10 md:h-10  flex justify-center  items-center text-4xl text-red-500 border-2 group-hover:bg-red-500 group-hover:text-white   border-red-500 rounded-full transition-all duration-500'>
                                    <LuPlus />
                                </div>
                            </div>
                        </div>
                        <Image className='w-full    mx-auto' src={burger3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='   flex items-center justify-center mx-auto w-[80%]'>
                        <div className='mx-auto  '>
                            <div>
                                <p className='headingFont  text-8xl'>
                                    Best Local Tuna Burger
                                </p>

                                <p className='text-white w-3/4 gap-7 flex items-center'>
                                    <Image className='w-1/6 ' src={beefLogo} />
                                    100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun
                                </p>
                            </div>

                            <div className='bg-white px-2 rounded-full group cursor-pointer py-3   flex justify-between w-1/3  text-black'>
                                <div className='pl-7'>
                                    <p className='text-2xl font-semibold'>
                                        $12.00
                                    </p>
                                    <p className='font-medium'>
                                        220gr / 600 cal
                                    </p>
                                </div>
                                <div className='xl:w-16 xl:h-16 cursor-pointer  md:w-10 md:h-10  flex justify-center  items-center text-4xl text-red-500 border-2 group-hover:bg-red-500 group-hover:text-white   border-red-500 rounded-full transition-all duration-500'>
                                    <LuPlus />
                                </div>
                            </div>
                        </div>
                        <Image className='w-full   mx-auto' src={burger4} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
