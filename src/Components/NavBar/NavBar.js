import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../store/ProductContext";
import { FaMusic } from "react-icons/fa";
import { useAuth } from "../../store/AuthContext";

export function Navbar() {
  const { wishListItems, cartItems } = useContext(ProductContext);
  const { authState } = useAuth();

  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className={styles.famusic}>
            <FaMusic className={styles.famusic} />
          </span>
          MUSIC<strong>MART</strong>
        </NavLink>
        <div
          className={styles.menuicon}
          onClick={() => {
            handleClick();
          }}
        >
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>

      <ul className={clicked ? styles.listActive : styles.list}>
        <li className={styles.listitem}>
          <NavLink
            to="/"
            exact
            style={{ textDecoration: "none" }}
            activeStyle={{
              borderBottom: "2px solid black",
            }}
          >
            Home
          </NavLink>
        </li>

        <li className={styles.listitem}>
          <NavLink
            to="/products"
            style={{ textDecoration: "none" }}
            activeStyle={{
              borderBottom: "2px solid black",
            }}
          >
            Products
          </NavLink>
        </li>

        <li className={styles.listitem}>
          <NavLink
            to="/cart"
            style={{ textDecoration: "none" }}
            activeStyle={{
              borderBottom: "2px solid black",
            }}
          >
            <span className={styles.title}>
              Cart
              {cartItems.length > 0 ? (
                <span className={styles.badge}>{cartItems.length}</span>
              ) : null}
            </span>
          </NavLink>
        </li>

        <li className={styles.listitem}>
          <NavLink
            to="/wishlist"
            style={{ textDecoration: "none" }}
            activeStyle={{
              borderBottom: "2px solid black",
            }}
          >
            <span className={styles.title}>
              Wishlist
              {wishListItems.length > 0 ? (
                <span className={styles.badge}>{wishListItems.length} </span>
              ) : null}
            </span>
          </NavLink>
        </li>
        {authState.isUserLoggedIn ? (
          <li className={styles.listitem}>
            <NavLink
              to="/account"
              style={{ textDecoration: "none" }}
              activeStyle={{
                borderBottom: "2px solid black",
              }}
            >
              <span className={styles.title}>Hi, {authState.name}</span>
            </NavLink>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
