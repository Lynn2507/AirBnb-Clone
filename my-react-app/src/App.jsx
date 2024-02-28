import airBnb from '../public/assets/Airbnb-logo.png'
import landingPageImg from '../public/assets/landing-page-photo.png'
import Card from './components/Card.jsx'
import './App.css'
import data from "./components/Data.js"

function MainContent() {
    return (
        <div className='hero'>
            <img className='landing-page-img' src={landingPageImg}></img>
            <h1 className='header-text'>Online Experience</h1>
            <h2 className='normal-text'>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</h2>
        </div>
    )
}


export default function App() {

    const cards = data.map(item => {
        return (
            <Card key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.location}
                price={item.price}
            /> 
        )
    })
    return (
        <div>
            <nav>
                <img src={airBnb}></img>
            </nav>
            <MainContent />
            {cards}

        </div>
    )
}