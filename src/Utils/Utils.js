export function searchWishlist(wishlist, product) {
  const present = wishlist?.find((item) => item?._id === product);
  if (present) {
    return true;
  } else {
    return false;
  }
}

export function searchCart(cart, product) {
  const present = cart?.find((item) => item.product?._id === product);
  if (present) {
    return true;
  } else {
    return false;
  }
}
