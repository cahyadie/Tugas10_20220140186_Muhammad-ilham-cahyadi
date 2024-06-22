import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>
        My name is SHREK
      </h1>

      <img className='imageku' src="src/assets/890298-full-size-shrek-wallpapers-2560x1440.jpg" alt="foto"  />

      <p>
        I live in skibidibidi 
      </p>
     
    </>
    
    
  )
}

export default App
