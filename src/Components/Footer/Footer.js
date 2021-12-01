import styles from './Footer.module.css'
export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerHeader}>
              Made with <span style={{color:"red"}}> ❤ </span> by
              Prem Kantikar
            </div>
            <div className={styles.socialLinks}>
                <a className={styles.icon} href="https://twitter.com/prem_kantikar_" target="_blank" rel="noreferrer"> <i className="fab fa-github"></i></a>
                <a className={styles.icon} href="https://twitter.com/prem_kantikar_" target="_blank" rel="noreferrer"> <i className="fab fa-twitter"></i></a>
                <a className={styles.icon} href="https://twitter.com/prem_kantikar_" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className={styles.footerEnd}>
                © 2021 Alcatraz Designs
           </div>
        </div>
    )
}