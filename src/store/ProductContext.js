import {createContext,useEffect,useReducer} from 'react';
import axios from 'axios';

export const ProductContext=createContext();

export const ProductsContextProvider=({children})=>{
    useEffect(()=>{
        (async()=>{
            const data=await axios.get("/api/products");
            console.log(data);
            dispatch ({
                type:"LOAD_PRODUCT_LIST",
                payload:[...data.data.products]
            })
        })()
    },[])

    const productListManipulation=(state,action)=>{
        switch (action.type) {
            case "LOAD_PRODUCT_LIST":    
                return {
                    ...state,
                    products:action.payload.map(item=>({...item,inCart:false,inWishlist:false,quantity:0}))
                }
            case "SORTLOWTOHIGH":
                    return {
                      ...state,
                      sortBy: "SORTLOWTOHIGH"
                    };
            case "SORTHIGHTOLOW":
                    return {
                      ...state,
                      sortBy: "SORTHIGHTOLOW"
                    };
            case "OUTOFSTOCK":
                    return {
                      ...state,
                      includeOutOfStock: !state.includeOutOfStock
                    };
            case "WITHFASTDELIVERY":
                    return {
                        ...state,
                        onlyFastDelivery: !state.onlyFastDelivery
                    };
            case "SETPRICERANGE":
                        return {
                          ...state,
                          priceRange: action.payload
                          
                        };
            default:
                    return state;
        }
    }

   

    const [state,dispatch]=useReducer(productListManipulation,{
        products:[],
        cartItems:[],
        wishListItems:[],
        hasDiscount:false,
        fastDelivery:false,
        includeOutOfStock:false,
        sortby:"SORT_LOW_TO_HIGH",
        filterByCatagory:null,
        totalCost:0,
        priceRange:null
    })


    // const getProductsUnderPrice = (products, priceRange) => {
    //     if (priceRange) return products.filter((item) => item.price <= priceRange);
    //     return products;
    //   };
    
    const getSortedData = (products, sortBy) => {
        if (sortBy === "SORTLOWTOHIGH")
          return products.sort((a, b) => a.price - b.price);
        if (sortBy === "SORTHIGHTOLOW")
          return products.sort((a, b) => b.price - a.price);
        return products;
      };

      const getFilteredData = (products, onlyFastDelivery, includeOutOfStock) => {
        return products
          .filter((item) => (onlyFastDelivery ? item.fastDelivery : true))
          .filter((item) => (includeOutOfStock ? true : item.inStock));
      };

   

      console.log(state.priceRange)

    //   const priceRangeData = getProductsUnderPrice(state.items, state.priceRange);

      const sortedData = getSortedData(state.products, state.sortBy);

      const filteredData = getFilteredData(
        sortedData,
        state.onlyFastDelivery,
        state.includeOutOfStock
      );

//       const getMin = () => getSortedData(state.items, "SORTLOWTOHIGH")[0].price;
//   const getMax = () => getSortedData(state.items, "SORTHIGHTOLOW")[0].price;

 

  

   

    return(
        <ProductContext.Provider 
            value={{
                products:filteredData,
                cartItems:[...state.cartItems],
                wishListItems:[...state.wishListItems],
                dispatch:dispatch,
                hasDiscount:state.hasDiscount,
                fastDelivery:state.fastDelivery,
                includeOutOfStock:state.includeOutOfStock,
                sortby:state.sortby,
                totalCost:state.totalCost,
                filterByCatagory:state.filterByCatagory,
                // getMin:getMin,
                // getMax:getMax
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}