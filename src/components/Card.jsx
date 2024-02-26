export default function Card({ image }) {
    return (
        <div className="card">
            <div className="image-cont"
            style={{
                backgroundImage:`url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            ></div>
            <div className="message">
                <p>this is a card</p>
            </div>
        </div>
    )
}