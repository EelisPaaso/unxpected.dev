import trollface from '../assets/troll.png'


export default function Troll() {
  return (
    <main className="page">
      <div className="profile">
        <h2>you've been trolled</h2>
        <img src={trollface} alt="trollface"/>
      </div>
    </main>
  )
}
