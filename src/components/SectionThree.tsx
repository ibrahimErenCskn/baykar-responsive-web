import React from 'react'
import SignUpButton from './SignUpButton'
import CheckIcon from './icons/CheckIcon'

export default function SectionThree() {
    return (
        <div className='w-full sm:mt-0 mt-4 px-4 pt-4 pb-14 sm:py-40 sm:px-20 bg-white sm:bg-quinary font-roboto overflow-hidden'>
            <div className='bg-white shadow-blackShadowTwo px-4 sm:p-20 sm:gap-20 rounded-[30px] flex justify-between flex-wrap relative h-[600px] sm:h-max'>
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
                <div className='bg-[url("https://i.hizliresim.com/ahkhyj7.png")] lg:bg-[url("https://i.hizliresim.com/ahkhyj7.png")] bg-contain bg-[center_top_1rem] lg:bg-[center_right_2.7rem] w-full lg:w-[425px] h-[345px] lg:h-[325px] bg-no-repeat transform scale-[1.4] lg:scale-[2]'>
                </div>
            </div>
        </div>
    )
}
