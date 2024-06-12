import React from "react";
import './globals.css'
import {Navbar} from "@/components/navbar/Navbar";
import {anjoman} from "@/utils/font";
import {StoreProvider} from "@/store/StoreProvider";

export default function Root({children}: { children: React.ReactNode;}) {
    return (
        <StoreProvider>
            <html lang={"fa"} dir={'rtl'} className={anjoman.className}>
            <body className={"gird grid-cols-1 relative"}>
            <Navbar/>
            {children}
            </body>
            </html>
        </StoreProvider>
    );
}

export const metadata = {
    title: "sarodi-compony",
    description: "شرکت فروشگاهی لوازم بهداشتی",
};
