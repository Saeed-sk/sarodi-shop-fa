'use client'
import React, {Fragment} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import Image from "next/image";
import {useDispatch} from "react-redux";

interface PageProps {
    sliders: {
        image: string,
        header: string,
        title: string
    }[]
}

export const Thumbnail = ({sliders}: PageProps) => {
    const dispatchLang = useDispatch();
    return (
        <Fragment>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-svh">
                {sliders?.map((slider, index: number) => {
                    return (
                        <SwiperSlide key={index} className={'relative'}>
                            <Image className={'object-contain w-full h-full'}
                                   src={`${process.env.IMAGE_DIRECTORY}/home/slider/${slider.image}`} width={1980}
                                   height={1200}
                                   alt={"slider image"}/>
                            <div
                                className={'absolute text-center text-white gap-10 flex flex-col items-center w-full h-full bottom-0 justify-end mb-10'}>
                                <h1 className={"heading font-extrabold w-[800px] "}>{slider.header}</h1>
                                <h2 className={"label"}>{slider.title}</h2>
                                {/*add link to images */}
                                <button className={"btn-outLine-white"}>
                                    اطلاعات بیشتر
                                </button>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </Fragment>
    );
};