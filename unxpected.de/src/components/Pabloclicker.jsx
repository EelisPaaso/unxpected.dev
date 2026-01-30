import { useState } from 'react'
import pabloImage from '../assets/pabloclicker.png'
import WinImage from '../assets/PabloWin.png'
import meowSound from '../assets/meoww.mp3'

export default function Pabloclicker() {
  const [count, setCount] = useState(0)
  const GameWon = count >= 100

  const handleClick = () => {
    setCount(count + 1)
    const pablomeow = new Audio(meowSound)
    pablomeow.play()
  }

  return (
    <main className="page">
    <div className="profile"></div>
      {GameWon ? (
        <div>
          <h1>YOU ARE A TRUE PABLO ENJOYER... Meow.</h1>
          <img src={WinImage} alt="pabl"/>
          <h2>game over... refresh the site if u wanna play again.</h2>
        </div>
      ) : (
        <>
          <h1>Pablo clicker, your goal? Click "the pab" 100 times to achieve true pablo enjoyer status.</h1>
          <h2>times clicked: {count}</h2>
          <button onClick={handleClick}>
            <img src={pabloImage} alt="pabloclicker" />
          </button>
        </>
      )}
    </main>
  )
}