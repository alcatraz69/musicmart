import styles from './cartCard.module.css'
import {useContext} from 'react'
import {ProductContext} from '../../../store/ProductContext'
import {successToast} from '../../Toast/toast'
export default function CartCard({id,name,image,hasDiscount,price,category,discount,rating,inCart,inWishlist,inStock,fastDelivery,quantity}){
    const {dispatch}=useContext(ProductContext);

    
    return(
        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src={image} alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. {price}</h5>
               <p style={{width:"150px"}}>{name}</p>

             </div>

             <div className={styles.quantity}>
                 <button className={styles.quantityBtn} 
                 onClick={()=>dispatch({type:"DECREMENT_QUANTITY",payload:id})}>-</button>
                 <p className={styles.quantityTxt}>{quantity}</p>
                 <button className={styles.quantityBtn} 
                 onClick={()=>dispatch({type:"INCREMENT_QUANTITY",payload:id})}>+</button>
             </div>
             
             <div className={styles.cardBtns}>
               <button  className={styles.cardBtn1} onClick={() => {
               dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: id,
                    })
                    successToast("Removed from cart")}
                  }
                    >
                    Delete</button>
               <button href="#" className={styles.cardBtn1} onClick={() => dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: id,
                })}>{!inWishlist? "Move to wishlist" : "In Cart"}</button>
             </div>
           </div>
        </div>
    )

}