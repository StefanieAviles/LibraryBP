import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn'
import { Home } from './components/Pages/Home'
import { Register } from './components/Pages/Register'
import { useNavigate, useLocation } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Routes>
      <Route path="/" element={<LogIn navigateFunction={navigate} locationFunction={location} />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/register"
        element={<Register navigateFunction={navigate} locationFunction={location} />}
      />
    </Routes>
  )
}

export default App
