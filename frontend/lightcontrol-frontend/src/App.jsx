import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/RoomCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card/>
  )
}

export default App
