type Props = {
    title: string,
    onClick: () => void
}

export const SectionTitle = ({ title, onClick }: Props) => {
    return(
        <div className="flex container justify-between mb-3 items-center">
            <h3 className="text-lg">{title}</h3>

            <h5 
                className="text-primary font-bold cursor-pointer"
                onClick={onClick}
            >Ver tudo</h5>
        </div>
    )
}