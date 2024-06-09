import React from 'react'
import burger1 from '../../../public/burger1.png'
import Image from 'next/image'
import { LuPlus } from "react-icons/lu";

export default function BestSellersCards() {
    return (
        <div className='bg-white flex flex-col justify-between rounded-3xl cursor-pointer w-full h-full '>
            <div className='px-5 py-5 w-full'>
                <p className='uppercase pb-2 font-semibold'>
                    Beef
                </p>
                <h1 className='text-[2vw]  hover:text-red-500 transition-all duration-500 font-bold  leading-none'>
                    Bacon+Cheese<br />+Green Burger
                </h1>
                <div>
                    <Image src={burger1} />
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <p className='font-bold text-[2vw]'>
                            $6.00
                        </p>
                        <p className='text-neutral-500'>
                            220gr / 600 cal
                        </p>
                    </div>
                    <div className='w-20 h-20  flex justify-center  items-center text-4xl text-red-500 border-2 hover:bg-red-500 hover:text-white   border-red-500 rounded-full transition-all duration-500'>
                        <LuPlus />
                    </div>
                </div>
            </div>
        </div>
    )
}
