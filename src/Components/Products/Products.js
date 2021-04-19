import React from "react";
import { useContext } from 'react';
import styles from "./Products.module.css"
import {ProductContext} from '../../store/ProductContext';
import ProductCard from './ProductCard/ProductCard'
import FilterCard from '../FilterCard/FilterCard'

export default function Products() {
  const {products}=useContext(ProductContext);
  console.log(products);
  return(
    <>
    <FilterCard/>
    <div className={styles.products}>
                    {
                        products&&products.map(({id,name,image,price,rating,hasDiscount,discount
                            ,fastDelivery,inStock,inCart,inWishlist})=>(
                            
                                <ProductCard
                                    id={id}
                                    name={name}
                                    image={image}
                                    price= {price}
                                    rating={rating}
                                    hasDiscount={hasDiscount}
                                    discount={discount}
                                    fastDelivery={fastDelivery}
                                    inStock={inStock}
                                    inCart={inCart}
                                    inWishlist={inWishlist}
                                />
                           
                        ))
                    }
               
            

    </div>
    </>
  ) 
}
