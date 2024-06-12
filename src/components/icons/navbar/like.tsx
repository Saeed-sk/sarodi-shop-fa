interface PageProps {
    className: string
}

export const LikeIcon = ({className}: PageProps) => {
    return (
            <svg className={className} xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.625 9.929 9 15.499 3.375 9.93A3.75 3.75 0 1 1 9 5.004a3.75 3.75 0 1 1 5.625 4.93"
            />
        </svg>
    )
}