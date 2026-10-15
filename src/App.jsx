import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import LikeBotton from './component/like/Like'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LikeBotton/>
    </>
  )
}

export default App
