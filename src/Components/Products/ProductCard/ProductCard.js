import styles from './ProductCard.module.css'

export default function ProductCard({id,name,image,hasDiscount,price,discount,rating,pixmartChoice,inCart,inWishlist,inStock}) {
    return (
      <div className={styles.App}>
      
          <div className={styles.cards}>
          <div className={styles.carditem}>
              <div className={styles.cardimage}>
              <img className={styles.cardimage} src={image} alt=""/>
              </div>
              <div className={styles.cardinfo}>
                <h2 className={styles.cardtitle}> {name}</h2>
                <p className={styles.cardintro}>
                Rs. {price}
                <br></br>
                <i className="fas fa-star"></i>
                {rating}
                </p>
              </div>
            </div>
          </div>    
      </div>
    )
}
  