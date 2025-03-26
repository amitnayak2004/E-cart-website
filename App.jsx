import React, { useState } from 'react'
import Navbar from './Navbar'
import Products from './Products';
import { BrowserRouter as Router, Routes, Route, useActionData } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import SearchItem from './SearchItem';
import Cart from './Cart'
import { items } from './Data'


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <Router>
      <Navbar cart={cart} setData={setData}/>
      <Routes>
        <Route path='/' element={<Products cart={cart} setCart={setCart} items={data} />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/search/:term' element={<SearchItem />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  )
}

export default App