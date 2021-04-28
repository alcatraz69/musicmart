import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../Assets/images/1.png'
import img2 from '../../Assets/images/4.png'
import img3 from '../../Assets/images/3.png'
import styles from './Banner.module.css'
import {NavLink} from 'react-router-dom'

export default function Banner(){
    return(
    <>
        
        <Carousel className={styles.carousel} fade={true} controls={false} pause={false} indicators={false}>
  <Carousel.Item interval={3000}>
    <span className={styles.bannerImg}><img
    
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    </span>
    <Carousel.Caption>
      <h3>Get great deals</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <span className={styles.bannerImg}>
    <img
    
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    </span>
    <Carousel.Caption>
      <h3>On best products</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <span className={styles.bannerImg}>
    <img
    
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </span>
    <Carousel.Caption>
      <h3>Across various categories</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  <NavLink to="/Products" className={styles.btn} style={{textDecoration:"none",width:"118px"}}>Shop Now</NavLink>
</>
    )

    
}