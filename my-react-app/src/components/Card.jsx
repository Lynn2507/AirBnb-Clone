import "./Card.css"
import star from "/assets/star.png"

export default function Card(info) {
    let badgeText
    if (info.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (info.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="info-row">
            <div className="info-column">
                <img className='container-swimmer-img' src={`../../assets/${info.item.coverImg}`}></img>
                {badgeText && <h4 className='sold-out-badge'>{badgeText}</h4>}
                <div className="card-info">
                    <img className='start-img' src={star}></img>
                    <h4 className='rating'>{info.item.stats.rating}<span className='lighter-colour'>&nbsp;{info.item.stats.reviewCount} {info.item.location}</span></h4>
                </div>
                <div className='block-info'>
                    <h4 className='font-one'>{info.item.title}</h4>
                    <h4 className='font-two'>From {info.item.price} <span className='font-three'>/ person</span></h4>
                </div>              
            </div>
        </section>
    )
}