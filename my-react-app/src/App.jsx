import airBnb from '/assets/Airbnb-logo.png'
import landingPageImg from '/assets/landing-page-photo.png'
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
            <Card
                key={item.id}
                item={item}
                // or can use spread syntax
                // {...item}
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
            /> 
        )
    })
    return (
        <div>
            <nav>
                <img src={airBnb}></img>
            </nav>
            <MainContent />
            <section className='card-lists'>
                {cards}
            </section>

        </div>
    )
}