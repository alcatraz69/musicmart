import React from "react";
import {useContext} from 'react'
import {ProductContext} from '../../store/ProductContext'
import styles from './WishList.module.css'
import ProductCard from '../Products/ProductCard/ProductCard'

export function WishList() {

  const {wishListItems}=useContext(ProductContext)
  return (
    <div >

      <div className={styles.wishlistHead}>
        Your Wishlist - {wishListItems.length} items
      </div>
                    {wishListItems.length>0?

                        <ul className={styles.products}>{
                          wishListItems.map(({id,name,image,price,category,rating,hasDiscount,discount
                            ,fastDelivery,inStock,inCart,inWishlist})=>(
                             
                                <ProductCard
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
                                />
                           
                        ))
                    }</ul>
                    : <h1 style={{height:"74vh",position:"relative",top:"140px",textAlign:"center"}}>Wishlist is empty</h1>
                  }
               
            

    </div>
  )
}
