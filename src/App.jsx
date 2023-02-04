import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LDEprofile from './assets/LDEprofile.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="roundedDiv">
        <img className="profileSettings"src={LDEprofile} alt='if this does not work, this message will appear'></img>
        <h2 className='LDEname'>LewisDoesEverything</h2>
        <div className='smallRoundedDiv'>
         <a href='https://www.youtube.com/channel/UCXBIhASVWP-RCzKWqidvD6g'><i className='fab fa-youtube'></i></a>
         <a href='https://twitter.com/lewisdoesTR'><i className="fab fa-twitter"></i></a>
         <a href='https://www.twitch.tv/lewisdoeseverything_th'><i className="fab fa-twitch"></i></a>
         <a href='#'><i className="fab fa-discord"></i></a>
         <a href='https://www.patreon.com/LewisDoesEverything_official'><i className="fab fa-patreon"></i></a>
        </div>
      </div>
    </div>
  )
}

export default App
