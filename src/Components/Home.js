import React from 'react'
import { useState, useEffect } from 'react'
import ShoppingItems from './ShoppingItem'
import Cart from './Cart';
import Navbar from './Navbar';
import { BrowserRouter as AppRouter, Routes, Route, Link } from 'react-router-dom'
import Front from './Front'
import Footer from './Footer';





function Home(props) {
  
  const [clothes, setClothes] = useState([])
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setClothes(data))
      .catch(error => console.error(error))
  }, []);
  
  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  // };

  const handleAddToCart = (item) => {
    // addToCart(item);
    setCart([...cart, item]);
  };

  const handleCount = () => {
  setCount(count+1)
}

    return (
      <>
        <AppRouter>
        <Navbar kart={props.kart} count={count} />
      
          <Routes>
            <Route path='/front' element={<Front jump={props.jump} cart={props.cart} />} />
          <Route path='/'element={ <ShoppingItems clothes={clothes} addToCart={handleAddToCart} addCount={handleCount} />}/>
          <Route path='/cart' element={<Cart cartItems={cart} />} />
       </Routes>
   <hr></hr>    
          <Footer />
          <hr></hr>  
        </AppRouter>
      </>
    )
  }

export default Home
