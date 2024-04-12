import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Test from './components/Test'
import Combine from './Combine'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar/> */}
      {/* <Test/> */}
      <Combine/>
    </>
  )
}

export default App
