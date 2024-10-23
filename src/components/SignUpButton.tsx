import Link from 'next/link'
import React from 'react'
import clsx from 'clsx';
import { SignUpButtonProps } from '@/constants/global';

export default function SignUpButton({ type, }: SignUpButtonProps) {
    return (
        <Link href='/sign-up' className={clsx(
            'font-roboto font-medium border-2 rounded-lg text-center',
            type === "primary" && 'border-tertiary text-tertiary p-3 w-[150px]',
            type === "secondary" && 'text-white border-white p-3 w-44',
            type === "tertiary" && 'text-tertiary p-3 w-44 border-tertiary z-40',
        )}>
            Sign up now
        </Link>
    )
}
