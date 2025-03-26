import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'
 import { FaCartArrowDown } from "react-icons/fa"

const Navbar = ({setData,cart}) => {
  const location = useLocation()
  const navigate = useNavigate();
const [searchTerm, setsearchTerm] = useState("")
  const filterByCategory = (catagory)=>{
    const element = items.filter((Product)=>Product.catagory === catagory)
   
    setData(element)
  }
  const filterByPrice = (price) =>{
    const element = items.filter((Product)=>Product.price >= price)
    setData(element)
  }

const handleSubmit = (e)=>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`)
  setsearchTerm("")
}

  return (
    <>
    <header className='sticky-top'>
        <div className='nav-bar'>
            <Link to={'/'} className='brand'>E-cart</Link>
            <form 
            // onClick={handleSubmit}
            onSubmit={handleSubmit}
            className='search-bar'>
                <input 
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
                type='text' 
                placeholder='Search Product'
                />
            </form>
            <Link to={'/cart'} className='cart'>
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown style={{fontSize:'25px'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname === '/' &&(
            <div className="nav-bar-wrapper">
            <div className="items" onClick ={() => setData(items)}>Filter by{"=>"}</div>
            <div className="items" onClick={() => setData(items)}>No filter</div>
            <div 
            onClick={()=>filterByCategory('Mobiles')}
            className="items">Mobiles</div>
            <div className="items" onClick={() => filterByCategory('Laptops')}>Laptop</div>
            <div className="items" onClick={() => filterByCategory('Tablets')}>Tablets</div>
            <div className="items" onClick={() => filterByPrice(2999)}>{">="}29999</div>
            <div className="items" onClick={() => filterByPrice(49999)}>{">="}49999</div>
            <div className="items" onClick={() => filterByPrice(69999)}>{">="}69999</div>
            <div className="items" onClick={() => filterByPrice(89999)}>{">="}89999</div>
        </div>
          )
        }
        
    </header>
    </>
  )
}

export default Navbar