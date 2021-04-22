import styles from './ProductCard.module.css'

export default function ProductCard({id,name,image,hasDiscount,price,category,discount,rating,inCart,inWishlist,inStock,fastDelivery}) {
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
                    <i className="fas fa-star"></i>
                     {rating}
                  </div>
                </div>
                {inWishlist? <span className={styles.wishlistIcon}><i className="fas fa-heart"></i></span> :
                 <span className={styles.wishlistIcon}><i className="far fa-heart"></i></span>}

                
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