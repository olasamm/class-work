import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from '../components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Routes >
        <Route path="/" element={<Signup />} />

    </Routes>
    </>
  )
}

export default App
