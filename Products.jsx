import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = ({items,cart,setCart}) => {
const addToCart = (id,price,title,description,imgSrc) =>{
  const obj = {
    id,price,title,description,imgSrc
  }
  setCart([...cart,obj]);
  console.log("cart element=",cart)
  toast.success('Success added Item on cart', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

}
  return (
  
    <React.Fragment>
<div className="container my-5">
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
  />
  <div className='row'>
    {
      items.map((product) => {
        return (
          <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
            <div className="card" style={{ width: '18rem' }}>
              <Link to={`/product/${product.id}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <img src={product.imgSrc} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price} ₹</button>
          <button 
          onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
          className='btn btn-warning'
          >Add To Cart</button>
              </div>
            </div>
          </div>
        )
            })

          }
        </div>
      </div>

    </React.Fragment>
  )
}

export default Products