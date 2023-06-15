import React, { ReactNode } from 'react'

type Props = {
    variant?: string
    children: ReactNode | string
    className?: string
}

export default function Button({ variant = 'primary', children, className }: Props) {
    const checkVariant = (variantcheck: string) => {
        switch (variantcheck) {
            case 'primary':
                return 'bg-black text-white'
            case 'secondary':
                return ''
        }
    }

    return (
        <button
            className={`border border-black rounded-full py-3 w-full my-2 flex justify-center items-center gap-1 ${checkVariant(
                variant
            )} ${className}`}
        >
            {children}
        </button>
    )
}
