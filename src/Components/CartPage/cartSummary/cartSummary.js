import styles from "./cartSummary.module.css";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../store/ProductContext";

export default function CartSummary() {
  const { cartItems, dispatch, totalCost } = useContext(ProductContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.product?.price) * item.quantity,
    0
  );

  useEffect(() => {
    dispatch({ type: "CALC_TOTAL_COST", payload: totalPrice });
  }, [dispatch, totalPrice]);

  return (
    <div className={styles.section}>
      <h4>Price Details</h4>
      <div className={styles.priceDetails}>
        <p>Total MRP</p>
        <p>Rs. {totalCost}</p>
      </div>
      <div className={styles.priceDetails}>
        <p>Total Discount</p>
        <p>-Rs 200</p>
      </div>
      <div className={styles.priceDetails}>
        <p>Convinence Fee</p>
        <p>Free</p>
      </div>
      <hr />
      <div className={styles.priceDetails}>
        <p style={{ fontSize: "large", fontWeight: "500" }}>Total MRP</p>
        <p style={{ fontSize: "large", fontWeight: "500" }}>Rs. {totalPrice}</p>
      </div>
      <button className={styles.orderBtn}>Place Order</button>
    </div>
  );
}
