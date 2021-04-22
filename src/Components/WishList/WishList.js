import React from "react";
import {useContext} from 'react'
import {ProductContext} from '../../store/ProductContext'
import wishlistCard from './wishlistCard/wishlistCard'
import styles from './WishList.module.css'

export default function WishList() {

  const {wishListItems}=useContext(ProductContext)
  return (
    <div className={styles.products}>
                    {wishListItems.length>0?

                        <ul>{
                          wishListItems.map(({id,name,image,price,category,rating,hasDiscount,discount
                            ,fastDelivery,inStock,inCart,inWishlist})=>(
                             <li key={id}>
                                <wishlistCard
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
                                />
                           </li>
                        ))
                    }</ul>
                    : <h1 style={{position:"absolute",top:"100px",textAlign:"center"}}>Wishlist empty</h1>
                  }
               
            

    </div>
  )
}
