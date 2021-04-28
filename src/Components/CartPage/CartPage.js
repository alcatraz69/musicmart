import React from "react";
import styles from './CartPage.module.css'
import CartSummary from './cartSummary/cartSummary'
import {ProductContext} from '../../store/ProductContext'
import {useContext} from 'react'
import CartCard from './cartCard/cartCard'

export default function CartPage() {
  const {cartItems,totalCost} = useContext(ProductContext)
  return (
    <>
    <div className={styles.section}>
      <div className={styles.totalcost}>
        <h5>Total cost : Rs. {totalCost}</h5>
        <button className={styles.orderBtn}>Place Order</button>
      </div>

    {cartItems.length>0? <ul>{
                        
                        cartItems.map(({id,name,image,price,category,rating,hasDiscount,discount
                            ,fastDelivery,inStock,inCart,inWishlist,quantity})=>(
                             
                                <CartCard
                                key={id}
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
                    <div className={styles.emptyCart} >
                      Your cart is empty! 🥺 
                    </div>
}
  



    </div>
    <CartSummary/>
    </>
  )
}
