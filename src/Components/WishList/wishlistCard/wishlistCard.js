import styles from './wishlistCard.module.css'
import {ProductContext} from '../../../store/ProductContext'
import {useContext} from 'react'

export default function WishlistCard({id,name,image,hasDiscount,price,category,discount,rating,inCart,inWishlist,inStock,fastDelivery}) {

    const {dispatch}=useContext(ProductContext);
    return (
      <div className={styles.App}>
      
          <div className={styles.cards}>
          
          <div className={styles.carditem}>
          
              <div className={styles.cardimage}>
              <img className={styles.cardimage} src={image} alt=""/>
              </div>
              {fastDelivery && (
          <span className={styles.badge}>Express</span>
        )}
              <div className={styles.cardinfo}>
                <h2 className={styles.cardtitle}> {name}</h2>
                <p>{category}</p>
                <div className={styles.cardintro}>
                  <div style={{marginRight:"60px"}}>
                    Rs. {price}
                  </div>
                
                  <div className={styles.rating}>
                    <i className="fas fa-star"></i>
                     {rating}
                  </div>
                </div>
                
                 <i className={inWishlist?"far fa-heart":"fas fa-heart"} 
                 onClick={() => { inWishlist?
                  dispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: id,
                    })
                  :
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: id,
                });
            }}>

            </i>

                
              </div>
              <div className={styles.actionBtns}>
              {inStock?inCart?
                        <button 
                            className={`${styles["button-solid"]} ${styles["button-solid-secondary"]}`}
                        >
                            {/* <Link to="/cart">
                                Go to cart
                            </Link> */}
                        </button>:
                        <button 
                            className={`${styles["button-solid"]} ${styles["button-primary"]}`}
                            // onClick={()=>{
                            //     successToast(`${name} Added to cart`)
                            //     dispatch({type:"ADD_TO_CART",payload:id})
                            // }}
                        >
                        Add to cart
                        </button>:
                        <div className={`${styles["badge-solid"]} ${styles["badge-not-instock"]}`}>
                            Not in stock
                        </div>
                        }

   
              </div>
            
            </div>
          </div>    
      </div>
    )
}
  