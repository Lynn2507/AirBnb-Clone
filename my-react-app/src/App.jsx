import airBnb from './assets/Airbnb-logo.png'
import landingPageImg from './assets/landing-page-photo.png'
import Card from './components/Card.jsx'
import './App.css'


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
  return (
    <div>
      <nav>
        <img src={airBnb}></img>
      </nav>
      <MainContent />
      <Card />
    </div>
  )
}