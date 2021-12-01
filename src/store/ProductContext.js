import { createContext, useEffect, useReducer } from "react";
import { fetchProducts, getWishlist, getCart } from "../api/serverCalls";
import { useAuth } from "./AuthContext";

export const ProductContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const {
    authState: { authToken },
  } = useAuth();
  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      dispatch({
        type: "LOAD_PRODUCT_LIST",
        payload: [...data.data.products],
      });
    })();
  }, []);

  const loadWishlist = async () => {
    try {
      const { data } = await getWishlist();
      if (data) {
        dispatch({
          type: "LOAD_WISHLIST_FROM_SERVER",
          payload: [...data],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      loadWishlist();
    }
  }, [authToken]);

  const loadCart = async () => {
    try {
      const { data } = await getCart();
      if (data) {
        dispatch({
          type: "LOAD_CART_FROM_SERVER",
          payload: [...data],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      loadCart();
    }
  }, [authToken]);

  const productListManipulation = (state, action) => {
    switch (action.type) {
      case "LOAD_PRODUCT_LIST":
        return {
          ...state,
          products: [...action.payload],
        };
      case "LOAD_WISHLIST_FROM_SERVER":
        return {
          ...state,
          wishListItems: [...action.payload],
        };
      case "LOAD_CART_FROM_SERVER":
        return {
          ...state,
          cartItems: [...action.payload],
        };
      case "SORT_LOW_TO_HIGH":
        return {
          ...state,
          sortBy: "SORTLOWTOHIGH",
        };
      case "SORT_HIGH_TO_LOW":
        return {
          ...state,
          sortBy: "SORTHIGHTOLOW",
        };
      case "OUT_OF_STOCK":
        return {
          ...state,
          includeOutOfStock: !state.includeOutOfStock,
        };
      case "WITH_FAST_DELIVERY":
        return {
          ...state,
          onlyFastDelivery: !state.onlyFastDelivery,
        };
      case "SETPRICERANGE":
        return {
          ...state,
          priceRange: action.payload,
        };
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishListItems: [...state.wishListItems, action.payload],
        };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishListItems: state.wishListItems.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      case "INCREMENT_QUANTITY":
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product._id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      case "DECREMENT_QUANTITY":
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product._id === action.payload
              ? {
                  ...product,
                  quantity:
                    product.quantity > 1
                      ? product.quantity - 1
                      : product.quantity,
                }
              : product
          ),
        };

      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: action.payload,
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.product._id !== action.payload._id
          ),
        };
      case "CALC_TOTAL_COST":
        return {
          ...state,
          totalCost: action.payload,
        };
      case "LOG_OUT_HANDLER":
        return {
          ...state,
          cartItems: [],
          wishListItems: [],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(productListManipulation, {
    products: [],
    cartItems: [],
    wishListItems: [],
    hasDiscount: false,
    fastDelivery: false,
    includeOutOfStock: false,
    sortby: "SORT_LOW_TO_HIGH",
    filterByCatagory: null,
    totalCost: 0,
    priceRange: null,
  });

  const getProductsUnderPrice = (products, priceRange) => {
    if (priceRange)
      return products.filter((item) => parseInt(item.price) < priceRange);
    return products;
  };

  const getSortedData = (products, sortBy) => {
    if (products && sortBy === "SORTLOWTOHIGH")
      return products.sort((a, b) => a.price - b.price);
    if (products && sortBy === "SORTHIGHTOLOW")
      return products.sort((a, b) => b.price - a.price);
    return products;
  };

  const getFilteredData = (products, onlyFastDelivery, includeOutOfStock) => {
    return products
      .filter((item) => (onlyFastDelivery ? item.fastDelivery : true))
      .filter((item) => (includeOutOfStock ? true : item.inStock));
  };

  const sortedData = getSortedData(state.products, state.sortBy);

  const priceRangeData = getProductsUnderPrice(sortedData, state.priceRange);

  const filteredData = getFilteredData(
    priceRangeData,
    state.onlyFastDelivery,
    state.includeOutOfStock
  );

  return (
    <ProductContext.Provider
      value={{
        products: filteredData,
        cartItems: [...state.cartItems],
        wishListItems: [...state.wishListItems],
        dispatch: dispatch,
        hasDiscount: state.hasDiscount,
        fastDelivery: state.fastDelivery,
        includeOutOfStock: state.includeOutOfStock,
        sortby: state.sortby,
        totalCost: state.totalCost,
        filterByCatagory: state.filterByCatagory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
