import {Fragment} from "react";
import {Thumbnail} from "@/components/home/thumbnail";
import {homeApi} from "@/api/home";
import Link from "next/link";
import Image from "next/image";
import {LatestProducts} from "@/components/home/latestProducts";

interface PageData {
    sliders: {
        id: number
        image: string,
        header: string,
        title: string
    }[],
    article: {
        image: string,
        header: string,
        caption: string
    },
    categories: {
        id: number
        image: string,
        title: string,
        count: number
    }[],
    aboutBlogs: {
        id: number
        image: string,
        title: string,
        caption: string
    }[],
    latestProducts: {
        id: number,
        image: string,
        title: string
        category: string
    }[]
}

export default function IndexPage() {
    const landing: PageData = homeApi();
    return (
        <Fragment>
            {/*top thumbnail slider*/}
            <section className={"max-w-[100vw] bg-black"}>
                <Thumbnail sliders={landing.sliders}/>
            </section>
            {/*top thumbnail slider*/}
            <article className={"container max-w-[1280px] mx-auto my-20 flex flex-col gap-20"}>
                {/*first article of home page*/}
                <section className={"flex items-center justify-between "}>
                    <section className={"max-w-[800px] flex flex-col gap-5"}>
                        <h2 className={"title text-brandGray-600 ltr:font-bold rtl:font-semibold"}>{landing.article.header.split(' ').map((text: string, index: number) => {
                            if (index === 1) {
                                return (
                                    <>
                                        {text}
                                        <br/>
                                    </>
                                )
                            } else {
                                return (<>{text} </>)
                            }
                        })}</h2>
                        <p className={"text-neutral-700 rtl:text-justify"}>{landing.article.caption}</p>
                        <Link href={'/'}>
                            <button className={"btn-primary"}>
                                بیشتر
                            </button>
                        </Link>
                    </section>
                    <img
                        src={`${process.env.IMAGE_DIRECTORY}/home/${landing.article.image}`}
                        className={"max-w-[360px] max-h-[360] object-contain"}
                        alt={"article image for blog"}
                    />
                </section>
                {/*first article of home page*/}
                {/*category items*/}
                <article className={"grid grid-cols-4 gap-10"}>
                    <h2 className={"col-span-full text-center title font-semibold text-neutral-600"}>
                        دسته بندی
                        محصولات
                    </h2>
                    {landing?.categories?.map((category: {
                        image: string,
                        title: string,
                        count: number
                    }, index: number) => {
                        return (
                            <section
                                key={index}
                                className={"bg-[#E8E8E8] max-h-[480px] max-w-[359px] relative rounded-lg overflow-clip flex flex-col items-center"}>
                                <div dir={'rtl'} className={"absolute mx-auto top-7 flex flex-col items-center"}>
                                    <h3 className={"label"}>{category.title}</h3>
                                    <h3 className={"text-neutral-600"}>{category.count}مدل</h3>
                                </div>
                                <img src={`${process.env.IMAGE_DIRECTORY}/home/categories/${category.image}`}
                                     alt="image for category"/>
                            </section>
                        );
                    })}
                </article>
                {/*category items*/}
                {/*    about company blogs*/}
                <section className={"grid grid-cols-2 justify-items-center place-content-around gap-5"}>

                    <div
                        className={"flex flex-col max-h-[800px] items-center justify-end aspect-square relative bg-brandBrown-300 rounded-lg overflow-clip"}>
                        <Image className={"absolute w-full h-full object-cover"}
                               src={`${process.env.IMAGE_DIRECTORY}/blogs/${landing.aboutBlogs[1].image}`}
                               alt={"blog image"}
                               height={810} width={810}/>
                        <div className={'z-10 text-white flex flex-col items-center p-20 gap-5 text-center'}>
                            <h2 className={"title"}>{landing.aboutBlogs[1].title.split(' ').map((text, index) => {
                                if (index === 0) {
                                    return (
                                        <>
                                            <span key={index} className={"font-bold"}>{text}</span>
                                        </>
                                    );
                                } else {
                                    return <>{text} </>
                                }
                            })}</h2>
                            <p>
                                {landing.aboutBlogs[1].caption.split(' ').map((text: string, index: number) => {
                                    if (index === 7) {
                                        return (
                                            <>{text}
                                                <br/>
                                            </>
                                        );
                                    } else {
                                        return <>{text} </>
                                    }
                                })}
                            </p>
                        </div>
                    </div>

                    <div
                        className={"flex flex-col max-h-[800px] items-center aspect-square bg-brandBrown-300 relative rounded-lg overflow-clip"}>
                        <Image className={"absolute w-full h-full object-cover"}
                               src={`${process.env.IMAGE_DIRECTORY}/blogs/${landing.aboutBlogs[0].image}`}
                               alt={"blog image"}
                               height={810} width={810}
                        />
                        <div
                            className={'z-10 p-10 flex flex-col h-full w-full items-end text-brandGray-600 justify-between'}>
                            <h2 className={"title text-end"}>{landing.aboutBlogs[0].title.split(' ').map((text, index) => {
                                if (index === 2) {
                                    return (
                                        <>
                                            <br/>
                                            <span className={"font-bold"}>{text}</span>
                                        </>
                                    );
                                } else {
                                    return <>{text} </>
                                }
                            })}</h2>
                            <p className={"text-justify lg:pb-5"}>
                                {landing.aboutBlogs[0].caption}
                            </p>
                        </div>
                    </div>
                </section>
                {/*  about company blogs*/}

                {/*    latest products */}
                <article className={"grid grid-cols-1 gap-10 "}>
                    <h2 className={"col-span-full text-center title font-semibold text-neutral-600"}>
                        پرفروش ترین
                        محصولات
                    </h2>
                    <LatestProducts latestProducts={landing?.latestProducts}/>
                </article>
                {/*   latest products */}
            </article>
        </Fragment>
    );
}
