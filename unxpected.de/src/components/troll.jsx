import trollface from '../assets/troll.png'
import { Link } from 'react-router-dom'


export default function Troll() {
    return(
        <>
        <Link to="/" className="back-link">
        ← Back
        </Link>
        <p>placeholder</p>
        <img src={trollface} alt="" />
        </>
    )
}
