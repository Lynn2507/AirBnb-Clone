import "./Card.css"
import star from "../../public/assets/star.png"

export default function Card(info) {
    return (
        <section className="info-row">
            <div className="info-column">
                <img className='container-swimmer-img' src={`../../assets/${info.img}`}></img>
                <h4 className='sold-out-text'>SOLD OUT</h4>
                <div className="card-info">
                    <img className='start-img' src={star}></img>
                    <h4 className='rating'>{info.rating}<span className='lighter-colour'>&nbsp;{info.reviewCount} {info.location}</span></h4>
                </div>
                <div className='block-info'>
                    <h4 className='font-one'>{info.title}</h4>
                    <h4 className='font-two'>From {info.price} <span className='font-three'>/ person</span></h4>
                </div>              
            </div>
        </section>
    )
}