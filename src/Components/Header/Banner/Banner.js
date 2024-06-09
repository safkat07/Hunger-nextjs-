
import Image from 'next/image'
import bannerImage from '../../../../public/bannerImage.png'

export default function Banner() {
    return (
        <div className=" text-6xl flex justify-center bg-red-500 min-h-dvh pt-36">
            <div className="flex relative flex-col text-[25vw] text-center  headingFont  justify-center items-center">
                <h1 className="leading-[18vw] inline">
                    Delicious <br />
                    Burger
                </h1>
                <div className='absolute '>
                    <Image className='xl:w-3/4 mx-auto' src={bannerImage} />
                </div>
            </div>

        </div>
    )
}