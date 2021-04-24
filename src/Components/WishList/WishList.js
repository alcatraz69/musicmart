import React from "react";
import {useContext} from 'react'
import {ProductContext} from '../../store/ProductContext'
import styles from './WishList.module.css'
import ProductCard from '../Products/ProductCard/ProductCard'

export default function WishList() {

  const {wishListItems}=useContext(ProductContext)
  return (
    <div >
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
                    : <h1 style={{position:"absolute",top:"100px",textAlign:"center"}}>Wishlist empty</h1>
                  }
               
            

    </div>
  )
}
