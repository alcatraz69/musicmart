import styles from './cartCard.module.css'
export default function CartCard({id,name,image,hasDiscount,price,category,discount,rating,inCart,inWishlist,inStock,fastDelivery}){
    return(
        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src={image} alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. {price}</h5>
               <p>{name}</p>

             </div>
             <div className={styles.cardBtns}>
               <button href="#" className={styles.cardBtn1}>Delete</button>
               <button href="#" className={styles.cardBtn1}>Move to wishlist</button>
             </div>
           </div>
        </div>
    )

}