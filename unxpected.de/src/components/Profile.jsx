import { Link } from 'react-router-dom'
import pfp from '../assets/kotty.png'

const profile = {
  name: 'Unxpected',
  bio: "Hi! I'm Unxpected, Unx for short. I am a 17yo Software Engineer and a Video editor.",
  image: pfp,
}

const links = [
  { id: 1, title: 'Discord', url: 'https://discord.gg/N8Xj2GbP' },
  { id: 2, title: 'Steam', url: 'https://steamcommunity.com/id/unxp333' },
  { id: 3, title: 'Steam (CS2 account)', url: 'https://steamcommunity.com/id/unxp333' },
  { id: 4, title: 'Tiktok', url: 'https://www.tiktok.com/@unxpected102' },
]

const ExternalLink = ({ title, url }) => (
  <a className="card" href={url} target="_blank" rel="noopener noreferrer">
    {title}
  </a>
)

export default function Profile() {
  return (
    <main className="page">
      <section className="profile">
        <img src={profile.image} alt="profile" className="profile-image" />
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
      </section>

      <section className="links">
        <h2>Links</h2>
        <div className="link-list">
          {links.map(link => (
            <ExternalLink key={link.id} {...link} />
          ))}
          <Link className="card" to="/PabloArchive">
            Pablo photo archive
          </Link>
          <Link className="card" to="/Troll">
            Click me!!!
          </Link>
        </div>
      </section>
    </main>
  )
}
