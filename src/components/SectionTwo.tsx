import React from 'react'
import SignUpButton from './SignUpButton'
import ItemCard from './ItemCard'
import shoes1 from '@/assets/Picture.png'
import shoes2 from '@/assets/Shoes2.png'
import shoes3 from '@/assets/Shoes3.png'

export default function SectionTwo() {
    return (
        <div className='bg-quaternary w-full flex flex-col py-12 px-4 gap-8 sm:p-10 sm:gap-10'>
            <div className='flex sm:justify-between justify-center items-center flex-wrap gap-8 p-10'>
                <span className='text-[32px] sm:text-[56px] font-roboto font-bold sm:font-extrabold text-white'>The best of the best</span>
                <SignUpButton type='secondary' />
            </div>
            <div className={`flex flex-wrap md:flex-nowrap relative items-center justify-between gap-12 bg-[length:100%_72%] md:bg-[length:100%_100%] bg-[url("https://i.hizliresim.com/5wbmbum.png")] md:bg-[url("https://i.hizliresim.com/4qpr57r.png")] bg-[center_bottom_8rem] md:bg-center bg-no-repeat p-4 md:p-8 `}>
                <ItemCard picture={shoes1} />
                <ItemCard picture={shoes2} />
                <ItemCard picture={shoes3} />
            </div>
        </div>
    )
}
