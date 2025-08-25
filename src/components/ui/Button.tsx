type Props = {
    label: string,
    onClick?: () => void
}

export const Button = ({ label, onClick }: Props) => {
    return(
        <button 
            className="bg-primary text-lg text-center py-1 px-3 rounded-full"
            style={{ fontFamily: 'primary' }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}