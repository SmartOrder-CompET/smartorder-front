type Props = {
    placeholder: string,
    type: string,

}

export const Input = ({ placeholder, type }: Props) => {
    return(
        <input 
            type={type}
            placeholder={placeholder}
            className="outline-0 bg-none border border-primary px-3 py-2 rounded-md"
        />
    )
}