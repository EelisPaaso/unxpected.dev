import { Link } from 'react-router-dom'
import Profile from './Profile'
import Container from './Container'
import { LinkCard, LinksContainer } from './ProfileComponents'
import pfp from '../assets/kissatyty.png'

const PROFILE_DATA = {
  name: "Unxpected",
  bio: "Hi! I'm Unxpected, Unx for short. I am a 17yo Software Engineer. Currently focused on learning C++ and React!",
  imageSrc: pfp
}

const LINKS_DATA = [
  { id: 1, title: 'Discord', url: 'discord.gg/N8Xj2GbP' },
  { id: 2, title: 'Steam', url: 'https://steamcommunity.com/id/unxp333' },
  { id: 3, title: 'Tiktok', url: 'https://www.tiktok.com/@unxpected102' },
]

function Home() {

  return (
      <Container>
        <Profile 
          name={PROFILE_DATA.name} 
          bio={PROFILE_DATA.bio} 
          imageSrc={PROFILE_DATA.imageSrc} 
        />
        
        <LinksContainer>
          {LINKS_DATA.map((link) => (
            <LinkCard 
              key={link.id} 
              title={link.title} 
              url={link.url} 
            />
          ))}
           <Link to="/questions" className="link-card">
              <span>extra info</span>
           </Link>
        </LinksContainer>
      </Container>
  )
}


export default Home
