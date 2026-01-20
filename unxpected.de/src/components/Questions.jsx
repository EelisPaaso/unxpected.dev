import { Link } from 'react-router-dom'
import Container from './Container'
import { InfoDropdown } from './ProfileComponents'

const EXTRAINFO = [
  { id: 1, title: 'my favorite games', content: 'Love - hate relationship with CS2 currently. I have the most hours in HOI4 and Geometry Dash!' },
  { id: 2, title: 'my pc specs!', content: 'Ryzen 7700x, RX 6700XT with 32GB of DDR5 RAM...' },
  { id: 3, title: 'my fav programming languages', content: 'I like react, its a pretty fun one. Definetly hate C# the most out of all the languages i have tried.' },
]

function Info() {
  return (
    <Container>
      <div className="back-link-wrapper">
        <Link to="/" className="back-link">
          <span>←</span> Back to Home
        </Link>
      </div>

      <h1 className="page-title">More info about me!</h1>

      <div className="info-section">
        {EXTRAINFO.map((q) => (
          <InfoDropdown 
            key={q.id} 
            title={q.title} 
            content={q.content} 
          />
        ))}
      </div>
    </Container>
  )
}

export default Info
