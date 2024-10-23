"use client"

import { headerNavigation } from '@/constants/headerNavigation'
import Link from 'next/link'
import React, { useEffect } from 'react'
import SignUpButton from './SignUpButton'

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        if (isOpen) {
            // Modal açıldığında body'sini kilitler
            document.body.style.overflow = 'hidden';
        } else {
            // Modal kapandığında body'sini normal haline döndürür
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <header className='w-full flex justify-between items-center py-4 px-4 sm:py-6 sm:px-20 bg-white sm:bg-quinary'>
                <span className='text-3xl font-roboto text-tertiary font-bold'>
                    Collers
                </span>
                <div className='hidden xl:flex cursor-pointer select-none gap-4 items-center'>
                    {headerNavigation.map((item, index) => (
                        <Link href={item.href} key={index} className='font-roboto text-tertiary py-2 px-3 font-medium'>
                            {item.name}
                        </Link>
                    ))}
                    <SignUpButton type='primary' />
                </div>
                <div className='flex xl:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5.5H13" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12.5H8" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 19.5H3" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </header>
            {isOpen && (
                <div className='w-full fixed inset-0 bg-black bg-opacity-65 backdrop-blur-sm flex justify-end items-start z-50'>
                    <div className='w-full h-screen bg-white p-4'>
                        <div className='flex justify-end cursor-pointer border-b pb-4' onClick={() => setIsOpen(!isOpen)}>
                            Close
                        </div>
                        <div className='flex flex-col gap-4 items-center pt-8'>
                            {headerNavigation.map((item, index) => (
                                <Link href={item.href} key={index} className='font-roboto text-tertiary py-2 px-3 font-medium'>
                                    {item.name}
                                </Link>
                            ))}
                            <SignUpButton type='primary' />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
