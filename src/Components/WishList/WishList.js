import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../store/ProductContext";
import styles from "./WishList.module.css";
import ProductCard from "../Products/ProductCard/ProductCard";

export function WishList() {
  const { wishListItems } = useContext(ProductContext);
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={styles.wishlistHead}>
        Your Wishlist - {wishListItems.length} items
      </div>
      {wishListItems.length > 0 ? (
        <ul className={styles.products}>
          {wishListItems.map(
            ({
              _id,
              name,
              image,
              price,
              category,
              rating,
              fastDelivery,
              inStock,
            }) => (
              <ProductCard
                key={_id}
                id={_id}
                name={name}
                image={image}
                price={price}
                category={category}
                rating={rating}
                fastDelivery={fastDelivery}
                inStock={inStock}
              />
            )
          )}
        </ul>
      ) : (
        <h1
          style={{
            height: "74vh",
            position: "relative",
            top: "140px",
            textAlign: "center",
          }}
        >
          Wishlist is empty
        </h1>
      )}
    </div>
  );
}
