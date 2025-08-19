type Props = {
    label: string,
    onClick?: () => void
}

export const Button = ({ label, onClick }: Props) => {
    return(
        <button 
            className="bg-primary text-xl text-center font-bold py-3 px-6 rounded-lg"
            onClick={onClick}
        >
            {label}
        </button>
    )
}