import styles from "./ProductCard.module.css";
import { useContext } from "react";
import { ProductContext } from "../../../store/ProductContext";
import { NavLink } from "react-router-dom";
import { successToast } from "../../Toast/toast";
import { FaPaperPlane, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { searchCart, searchWishlist } from "../../../Utils/Utils";
import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
} from "../../../api/serverCalls";

export default function ProductCard({
  id,
  name,
  image,
  price,
  category,
  rating,
  inStock,
  fastDelivery,
}) {
  const { dispatch, wishListItems, cartItems, products } =
    useContext(ProductContext);
  const product = products.find((one) => one._id === id);

  function handleWishlist() {
    if (searchWishlist(wishListItems, id) === false) {
      addToWishlist(product);
      dispatch(
        {
          type: "ADD_TO_WISHLIST",
          payload: product,
        },
        successToast("Added to wishlist")
      );
    } else {
      removeFromWishlist(product);
      dispatch(
        {
          type: "REMOVE_FROM_WISHLIST",
          payload: product,
        },
        successToast("Removed from wishlist")
      );
    }
  }
  async function handleCart() {
    const response = await addToCart(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: response.data.cart,
    });
    successToast("added to cart");
  }
  return (
    <div className={styles.App}>
      <div className={styles.cards}>
        <div className={styles.carditem}>
          <div className={styles.cardimageSec}>
            <img className={styles.cardimage} src={image} alt="" />
          </div>
          {fastDelivery && (
            <span className={styles.badge}>
              <FaPaperPlane />
            </span>
          )}
          <div className={styles.cardinfo}>
            <h2 className={styles.cardtitle}> {name}</h2>
            <p>{category}</p>
            <div className={styles.cardintro}>
              <div style={{ marginRight: "60px" }}>Rs. {price}</div>

              <div className={styles.rating}>
                <div className={styles.star}>
                  <FaStar />
                </div>
                <div style={{ marginTop: "3px" }}>{rating}</div>
              </div>
            </div>
            <span className={styles.wishlistIcon}>
              <span onClick={handleWishlist}>
                {searchWishlist(wishListItems, id) === false ? (
                  <FaRegHeart />
                ) : (
                  <FaHeart />
                )}
              </span>
            </span>
          </div>
          <div className={styles.actionBtns}>
            {inStock ? (
              searchCart(cartItems, id) === true ? (
                <button className={`${styles["button-secondary"]} `}>
                  <NavLink
                    to="/cart"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Go to cart
                  </NavLink>
                </button>
              ) : (
                <button
                  className={`${styles["button-primary"]} `}
                  onClick={handleCart}
                >
                  Add to cart
                </button>
              )
            ) : (
              <div
                className={`${styles["button-solid"]} ${styles["badge-not-instock"]}`}
              >
                Not in stock
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
