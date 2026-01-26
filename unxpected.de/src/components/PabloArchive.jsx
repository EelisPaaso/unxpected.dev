import { Link } from 'react-router-dom'
import Container from './Container'
import pablo1 from '../assets/pablo1.webp'
import pablo2 from '../assets/pablo2.webp'
import pablo3 from '../assets/pablo3.webp'
import pablo4 from '../assets/pablo4.webp'
import pablo6 from '../assets/pablo6.webp'
import pablo7 from '../assets/pablo7.webp'
import pablo8 from '../assets/pablo8.webp'
import pablo9 from '../assets/pablo9.webp'
import pablo10 from '../assets/pablo10.webp'
import pablo11 from '../assets/pablo11.webp'
import pablo12 from '../assets/pablo12.webp'
import pablo13 from '../assets/pablo13.webp'
import pablo14 from '../assets/pablo14.webp'
import pablo15 from '../assets/pablo15.webp'
import pablo16 from '../assets/pablo16.webp'
import './PabloArchive.css'

const PABLO_PHOTOS = [
  pablo1, pablo2, pablo3, pablo4, pablo6, pablo7, pablo8, pablo9,
  pablo10, pablo11, pablo12, pablo13, pablo14, pablo15, pablo16, pablo16
]

export default function PabloArchive() {
  return (
    <Container>
      <Link to="/" className="back-link">
        ← Back
      </Link>
      <h1 className="page-title">photos of pablo because he has crazy aura</h1>
      <div className="pablo-photos">
        {PABLO_PHOTOS.map((photo, index) => (
          <div key={index} className="pablopic">
            <img src={photo} alt={`Pablo ${index + 1}`} className="pablopic-img" />
          </div>
        ))}
      </div>
    </Container>
  )
}
