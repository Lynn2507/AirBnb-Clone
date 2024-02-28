import "./Card.css"
import swimmerImg from "../assets/swimmer-img.png"
import star from "../assets/star.png"

function SoldOutTag() {
    return (
        <h4 className='sold-out-text'>SOLD OUT</h4>
    )
}

function CardInfo() {
    return (
        <div className="card-info">
            <img className='start-img' src={star}></img>
            <h4 className='rating'>5.0<span className='lighter-colour'>&nbsp;(6) .USA</span></h4>
        </div>
    )
}

function TextInfo() {
    return (
        <div className='block-info'>
            <h4 className='font-one'>Life lessons with Kaite Zaferes</h4>
            <h4 className='font-two'>From $138 <span className='font-three'>/ person</span></h4>
        </div>
    )
}

export default function Card() {
    return (
        <section>
            <div>
                <img className='container-swimmer-img' src={swimmerImg}></img>
                <SoldOutTag />
                <CardInfo />
                <TextInfo />
            </div>
        </section>
    )
}