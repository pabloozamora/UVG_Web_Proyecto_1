import React from 'react'
import styles from './NavBar.module.css'
import arrowDown from '../../assets/arrowdown.svg'
import crunchyRollLogo from '../../assets/crunchyrolllogo.svg'
import crown from '../../assets/crown.svg'
import search from '../../assets/search.svg'
import bookmark from '../../assets/bookmark.svg'
import user from '../../assets/user.svg'

const NavBar = () => (
  <div className={styles.navBarContainer}>
    <div className={styles.logoContainer} />
    <div className={styles.navBarLeft}>
      <div className={styles.crunchylogoContainer}>
        <img className={styles.crunchyRollLogo} alt="logo" src={crunchyRollLogo} />
      </div>
      <div className={styles.optionContainer}>
        <span className={styles.optionText}>Explorar</span>
        <img className={styles.optionArrow} alt="arrow" src={arrowDown} />
      </div>
      <div className={styles.optionContainer}>
        <span className={styles.optionText}>Manga</span>
      </div>
      <div className={styles.optionContainer}>
        <span className={styles.optionText}>Juegos</span>
      </div>
      <div className={styles.optionContainer}>
        <span className={styles.optionText}>Noticias</span>
        <img className={styles.optionArrow} alt="arrow" src={arrowDown} />
      </div>
    </div>
    <div className={styles.navBarRight}>
      <div className={styles.optionContainer}>
        <img className={styles.crown} alt="crown" src={crown} />
        <div className={styles.premiumText}>
          <span className={styles.premiumText1}>PROBAR</span>
          <span className={styles.premiumText1}>GRATIS</span>
          <span className={styles.premiumText2}>PREMIUM</span>
        </div>
      </div>
      <div className={styles.optionContainer}>
        <img className={styles.navBarImg} alt="search" src={search} />
      </div>
      <div className={styles.optionContainer}>
        <img className={styles.navBarImg} alt="bookmarks" src={bookmark} />
      </div>
      <div className={styles.optionContainer}>
        <img className={styles.navBarImg} alt="profile" src={user} />
      </div>
    </div>
  </div>
)

export default NavBar
