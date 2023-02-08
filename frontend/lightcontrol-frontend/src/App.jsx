import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/RoomCard'
import Home from './pages/Home'
import UserLogin from './components/UserLogin'
import { useEffect } from 'react'

function App() {
  const [name, setName] = useState("")
  const [pp, setPp] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    console.log(name)
  }, [name])

  return (
    <div className='app-container'>
      <div className="login-form">
                  <UserLogin setName={setName} setPp={setPp} setEmail={setEmail}/>
      </div>
      <Home user={name}/>
      <Card roomName='Livingroom'/>
    </div>
  )
  }

  export default App