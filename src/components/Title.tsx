export const Title = ({ text }: { text: string }) => {
    return(
        <h1 
            className="text-primary text-3xl font-bol text-center my-8"
            style={{ fontFamily: 'primary' }}
        >
            {text}
        </h1>
    )
}