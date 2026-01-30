import { Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import PabloArchive from './components/PabloArchive'
import Footer from './components/footer'
import Header from './components/header'
import Troll from './components/troll'
import Pabloclicker from './components/Pabloclicker'
import bgvideo from './assets/kisu.mp4'

export default function App() {
  return (
    <div className="app-container">
      <video className="background-video" autoPlay loop muted playsInline preload="auto">
        <source src={bgvideo} type="video/mp4" />
      </video>
      <Header />
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/PabloArchive" element={<PabloArchive />} />
          <Route path="/Troll" element={<Troll />} />
          <Route path="/pabloclicker" element={<Pabloclicker />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}