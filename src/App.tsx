import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn'
import { Home } from './components/Pages/Home'
import { Register } from './components/Pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
