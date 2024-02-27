export default function Button({ handleClick, bttnText }) {
    return (
        <button
        onClick={() => handleClick()}
        >{bttnText}</button>
    )
}