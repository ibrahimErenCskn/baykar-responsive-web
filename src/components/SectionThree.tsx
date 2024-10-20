import React from 'react'
import SignUpButton from './SignUpButton'
import Image from 'next/image'
import desktop from '@/assets/Desktop.png'
import CheckIcon from './icons/CheckIcon'

export default function SectionThree() {
    return (
        <div className='w-full px-4 pt-4 pb-14 sm:py-40 sm:px-20 bg-quinary font-roboto'>
            <div className='bg-white shadow-blackShadowTwo py-9 px-4 sm:p-20 sm:gap-20 rounded-[30px] flex flex-col flex-wrap'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-6 justify-center items-center sm:items-start'>
                        <span className='font-bold sm:font-extrabold text-[32px] sm:text-[56px] sm:text-left text-center'>Why join us</span>
                        <div className='flex flex-col gap-1 w-full'>
                            <span className='flex sm:text-xl text-base'><CheckIcon /> Est et in pharetra magna adipiscing ornare aliquam.</span>
                            <span className='flex sm:text-xl text-base'><CheckIcon /> Tellus arcu sed consequat ac velit ut eu blandit.</span>
                            <span className='flex sm:text-xl text-base'><CheckIcon /> Ullamcorper ornare in et egestas dolor orci.</span>
                        </div>
                        <SignUpButton type='tertiary' />
                    </div>
                </div>
            </div>
        </div>
    )
}
