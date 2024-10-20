"use client"

import React from 'react'
import shoes from '@/assets/Shoes.png'
import vector from '@/assets/Vector.png'
import CupIcon from './icons/CupIcon'
import clsx from 'clsx'
import CakeIcon from './icons/CakeIcon'
import TvIcon from './icons/TvIcon'
import Image from 'next/image'
import SignUpButton from './SignUpButton'

export default function SectionOne() {
    return (
        <div className={clsx("w-full bg-quinary")}>
            <div className="w-full flex flex-col sm:gap-0 gap-12">
                <div className={clsx('w-full py-12 px-4 text-center sm:text-left gap-8 sm:p-20 sm:gap-20 flex flex-wrap items-center')}>
                    <div className={clsx('flex flex-col max-w-[714px] gap-8 sm:gap-12 flex-wrap')}>
                        <span className={clsx('text-[56px] sm:text-7xl font-roboto font-extrabold')}>Collectible Sneakers</span>
                        <span className={clsx('text-lg font-normal font-roboto')}>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</span>
                        <div className='flex sm:gap-4 justify-around sm:justify-normal'>
                            <SignUpButton type='tertiary' />
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={vector}
                                    width={20}
                                    height={20}
                                    alt='image'
                                />
                                <span className='text-tertiary font-roboto font-medium'>Watch Demo</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center relative flex-1'>
                        <div className={clsx('bg-[#FBBF24] sm:w-[372px] sm:h-[372px] w-[272px] h-[276px] rounded-[50px] absolute top-16')}>
                        </div>
                        <Image
                            className='object-cover z-10'
                            src={shoes}
                            width={486}
                            height={388}
                            alt='image'
                        />
                    </div>
                </div>
                <div className="flex flex-wrap py-12 px-4 text-center gap-8 sm:text-left sm:p-20 sm:gap-20 justify-between">
                    <div className="flex flex-col gap-4 sm:items-start items-center sm:max-w-[373px]">
                        <CupIcon />
                        <span className="text-xl font-roboto font-medium">Nibh viverra</span>
                        <span className="font-roboto text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-start items-center sm:max-w-[373px]">
                        <CakeIcon />
                        <span className="text-xl font-roboto font-medium">Cursus amet</span>
                        <span className="font-roboto text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-start items-center sm:max-w-[373px]">
                        <TvIcon />
                        <span className="text-xl font-roboto font-medium">Ipsum fermentum</span>
                        <span className="font-roboto text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
