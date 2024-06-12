import React, {PropsWithChildren} from "react";

type PageProps = {
    className?: string,
}
export const BtnOutLine = ({className, children}: PropsWithChildren<PageProps>) => {
    return (
        <button
            className={`text-[20px] border border-white rounded-full px-[32px] py-[12px] hover:border-[#248090] hover:text-[#248090] transition-all ${className && className}`}>
            {children}
        </button>
    )
}