import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LogIn } from './components/Pages/LogIn/LogIn'
import { Home } from './components/Pages/Home/Home'
import { Register } from './components/Pages/Register/Register'
import { useNavigate } from 'react-router-dom'
import { BookInfo } from './components/Pages/BookInfo/BookInfo'
import { useState } from 'react'
import { Book } from './interfaces/interfaces'
import { NewBook } from './components/Pages/NewBook/NewBook'

export default function App() {
  const navigate = useNavigate()
  const [bookById, setBookById] = useState<Book>({
    id: '',
    public: true,
    author: '',
    resume: '',
    title: '',
    subtitle: '',
    image: '',
    url: '',
    category: {
      id: '',
      description: ''
    },
    userRegister: ''
  })
  const [searchValue, setSearchValue] = useState('')
  const [searchCategoryBook, setSearchCategoryBook] = useState('')
  return (
    <Routes>
      <Route path="/" element={<LogIn navigateFunction={navigate} />} />
      <Route
        path="/home"
        element={
          <Home
            setBookById={setBookById}
            navigateFunction={navigate}
            searchValue={searchValue}
            searchCategoryBook={searchCategoryBook}
            setSearchValue={setSearchValue}
            setSearchCategoryBook={setSearchCategoryBook}
          />
        }
      />
      <Route path="/register" element={<Register navigateFunction={navigate} />} />
      <Route path="/info" element={<BookInfo navigateFunction={navigate} bookById={bookById} />} />
      <Route path="/newBook" element={<NewBook navigateFunction={navigate} />} />
    </Routes>
  )
}
