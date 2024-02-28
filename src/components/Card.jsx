export default function Card({ data, handleClick, id }) {
    return (
        <div className="card" onClick={() => handleClick(data)}>
            <div className="image-cont"
            style={{
                backgroundImage:`url(${data.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            >
                <p>{data.loadMessage}</p>
            </div>
            
            <div className="message">
                <p>{data.length <= 0 ? '' : data.name}</p>
            </div>
        </div>
    )
}