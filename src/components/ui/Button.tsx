type Props = {
    label: string,
    onClick?: () => void,
    big?: boolean
}

export const Button = ({ label, onClick, big}: Props) => {

    return(
        <button 
            className={`bg-primary text-md text-center ${big ? 'px-10 py-4 rounded-md' : 'py-1 px-3 rounded-full'} `}
            style={{ fontFamily: big ? 'sans-serif' : 'primary' }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}