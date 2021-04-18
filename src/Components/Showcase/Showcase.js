import styles from "./Showcase.module.css";

const images = [
  "https://picsum.photos/id/188/350/200",
  "https://picsum.photos/id/135/350/200",
  "https://picsum.photos/id/195/350/200",
  "https://picsum.photos/id/304/350/200",
  "https://picsum.photos/id/152/350/200",
  "https://picsum.photos/id/171/350/200",
  "https://picsum.photos/id/249/350/200",
  "https://picsum.photos/id/26/350/200"
]

export default function Showcase() {
  return (
    <div className={styles.App}>
        <div>
            <h1 style={{marginLeft:"40px",borderBlockEnd:"2px solid black"}}>DEALS OF THE DAY</h1>
        </div>
    <div className={styles.container}>


    {images.map((link)=>(
        <div className={styles.cards}>
        <div className={styles.carditem}>
            <div className={styles.cardimage}>
            <img className={styles.cardimage} src={link} alt=""/>
            </div>
            <div className={styles.cardinfo}>
              <h2 className={styles.cardtitle}><i className="fas fa-heart"></i> Buy more,Save more</h2>
              <p className={styles.cardintro}>
              40% to 70% Discount on budget days
              </p>
            </div>
          </div>
        </div>
    ))}
    
      </div>
    </div>
  );
}
