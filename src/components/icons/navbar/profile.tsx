interface PageProps {
    className: string
}

export const Profile = ({className}: PageProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={12} height={17} fill="none">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1.5 15.25v-1.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v1.5M3 4.75a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
            />
        </svg>
    )
}