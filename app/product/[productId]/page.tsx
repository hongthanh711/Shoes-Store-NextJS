'use client'
import HeartIcon from '@/public/svg/HeartIcon'
import React, { useState } from 'react'
import CarouselDetailProduct from '../../../components/CarouselDetailProduct/CarouselDetailProduct'
import CarouselRelatedProduct from '@/components/CarouselRelatedProduct/CarouselRelatedProduct'
import Button from '@/components/Button/Button'
import { useAppSelector } from '@/store/hook'
import { SizeType } from '@/types/ShoesItem.type'

export default function DetailProduct() {
    // const isLogin = useAppSelector((state) => state.auth.isLogin)
    // console.log(isLogin)
    const sizesData: SizeType[] = [
        {
            size: 'UK 6',
            enabled: true,
        },
        {
            size: 'UK 6.5',
            enabled: true,
        },
        {
            size: 'UK 7',
            enabled: true,
        },
        {
            size: 'UK 7.5',
            enabled: true,
        },
        {
            size: 'UK 8',
            enabled: true,
        },
        {
            size: 'UK 8.5',
            enabled: true,
        },
        {
            size: 'UK 9',
            enabled: true,
        },
        {
            size: 'UK 9.5',
            enabled: true,
        },
        {
            size: 'UK 10',
            enabled: true,
        },
        {
            size: 'UK 10.5',
            enabled: true,
        },
        {
            size: 'UK 11',
            enabled: false,
        },
        {
            size: 'UK 11.5',
            enabled: false,
        },
    ]

    const [sizeActive, setSizeActive] = useState<number>(-1)

    const toggleActive = (index: number) => {
        setSizeActive(index)
    }

    return (
        <div className="p-8">
            <div className="flex gap-10">
                <div className="basis-7/12">
                    <CarouselDetailProduct />
                </div>
                <div className="basis-5/12">
                    <div>
                        <div>
                            <h2 className="font-semibold text-[20px]">Jordan Retro 6G</h2>
                            <p>Men&apos;s Golf Shoes</p>
                        </div>
                        <div>
                            <p>MRP : $ 19 695.00</p>
                            <p>incl of taxes</p>
                            <p>(Aslo include all application duties)</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p>Select Size</p>
                            <p>Select Guide</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {sizesData.map((size: SizeType, index) => {
                                return (
                                    <div
                                        key={size.size}
                                        className={`border py-2 text-center rounded-sm cursor-pointer ${
                                            index === sizeActive && 'border-black'
                                        } ${!size.enabled && 'bg-[#DDDDDD] pointer-events-none'}`}
                                        onClick={() => toggleActive(index)}
                                    >
                                        {size.size}
                                    </div>
                                )
                            })}
                        </div>
                        <p>Size selection is required</p>
                    </div>
                    <div>
                        <Button>Add to Card</Button>
                        <Button variant="secondary">
                            <span>Wishlist</span>
                            <div className="w-4 h-4">
                                <HeartIcon />
                            </div>
                        </Button>
                    </div>
                    <div>
                        <p className="text-[18px] font-semibold">Product Detail</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam
                            adipisci dolore eos. Commodi ad facilis, molestias doloribus velit
                            numquam? Quod fugiat accusantium quidem eligendi enim veritatis nulla
                            possimus itaque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut
                            incidunt suscipit vitae fugiat asperiores maxime tempora, soluta
                            provident? Asperiores exercitationem excepturi autem delectus, tempora
                            corrupti hic minima. Incidunt, quam?
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <CarouselRelatedProduct />
            </div>
        </div>
    )
}
