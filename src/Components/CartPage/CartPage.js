import React from "react";
import styles from './CartPage.module.css'
import CartSummary from './cartSummary/cartSummary'

export default function CartPage() {
  return (
    <>
    <div className={styles.section}>

        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src="https://picsum.photos/id/299/350/200" alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. 5999</h5>
               <p>Yamaha Acoustic guitar</p>
             </div>
             <div className={styles.cardBtns}>
               <button href="#" className={styles.cardBtn1}>Delete</button>
               <button href="#" className={styles.cardBtn1}>Move to wishlist</button>
             </div>
           </div>
        </div>

        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src="https://picsum.photos/id/292/350/200" alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. 5999</h5>
               <p>Yamaha Acoustic guitar</p>
             </div>
             <div className={styles.cardBtns}>
             <button href="#" className={styles.cardBtn1}>Delete</button>
               <button href="#" className={styles.cardBtn1}>Move to wishlist</button>
             </div>
           </div>
        </div>

        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src="https://picsum.photos/id/292/350/200" alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. 5999</h5>
               <p>Yamaha Acoustic guitar</p>
             </div>
             <div className={styles.cardBtns}>
             <button href="#" className={styles.cardBtn1}>Delete</button>
               <button href="#" className={styles.cardBtn1}>Move to wishlist</button>
             </div>
           </div>
        </div>

        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src="https://picsum.photos/id/292/350/200" alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. 5999</h5>
               <p>Yamaha Acoustic guitar</p>
             </div>
             <div className={styles.cardBtns}>
             <button href="#" className={styles.cardBtn1}>Delete</button>
               <button href="#" className={styles.cardBtn1}>Move to wishlist</button>
             </div>
           </div>
        </div>

        <div className={styles.card}>
           <div className={styles.cardHero}>
              <img className={styles.cardImg} src="https://picsum.photos/id/292/350/200" alt=""/>
           </div>
           <div className={styles.cardContent}>
             <div className={styles.carInfo}>
               <h5>Rs. 5999</h5>
               <p>Yamaha Acoustic guitar</p>
             </div>
             <div className={styles.cardBtns}>
             <button href="#" className={styles.cardBtn1}>Delete</button>
               <button href="#" className={styles.cardBtn1}>Move to wishlist</button>
             </div>
           </div>
        </div>

    </div>
    <CartSummary/>
    </>
  )
}
