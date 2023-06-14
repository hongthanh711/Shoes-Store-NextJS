import HeartIcon from '@/public/svg/HeartIcon'
import React from 'react'
import CarouselDetailProduct from '../../../components/CarouselDetailProduct/CarouselDetailProduct'
import CarouselRelatedProduct from '@/components/CarouselRelatedProduct/CarouselRelatedProduct'

export default function DetailProduct() {
    return (
        <div className="p-8">
            {/* <CarouselDetailProduct /> */}
            <div className="flex">
                <div className="basis-7/12">
                    <div className="w-full">aa</div>
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
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                            <div className="border py-2 text-center rounded-sm">UK 6</div>
                        </div>
                        <p>Size selection is required</p>
                    </div>
                    <div>
                        <button className="border border-black rounded-full py-3 w-full my-2 flex justify-center items-center gap-1 bg-black text-white">
                            Add to Card
                        </button>
                        <button className="border border-black rounded-full py-3 w-full my-2 flex justify-center items-center gap-1">
                            <span>Wishlist</span>
                            <div className="w-4 h-4">
                                <HeartIcon />
                            </div>
                        </button>
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