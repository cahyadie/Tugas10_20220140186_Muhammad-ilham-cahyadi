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

      <img className='imageku' src="https://th.bing.com/th/id/OIP.CVhsT3yzn4IDCXU8REu7JgHaE7?rs=1&pid=ImgDetMain" alt="foto"  />

      <p>
        I live in skibidibidi 
      </p>
     
    </>
    
    
  )
}

export default App
