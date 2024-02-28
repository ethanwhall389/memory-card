export default function Button({ handleClick, bttnText }) {
    return (
        <button
        onClick={() => handleClick()}
        style={{border: 'none', height: '45px', borderRadius: '20px', flexGrow: 'none', padding:'10px', fontSize:'20px'}}
        >{bttnText}</button>
    )
}