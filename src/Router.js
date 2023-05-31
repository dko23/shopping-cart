import React from 'react'
import { BrowserRouter as AppRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'

function Router() {
  return (
    <div> <AppRouter>
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
       
</Routes>
</AppRouter> </div>
  )
}

export default Router
