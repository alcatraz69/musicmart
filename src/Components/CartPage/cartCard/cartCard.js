import styles from "./cartCard.module.css";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
import { successToast } from "../../Toast/toast";
import { searchWishlist } from "../../../Utils/Utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
} from "../../../api/serverCalls";
export default function CartCard({ cartId, product, quantity }) {
  const { wishListItems, dispatch } = useContext(ProductContext);

  return (
    <div className={styles.card}>
      <div className={styles.cardHero}>
        <img className={styles.cardImg} src={product?.image} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.carInfo}>
          <p style={{ width: "150px", fontSize: "18px", margin: "0" }}>
            Rs. {product?.price}
          </p>
          <p style={{ width: "150px", fontSize: "14px" }}>{product?.name}</p>
        </div>

        <div className={styles.quantity}>
          <button
            className={styles.quantityBtn}
            onClick={() => {
              decrementQuantity(cartId);
              dispatch({ type: "DECREMENT_QUANTITY", payload: cartId });
            }}
          >
            -
          </button>
          <p className={styles.quantityTxt}>{quantity}</p>
          <button
            className={styles.quantityBtn}
            onClick={() => {
              incrementQuantity(cartId);
              dispatch({ type: "INCREMENT_QUANTITY", payload: cartId });
            }}
          >
            +
          </button>
        </div>

        <div className={styles.cardBtns}>
          <button
            className={styles.cardBtn1}
            onClick={() => {
              removeFromCart(product);
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
              successToast("Removed from cart");
            }}
          >
            Delete
          </button>
          <button
            href="#"
            className={styles.cardBtn1}
            onClick={() => {
              addToWishlist(product);
              dispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
              });
            }}
          >
            {searchWishlist(wishListItems, product?._id) === true
              ? "In Wishlist"
              : "Move to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
