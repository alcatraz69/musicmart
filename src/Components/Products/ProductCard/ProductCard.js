import styles from './ProductCard.module.css'
import {useContext} from 'react'
import {ProductContext} from '../../../store/ProductContext'
import {NavLink} from 'react-router-dom'
import {successToast} from '../../Toast/toast'

export default function ProductCard({id,name,image,hasDiscount,price,category,discount,rating,inCart,inWishlist,inStock,fastDelivery}) {

  const {dispatch}=useContext(ProductContext);
 
    return (
      <div className={styles.App}>
      
          <div className={styles.cards}>
          
          <div className={styles.carditem}>
          
              <div className={styles.cardimageSec}>
              <img className={styles.cardimage} src={image} alt=""/>
              </div>
              {fastDelivery && (
          <span className={styles.badge}><i className="fas fa-paper-plane"></i></span>
        )}
              <div className={styles.cardinfo}>
                <h2 className={styles.cardtitle}> {name}</h2>
                <p>{category}</p>
                <div className={styles.cardintro}>
                  <div style={{marginRight:"60px"}}>
                    Rs. {price}
                  </div>
                
                  <div className={styles.rating}>
                    <span className={styles.star}><i className="fas fa-star"></i></span>
                     {rating}
                  </div>
                </div>
                <span className={styles.wishlistIcon}>
                <i className={!inWishlist?"far fa-heart":"fas fa-heart"} 
                 onClick={() => {inWishlist?
                  
                  dispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: id,
                    },successToast("removed from wishlist"))
                    
                  
                  : 
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: id,
                },successToast("added to wishlist"));
                
            } }>

            </i>
                </span>
                

                
              </div>
              <div className={styles.actionBtns}>
              {inStock?inCart?
                        <button 
                            className={`${styles["button-secondary"]} `}
                        >
                            <NavLink to="/cart" style={{textDecoration:"none",color:"white"}}>
                                Go to cart
                            </NavLink>
                        </button>:
                        <button 
                            className={`${styles["button-primary"]} `}
                            onClick={()=>{
                                
                                dispatch({type:"ADD_TO_CART",payload:id})
                                successToast("added to cart")
                            }}
                        >
                        Add to cart
                        </button>:
                        <div className={`${styles["button-solid"]} ${styles["badge-not-instock"]}`}>
                            Not in stock
                        </div>
                        }

                       


              
              </div>
              
            </div>
          </div>    
      </div>
    )
}
  

