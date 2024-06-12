interface PageProps {
    className: string
}

export const Shopping = ({className}: PageProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 13.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 0h8.25m-8.25 0V2.75H3m9.75 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-8.25-9L15 5l-.75 5.25H4.5"
            />
        </svg>
    )
}