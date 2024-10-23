import Link from 'next/link'
import React from 'react'
import { SignUpButtonProps } from '@/constants/global';

export default function SignUpButton({ type, }: SignUpButtonProps) {
    let className = 'font-roboto font-medium border-2 rounded-lg text-center';
    if (type === "primary") {
        className += ' border-tertiary text-tertiary p-3 w-[150px]';
    } else if (type === "secondary") {
        className += ' text-white border-white p-3 w-44';
    } else if (type === "tertiary") {
        className += ' text-tertiary p-3 w-44 border-tertiary z-40';
    }
    return (
        <Link href='/sign-up' className={className}>
            Sign up now
        </Link>
    )
}
