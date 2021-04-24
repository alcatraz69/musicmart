import {useContext} from 'react'
import {ProductContext} from '../../store/ProductContext'
import styles from './FilterCard.module.css'
export default function FilterCard(){
  const {dispatch} = useContext(ProductContext)
    return(
        <div className={styles.FilterCard} style={{ display: "flex", flexWrap: "wrap" ,flexDirection: "column"}}>
            
          <legend>Sort by price</legend>
          <label>
            <input
            className={styles.radioBtn}
              type="radio"
              name="price"
              onClick={() => dispatch({ type: "SORTLOWTOHIGH" })}
            />
            low to high
          </label>
          <label>
            <input
            className={styles.radioBtn}
              type="radio"
              name="price"
              onClick={() => dispatch({ type: "SORTHIGHTOLOW" })}
            />
            hight to low
          </label>

          <hr></hr>
          
        
          <legend>Preferences</legend>
          <label>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "OUTOFSTOCK" })}
            />
            inclue out of stock products
          </label>
          <label>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "WITHFASTDELIVERY" })}
            />
            fast delivery only
          </label>

          <hr></hr>
          <legend>Price</legend>
          <label>
            slide 
            <input
              type="range"
              min={0}
              
              max={1000}
              // onChange={(event) =>
              //   dispatch({ type: "SETPRICERANGE", payload: event.target.value })
              // }
            />
          </label>
         
        </div>
    )
}