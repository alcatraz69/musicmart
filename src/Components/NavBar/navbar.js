import styles from './navbar.module.css'
import { NavLink} from "react-router-dom";
import {useState} from 'react'

export default function Navbar(){

    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(!clicked)
    }

    return(
        <div className={styles.nav}>
            <div className={styles.logo}>
                <span className={styles.famusic}><i className="fas fa-music" > </i></span> 
                MUSIC<strong>MART</strong>
                <div className={styles.menuicon} onClick={()=>{handleClick()}}>
           <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
        </div>
            </div>
            
            <ul className={clicked?styles.listActive:styles.list}>
                <li className={styles.listitem}><NavLink to="/">Home</NavLink></li>
                <li className={styles.listitem}><NavLink to="products">Products</NavLink></li>
                <li className={styles.listitem}><NavLink to="wishlist">Wishlist</NavLink></li>
                <li className={styles.listitem}>Cart</li>
            </ul>
           
        </div>
    )
   
}