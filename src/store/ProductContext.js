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
        totalCost:0
    })

    return(
        <ProductContext.Provider 
            value={{
                products:state.products,
                cartItems:[...state.cartItems],
                wishListItems:[...state.wishListItems],
                dispatch:dispatch,
                hasDiscount:state.hasDiscount,
                fastDelivery:state.fastDelivery,
                includeOutOfStock:state.includeOutOfStock,
                sortby:state.sortby,
                totalCost:state.totalCost,
                filterByCatagory:state.filterByCatagory
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}