import DeleteBinLineIcon from '@/public/svg/DeleteBinIcon'
import Image from 'next/image'
import React from 'react'

export default function Cart() {
    return (
        <div className="p-10">
            <h1 className="font-semibold text-[30px] text-center">Shopping Cart</h1>
            <div>
                <div className="flex gap-10">
                    <div className="w-2/3">
                        <p className="font-semibold text-[18px]">Cart items</p>
                        <div className="flex gap-4 border-b-[1px] p-4">
                            <div className="relative basis-3/12 aspect-square object-cover object-center">
                                <Image fill className="w-full h-full" src="/p1.png" alt="" />
                            </div>
                            <div className="basis-9/12">
                                <div className="flex items-end justify-between">
                                    <p className="text-[20px]">Jordan Retro 6 G</p>
                                    <p className="mt-2 text-grey text-[14px] font-semibold">
                                        MRP : $ 19 695.00
                                    </p>
                                </div>
                                <p className="capitalize text-grey">Men&apos;s golf shoes</p>
                                <div className="flex justify-between items-end mt-4 text-grey">
                                    <div className="flex gap-4">
                                        <div>Size</div>
                                        <div>Quality</div>
                                    </div>
                                    <div className="w-4 h-4">
                                        <DeleteBinLineIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-4">
                        <p className="font-semibold text-[18px]">Summary</p>
                        <div className="bg-gray-200 rounded-lg p-5">
                            <div className="flex justify-between font-semibold">
                                <p className="uppercase">Subtotal</p>
                                <p>MRP : $ 19 695.0</p>
                            </div>
                            <div className="h-[0.5px] bg-black w-[90%] mx-auto my-2"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis
                                hic rerum quae mollitia recusandae a vel accusantium error rem,
                                pariatur officiis odit architecto nisi similique aut! Mollitia, id
                                perspiciatis.
                            </p>
                        </div>
                        <button className="border border-black rounded-full py-3 w-full my-2 flex justify-center items-center gap-1 bg-black text-white">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
