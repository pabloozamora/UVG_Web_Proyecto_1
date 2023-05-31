import React, { useEffect, useState } from 'react'
import styles from './MainCarrousel.module.css'
import orangeBg from '../../assets/mainCarrouselBgOrange.svg'
import blueBg from '../../assets/mainCarrouselBgBlue.svg'
import carrouselArrow from '../../assets/carrouselArrow.svg'

const MainCarrousel = () => {
  const [currentBackground, setCurrentBackGround] = useState(orangeBg)
  const [currentDisplay, setCurrentDisplay] = useState(0)
  const displayImages = ['https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/3ea22dd4-58dc-4ebf-a182-6634fd4b3453.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/50ba7056-7db4-4d7b-a2ad-1c8eca5d5dc8.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/01ed6dcf-2d2e-402f-b134-d6218eabce06.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/2cfc0c0a-71cc-4fed-9f51-9a34b2496b3b.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/8047572c-9831-4ce2-b164-a318e53c2fb0.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/724b5da6-3181-4d9f-97f8-6cf2aaa87c22.webp']

  const changeImage = () => {
    if (currentDisplay === 1 || currentDisplay === 3 || currentDisplay === 5) {
      setCurrentBackGround(orangeBg)
    } else setCurrentBackGround(blueBg)

    const currentIndex = currentDisplay
    if (currentIndex === 5) {
      setCurrentDisplay(0)
    } else {
      setCurrentDisplay((oldDisplay) => (oldDisplay + 1))
    }
  }

  useEffect(() => {
    setTimeout(() => {
      changeImage()
    }, 4000)
  }, [currentDisplay])

  return (
    <div className={styles.mainCarrouselContainer}>
      <div className={styles.backgroundContainer}>
        <img className={currentBackground === blueBg ? styles.blueBg : styles.blueBgHidden} alt="background" src={blueBg} />
        <img className={styles.orangeBg} alt="background" src={orangeBg} />
      </div>
      <div className={styles.displayContainer}>
        {currentDisplay !== 0 && (
        <div className={styles.carrouselArrowContainer}>
          <img className={styles.carrouselArrowLeft} alt="arrow" src={carrouselArrow} />
        </div>
        )}
        {currentDisplay === 0 && (
        <div className={styles.carrouselArrowContainerHidden}>
          <img className={styles.carrouselArrowLeft} alt="arrow" src={carrouselArrow} />
        </div>
        )}
        <img className={currentDisplay === 0 ? styles.onDisplay : styles.notOnDisplay} alt="image0" src={displayImages[0]} />
        <img className={currentDisplay === 1 ? styles.onDisplay : styles.notOnDisplay} alt="image1" src={displayImages[1]} />
        <img className={currentDisplay === 2 ? styles.onDisplay : styles.notOnDisplay} alt="image2" src={displayImages[2]} />
        <img className={currentDisplay === 3 ? styles.onDisplay : styles.notOnDisplay} alt="image3" src={displayImages[3]} />
        <img className={currentDisplay === 4 ? styles.onDisplay : styles.notOnDisplay} alt="image4" src={displayImages[4]} />
        <img className={currentDisplay === 5 ? styles.onDisplay : styles.notOnDisplay} alt="image5" src={displayImages[5]} />
        {currentDisplay !== 5 && (
        <div className={styles.carrouselArrowContainer}>
          <img className={styles.carrouselArrowRight} alt="arrow" src={carrouselArrow} />
        </div>
        )}
        {currentDisplay === 5 && (
        <div className={styles.carrouselArrowContainerHidden}>
          <img className={styles.carrouselArrowRight} alt="arrow" src={carrouselArrow} />
        </div>
        )}
      </div>
    </div>
  )
}

export default MainCarrousel
