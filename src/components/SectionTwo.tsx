import React from 'react'
import SignUpButton from './SignUpButton'
import ItemCard from './ItemCard'

export default function SectionTwo() {
    return (
        <div className='bg-quaternary w-full flex flex-col py-12 px-4 gap-8 sm:p-20 sm:gap-20'>
            <div className='flex sm:justify-between justify-center items-center flex-wrap gap-8'>
                <span className='text-[32px] sm:text-[56px] font-roboto font-bold sm:font-extrabold text-white'>The best of the best</span>
                <SignUpButton type='secondary' />
            </div>
            <div className='flex flex-wrap relative items-center justify-between gap-12'>
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}
