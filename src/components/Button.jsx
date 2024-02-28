export default function Button({ handleClick, bttnText }) {
    return (
        <button
        onClick={() => handleClick()}
        style={{border: 'none', height: '25px', borderRadius: '20px', flexGrow: 'none'}}
        >{bttnText}</button>
    )
}