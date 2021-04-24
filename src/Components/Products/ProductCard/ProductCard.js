import styles from './ProductCard.module.css'
import {useContext} from 'react'
import {ProductContext} from '../../../store/ProductContext'

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
                    })
                  : 
                dispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: id,
                });
                console.log("onclick");
            }}>

            </i>
                </span>
                

                
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
              {/* <button>{inStock?"Add To Cart":"Out of Stock"}</button>
              <button>Add to Wishlist</button> */}
            </div>
          </div>    
      </div>
    )
}
  

// {inWishlist?<button 
//   className={`${styles["button-solid"]} ${styles["button-solid-secondary"]}`}
// >
//   {/* <Link to="/wishlist">
//       Go to Wishlist
//   </Link> */}
// </button>:<button 
//   className={`${styles["button-outline"]} ${styles["button-secondary"]}`}
//   // onClick={()=>{
//   //     dispatch({type:"ADD_TO_WISHLIST",payload:id})
//   //     infoToast(`${name} Added to wishlist`)
//   // }}
// >
// Add to wishlist
// </button>}