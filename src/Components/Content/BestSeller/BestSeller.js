import BestSellersCards from '@/Components/UseableComponents/BestSellersCards'
import HeadingTitle from '@/Components/UseableComponents/HeadingTitle'
import Wrapper from '@/Components/UseableComponents/Wrapper'
import React from 'react'

export default function BestSeller() {
    return (
        <Wrapper>
            <HeadingTitle headingTitle={"Bestsellers"} />

            <div className='grid pt-16 lg:grid-cols-3 grid-cols-1 gap-10 justify-center items-center  w-3/4 mx-auto'>
                <BestSellersCards />
                <BestSellersCards />
                <BestSellersCards />
            </div>
        </Wrapper>
    )
}
