'use client'
import CartIcon from '@/public/svg/CartIcon'
import DownOpenIcon from '@/public/svg/DownOpenIcon.tsx'
import HeartIcon from '@/public/svg/HeartIcon'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

// const dropDownData = [{
//     href : 'jordan'
// }]

export default function Header({}: Props) {
    const [isDropDown, setIsDropDown] = useState<boolean>(false)
    const router = useRouter()
    const dropDownRef = useRef<any>()

    useEffect(() => {
        let handler = (e: any) => {
            if (!dropDownRef.current.contains(e.targer)) {
                setIsDropDown(false)
                // console.log(2)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [isDropDown])

    // useEffect(() => {
    //     let handler = (e: any) => {
    //         if (!dropDownRef.current.contains(e.targer) && isDropDown) {
    //             setIsDropDown(false)
    //             console.log(2)
    //         }
    //     }
    //     document.addEventListener('scroll', handler)
    // }, [isDropDown])
    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="max-w-[70%] mx-auto flex justify-between p-5 items-center">
                <div>
                    <Link href="/">
                        <Image width={40} height={20} src="/logo.svg" alt="logo store" />
                    </Link>
                </div>

                <div>
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li
                            onClick={() => setIsDropDown(!isDropDown)}
                            className="relative"
                            ref={dropDownRef}
                        >
                            <div className="flex gap-2 cursor-pointer">
                                <div>Categories</div>
                                <div className="w-3">
                                    <DownOpenIcon />
                                </div>
                                {isDropDown && (
                                    <div className="absolute top-full border-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Jordan
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Sneaker
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Running Shoes
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Football Shoes
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <div className="relative">
                        {/* <div className="text-[10px] p-1 bg-[#DC2626] absolute z-20 -top-1 right-0 rounded-full">
                            51
                        </div> */}
                        <div className="transition-all duration-200 hover:bg-[#00000026] p-2 rounded-full">
                            <div className="w-5">
                                <HeartIcon />
                            </div>
                        </div>
                    </div>
                    <div className="transition-all duration-200 hover:bg-[#00000026] p-2 rounded-full">
                        <div onClick={() => router.push('/cart')} className="w-5">
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}