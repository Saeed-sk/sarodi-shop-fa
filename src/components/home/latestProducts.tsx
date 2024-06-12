'use client'
import React, {Fragment, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import {useDispatch} from "react-redux";
import Link from "next/link";
import IconCall from "@/components/icons/index/iconCall";

interface PageProps {
    latestProducts: {
        id: number,
        image: string,
        title: string
        category: string
    }[]
}

export const LatestProducts = ({latestProducts}: PageProps) => {
    const dispatchLang = useDispatch();
    const [activeSlide, setActiveSlide] = useState<number>(0)
    return (
        <section className={"flex gap-5 relative"}>
            <i className={"next-middle-prev flex items-center h-full absolute -right-12"}>
                <IconCall name={'homeSliderNext'} classes={"text-4xl text-black cursor-pointer"}/>
            </i>
            <div
                className={"px-12 w-[750px] product-background bg-[#BCD9DA] rounded-lg overflow-clip flex justify-around items-center"}>
                <div className={"text-brandGray-600 w-full flex flex-col gap-5 justify-between"}>
                    <h3 className={"heading font-bold"}>{latestProducts[activeSlide].title}</h3>
                    <h3 className={"label"}>{latestProducts[activeSlide].category}</h3>
                    <Link href={`/products/${latestProducts[activeSlide].id}`}>
                        <button className={"btn-primary mt-2"}>
                            جزئیات محصول
                        </button>
                    </Link>
                </div>
                <img className={"aspect-square object-contain max-h-[260px]"}
                     src={`${process.env.IMAGE_DIRECTORY}/products/${latestProducts[activeSlide].image}`}
                     alt="image for category"/>
            </div>
            <Swiper
                navigation={{
                    prevEl: '.next-middle-prev',
                    nextEl: '.next-middle-next'
                }}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                onActiveIndexChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                className="w-1/2 h-[350px] home-product-slider mx-10"
            >
                {latestProducts?.map((product: {
                    id: number,
                    image: string,
                    title: string,
                    category: string
                }, index: number) => {
                    return (
                        <SwiperSlide
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={"transition-colors hover:bg-brandGray-100 border border-neutral-200 rounded-lg items-center"}>
                            <img className={"aspect-square max-h-[260px] mx-auto"}
                                 src={`${process.env.IMAGE_DIRECTORY}/products/${product.image}`}
                                 alt="image for category"/>
                            <div dir={'rtl'} className={"flex flex-col items-start pr-5"}>
                                <h3 className={"label"}>{product.title}</h3>
                                <h3 className={"text-neutral-400 "}>{product.category}</h3>
                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
            <i className={"next-middle-next flex items-center h-full absolute -left-12"}>
                <IconCall name={'homeSliderPrev'} classes={"text-4xl fill-black cursor-pointer"}/>
            </i>
        </section>
    );
};