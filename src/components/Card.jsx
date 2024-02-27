export default function Card({ data }) {
    console.log(data);
    console.log(data.length);
    return (
        <div className="card">
            <div className="image-cont"
            style={{
                backgroundImage:`url(${data.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            >
                <p>{data.message}</p>
            </div>
            <div className="message">
                <p>{data.length <= 0 ? '' : data.name}</p>
            </div>
        </div>
    )
}