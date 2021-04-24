import React from "react";
import styles from './CartPage.module.css'
import CartSummary from './cartSummary/cartSummary'
import {ProductContext} from '../../store/ProductContext'
import {useContext} from 'react'
import CartCard from './cartCard/cartCard'

export default function CartPage() {
  const {cartItems} = useContext(ProductContext)
  return (
    <>
    <div className={styles.section}>

    {cartItems.length>0? <ul>{
                        
                        cartItems.map(({id,name,image,price,category,rating,hasDiscount,discount
                            ,fastDelivery,inStock,inCart,inWishlist,quantity})=>(
                            
                                <CartCard
                                    id={id}
                                    name={name}
                                    image={image}
                                    price= {price}
                                    category={category}
                                    rating={rating}
                                    hasDiscount={hasDiscount}
                                    discount={discount}
                                    fastDelivery={fastDelivery}
                                    inStock={inStock}
                                    inCart={inCart}
                                    inWishlist={inWishlist}
                                    quantity={quantity}
                                />
                           
                        ))
                        
                    }</ul>:
                    <div style={{fontSize:"xxx-large",backgroundColor:"#70bdff", padding: "50px 165px",color: "#fff"}}>
                      Your cart is empty! 🥺 
                    </div>
}
  



    </div>
    <CartSummary/>
    </>
  )
}
