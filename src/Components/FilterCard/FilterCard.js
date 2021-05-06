import {useContext,useState} from 'react'
import {ProductContext} from '../../store/ProductContext'
import styles from './FilterCard.module.css'
export default function FilterCard(){
  const {dispatch} = useContext(ProductContext)
  const [openFilter, setFilter] = useState(false);
    return(
        <div className={openFilter?styles.FilterCardActive:styles.FilterCard} >
            <h5 className={styles.desktop_filter}>Filters <i className="fas fa-filter"></i></h5>
            <h5 onClick={() => setFilter((openFilter) => !openFilter)} className={styles.mobile_filter}>
              {openFilter? "Apply" : "Filters"} <i className="fas fa-filter"></i></h5>
            <hr/>
          <legend>Sort by price</legend>
          <label>
            <input
            className={styles.radioBtn}
              type="radio"
              name="price"
              onClick={() => dispatch({ type: "SORT_LOW_TO_HIGH" })}
            />
          
            low to high
          </label>
          <label>
            <input
            className={styles.radioBtn}
              type="radio"
              name="price"
              onClick={() => dispatch({ type: "SORT_HIGH_TO_LOW" })}
            />
          
            hight to low
          </label>

          <hr/>
          
        
          <legend>Preferences</legend>
          <label>
            <input
            className={styles.radioBtn}
              type="checkbox"
              onClick={() => dispatch({ type: "OUT_OF_STOCK" })}
            />
            include out of stock products
          </label>
          <label>
            <input
            className={styles.radioBtn}
              type="checkbox"
              onClick={() => dispatch({ type: "WITH_FAST_DELIVERY" })}
            />
            fast delivery only
          </label>

          <hr/>
          <legend>Price</legend>
          <label>
            slide 
            <input
            className={styles.slideBtn}
              type="range"
              min={0}
              max={23000}
              step={5000}
              onChange={(event) =>
                dispatch({ type: "SETPRICERANGE", payload: event.target.value })
              }
            />
          </label>
         
        </div>
    )
}