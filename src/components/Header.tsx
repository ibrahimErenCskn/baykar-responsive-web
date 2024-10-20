import { headerNavigation } from '@/constants/headerNavigation'
import Link from 'next/link'
import React from 'react'
import SignUpButton from './SignUpButton'

export default function Header() {
    return (
        <header className='w-full flex justify-between items-center py-6 px-20 bg-quinary'>
            <span className='text-3xl font-roboto text-tertiary font-bold'>
                Collers
            </span>
            <div className='flex cursor-pointer select-none gap-4 items-center'>
                {headerNavigation.map((item, index) => (
                    <Link href={item.href} key={index} className='font-roboto text-tertiary py-2 px-3 font-medium'>
                        {item.name}
                    </Link>
                ))}
                <SignUpButton type='primary' />
            </div>
        </header>
    )
}
