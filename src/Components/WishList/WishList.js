import React from "react";
import {useContext} from 'react'
import {ProductContext} from '../../store/ProductContext'
import styles from './WishList.module.css'
import ProductCard from '../Products/ProductCard/ProductCard'

export default function WishList() {

  const {wishListItems}=useContext(ProductContext)
  return (
    <div style={{height:"85vh"}}>

      <div className={styles.wishlistHead}>
        Your Wishlist - {wishListItems.length} items
      </div>
                    {wishListItems.length>0?

                        <ul className={styles.products}>{
                          wishListItems.map(({id,name,image,price,category,rating,hasDiscount,discount
                            ,fastDelivery,inStock,inCart,inWishlist})=>(
                             
                                <ProductCard
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
                           
                        ))
                    }</ul>
                    : <h1 style={{position:"relative",top:"140px",textAlign:"center"}}>Wishlist is empty</h1>
                  }
               
            

    </div>
  )
}
