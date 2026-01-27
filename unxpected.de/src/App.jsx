import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import pfp from './assets/kotty.png'
import PabloArchive from './components/PabloArchive'
import Footer from './components/footer'
import Troll from './components/troll'

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

function HomePage() {
  return (
    <main className="page">
      <section className="profile">
        <img src={profile.image} alt="profile" className="profile-image" />
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-bio">{profile.bio}</p>
      </section>

      <section className="links">
        <h2 className="section-title">Links</h2>
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

export default function App() {
  return (
    <div className="app-container">
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PabloArchive" element={<PabloArchive />} />
          <Route path="/Troll" element={<Troll/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}