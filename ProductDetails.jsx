import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id == id)

        setProduct(filterProduct[0])

        const relatedProducts = items.filter((item) => item.catagory === filterProduct[0].catagory)

        setRelatedProducts(relatedProducts)
    }, [id, product]);

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj]);
        console.log("cart element=", cart)
        toast.success('Success added Item on cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

    }

    return (

        <>
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
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt='' />

                </div>
                <div className='text-center'>
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price} ₹</button>
                    <button
                        onClick={() => addToCart(
                            product.id, 
                            product.price, 
                            product.title,
                             product.description, 
                             product.imgSrc)
                            }
                        className='btn btn-warning'
                    >Add To Cart</button>
                </div>

            </div>
            <h2 className='text-center'>Related Products</h2>
            <Products items={relatedProducts} />
        </>
    )
}

export default ProductDetails