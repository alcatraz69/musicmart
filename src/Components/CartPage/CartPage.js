import React from "react";
import styles from "./CartPage.module.css";
import CartSummary from "./cartSummary/cartSummary";
import { ProductContext } from "../../store/ProductContext";
import { useContext } from "react";
import CartCard from "./cartCard/cartCard";

export function CartPage() {
  const { cartItems, totalCost } = useContext(ProductContext);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.totalcost}>
          <h5>Total cost : Rs. {totalCost}</h5>
          <button className={styles.orderBtn}>Place Order</button>
        </div>

        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map(({ _id, product, quantity }) => (
              <CartCard
                key={_id}
                cartId={_id}
                product={product}
                quantity={quantity}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.emptyCart}>Your cart is empty! 🥺</div>
        )}
      </div>
      <CartSummary />
    </>
  );
}
