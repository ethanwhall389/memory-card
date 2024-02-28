export default function Button({ handleClick, bttnText }) {
    return (
        <button
        onClick={() => handleClick()}
        style={{border: 'none', height: '35px', borderRadius: '20px', flexGrow: 'none', padding:'10px'}}
        >{bttnText}</button>
    )
}