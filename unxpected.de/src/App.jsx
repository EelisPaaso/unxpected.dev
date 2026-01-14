import './App.css'
import Profile from './components/Profile'
import LinkCard from './components/LinkCard'
import Container from './components/Container'
import LinksContainer from './components/LinksContainer'
import InfoDropdown from './components/InfoDropdown'
import Kissatyty from './assets/kissatyty.png'
import kisuVideo from './assets/kisu.mp4'

const PROFILE_DATA = {
  name: "Unxpected",
  bio: "Hi! I'm Unxpected, Unx for short. I am a 17yo Software Engineer. Currently focused on learning C++ and React!",
  imageSrc: Kissatyty
}

const LINKS_DATA = [
  { id: 1, title: 'Discord', url: 'https://example.com' },
  { id: 2, title: 'Steam', url: 'https://steamcommunity.com/id/unxp333' },
  { id: 3, title: 'Tiktok', url: 'https://www.tiktok.com/@unxpected102' },
]

const QUESTIONS_DATA = [
  { id: 1, title: 'my favorite games', content: 'Love - Hate relationship with CS2 currently I have the most hours in HOI4 and Geometry Dash' },
  { id: 2, title: 'my pc specs!', content: 'Ryzen 7700x, RX 6700XT with 32GB of DDR5 RAM...' },
  { id: 3, title: 'meow', content: 'meowwwww....' },
  { id: 4, title: 'can i date you', content: 'ehhhh' }
]

function App() {

  return (
    <>
      <div className="video-background">
        <video src={kisuVideo} autoPlay loop muted playsInline />
        <div className="video-overlay"></div>
      </div>
      <Container>
        <Profile {...PROFILE_DATA} />
        
        <LinksContainer>
          {LINKS_DATA.map((link) => (
            <LinkCard 
              key={link.id} 
              title={link.title} 
              url={link.url} 
            />
          ))}
        </LinksContainer>
        
        <div className="info-section">
          {QUESTIONS_DATA.map((q) => (
            <InfoDropdown 
              key={q.id} 
              title={q.title} 
              content={q.content} 
            />
          ))}
        </div>
      </Container>
    </>
  )
}

export default App
