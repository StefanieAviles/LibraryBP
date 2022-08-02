import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn/LogIn'
import { Home } from './components/Pages/Home/Home'
import { Register } from './components/Pages/Register/Register'
import { useNavigate, useLocation } from 'react-router-dom'
import { BookInfo } from './components/Pages/BookInfo/BookInfo'
import { useState } from 'react'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [bookById, setBookById] = useState({})
  const [searchValue, setSearchValue] = useState('')
  return (
    <Routes>
      <Route path="/" element={<LogIn navigateFunction={navigate} locationFunction={location} />} />
      <Route
        path="/home"
        element={
          <Home
            setBookById={setBookById}
            navigateFunction={navigate}
            locationFunction={location}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        }
      />
      <Route
        path="/register"
        element={<Register navigateFunction={navigate} locationFunction={location} />}
      />
      <Route
        path="/info"
        element={
          <BookInfo navigateFunction={navigate} locationFunction={location} bookById={bookById} />
        }
      />
    </Routes>
  )
}
