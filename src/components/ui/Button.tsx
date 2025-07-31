type Props = {
    label: string,
    onClick?: () => void
}

export const Button = ({ label, onClick }: Props) => {
    return(
        <button 
            className="bg-primary text-center font-bold py-1 px-3 rounded-full"
            onClick={onClick}
        >
            {label}
        </button>
    )
}