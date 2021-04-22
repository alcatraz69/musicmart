import styles from './cartSummary.module.css'

export default function CartSummary(){
    return(
        <div className={styles.section}>
            <h4>Price Details</h4>
            <div className={styles.priceDetails}>
                <p>Total MRP</p>
                <p>Rs. 5,000</p>
            </div>
            <div className={styles.priceDetails}>
                <p>Total Discount</p>
                <p>-Rs 2,000</p>
            </div>
            <div className={styles.priceDetails}>
                <p>Convinence Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className={styles.priceDetails}>
                <p style={{fontSize:"large",fontWeight:"500"}}>Total MRP</p>
                <p style={{fontSize:"large",fontWeight:"500"}}>Rs. 3,000</p>
            </div>
            <button className={styles.orderBtn}>Place Order</button>
        </div>
    )
}