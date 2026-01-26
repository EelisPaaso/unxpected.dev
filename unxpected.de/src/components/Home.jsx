import { Link } from 'react-router-dom'
import Profile, { ProfileLink as LinkCard, LinkList } from './Profile'
import Container from './Container'
import pfp from '../assets/kotty.png'

const PROFILE = {
  name: "Unxpected",
  bio: "Hi! I'm Unxpected, Unx for short. I am a 17yo Software Engineer and a Video editor.",
  imageSrc: pfp
}

const LINKS = [
  { id: 1, title: 'Discord', url: 'discord.gg/N8Xj2GbP' },
  { id: 2, title: 'Steam', url: 'https://steamcommunity.com/id/unxp333' },
  { id: 3, title: 'Steam (CS2 account)', url: 'https://steamcommunity.com/id/unxp333' },
  { id: 4, title: 'Tiktok', url: 'https://www.tiktok.com/@unxpected102' },
]

export default function Home() {
  return (
    <Container>
      <Profile {...PROFILE} />
      <LinkList>
        {LINKS.map(link => <LinkCard key={link.id} {...link} />)}
        <Link to="/PabloArchive" className="card">Pablo photo archive!</Link>
      </LinkList>
    </Container>
  )
}
