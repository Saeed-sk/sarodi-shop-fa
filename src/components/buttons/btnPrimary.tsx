import React, {ButtonHTMLAttributes, PropsWithChildren} from "react";

type PageProps = {
    className?: string,
    // onClick?:ButtonHTMLAttributes<any>
}
export const BtnPrimary = ({className,onClick, children}: PropsWithChildren<PageProps>) => {
    return (
        <button
            className={`text-[20px] border border-white rounded-full px-[32px] py-[12px] hover:text-brandGray-400 transition-all ${className && className}`}>
            {children}
        </button>
    )
}