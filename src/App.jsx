import { useState } from 'react'
import './App.css'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Test from './components/Test'
import Home from './Combine'
import Gallery from './pages/Gallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </Routers>
    </>
  )
}

export default App
