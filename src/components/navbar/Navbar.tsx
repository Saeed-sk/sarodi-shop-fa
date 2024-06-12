'use client'
import React, {useLayoutEffect, useState} from 'react';
import IconCall from "@/components/icons/index/iconCall";
import Link from "next/link";

export const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav id={"navbar"} className={`w-full transition-all flex items-center justify-around py-8 z-50 ${sticky?"fixed bg-white text-black":"absolute text-white"}`}>
            <Link href={"/"}>
                <IconCall name={"navLogo"} classes={"text-red"}/>
            </Link>
            <ul className={"navbar-items flex gap-8 flex-row-reverse rtl:flex-row"}>
                <li>
                    <Link href={"/"}>صفحه اصلی</Link>
                </li>
                <li>
                    <Link href={"/products"}>محصولات</Link>
                </li>
                <li>
                    <Link href={"/"}>گارانتی</Link>
                </li>
                <li>
                    باشگاه مشتریان
                </li>
                <li>
                    <Link href={"/about"}>درباره ما</Link>
                </li>
                <li>
                    <Link href={"/contact"}>تماس با ما</Link>
                </li>
            </ul>

            <ul className={"flex items-center gap-5"}>
                <li>
                    <IconCall name={"shopping"} classes={""}/>
                </li>
                <li>
                    <IconCall name={"like"} classes={""}/>
                </li>
                <li>
                    <IconCall name={"profile"} classes={""}/>
                </li>
            </ul>
        </nav>
    );
};

