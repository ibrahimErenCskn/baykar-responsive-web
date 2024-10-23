"use client"

import React from 'react'
import vector from '@/assets/Vector.png'
import CupIcon from './icons/CupIcon'
import CakeIcon from './icons/CakeIcon'
import TvIcon from './icons/TvIcon'
import Image from 'next/image'
import SignUpButton from './SignUpButton'

export default function SectionOne() {
    return (
        <div className={"w-full bg-white sm:bg-quinary relative overflow-hidden"}>
            <div className="w-full flex flex-col sm:gap-0 gap-12 pt-0 md:pt-20">
                <svg width="100%" height="100%" className='absolute hidden lg:flex'>
                    <polygon points="0,900 1920,900 1920,30" fill="#FEF3C7" />
                </svg>
                <svg width="100%" height="100%" className='absolute flex lg:hidden'>
                    <polygon points="0,900 1920,900 1920,-900" fill="#FEF3C7" />
                </svg>
                <div className={'w-full py-12 px-4 text-center sm:text-left gap-8 sm:p-20 sm:gap-20 flex flex-wrap lg:flex-nowrap items-center'}>
                    <div className={'flex flex-col max-w-[714px] gap-8 sm:gap-12 flex-wrap'}>
                        <span className={'text-[56px] sm:text-7xl font-roboto font-extrabold'}>Collectible Sneakers</span>
                        <span className={'text-lg font-normal font-roboto'}>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</span>
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
                    <div className='flex justify-center items-center relative flex-1 md:mt-0 mt-12'>
                        <div className={'bg-[#FBBF24] lg:w-[372px] lg:h-[372px] w-[272px] h-[276px] rounded-[50px] overflow-visible'}>
                            <div className='bg-[url("https://i.hizliresim.com/8z4v82u.png")] bg-contain w-full h-full bg-no-repeat transform scale-125'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-nowrap flex-wrap py-12 px-4 text-center gap-8 sm:text-left sm:p-20 sm:gap-20 justify-between z-20 bg-primary lg:bg-transparent">
                    <div className="flex flex-col gap-4 sm:items-start items-center sm:max-w-[373px] h-max lg:h-52 overflow-visible lg:overflow-hidden">
                        <CupIcon />
                        <span className="text-xl font-roboto font-medium">Nibh viverra</span>
                        <span className="font-roboto text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-start items-center sm:max-w-[373px] h-max lg:h-52 overflow-visible lg:overflow-hidden">
                        <CakeIcon />
                        <span className="text-xl font-roboto font-medium">Cursus amet</span>
                        <span className="font-roboto text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-start items-center sm:max-w-[373px] h-max lg:h-52 overflow-visible lg:overflow-hidden">
                        <TvIcon />
                        <span className="text-xl font-roboto font-medium">Ipsum fermentum</span>
                        <span className="font-roboto text-lg">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
