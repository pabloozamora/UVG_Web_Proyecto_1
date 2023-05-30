import React, { useEffect, useState } from 'react'
import styles from './MainCarrousel.module.css'
import orangeBg from '../../assets/mainCarrouselBgOrange.svg'
import blueBg from '../../assets/mainCarrouselBgBlue.svg'
import carrouselArrow from '../../assets/carrouselArrow.svg'

const MainCarrousel = () => {
  const [currentBackground, setCurrentBackGround] = useState(orangeBg)
  const [currentDisplay, setCurrentDisplay] = useState(0)
  const [nextDisplay, setNextDisplay] = useState(1)
  const [imageStyles, setImageStyles] = useState({})
  const displayImages = ['https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/3ea22dd4-58dc-4ebf-a182-6634fd4b3453.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/435a0180-9631-4055-93ad-08573dbe1462.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/cbc60dcc-9f32-4fc1-824b-999e52e7aa52.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/2cfc0c0a-71cc-4fed-9f51-9a34b2496b3b.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/5fb61e16-7e8d-472e-956d-bfceb2b149ba.webp',
    'https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/50598936-54f0-4b16-ac6d-9c746bbe3dc0.webp']

  const changeImage = () => {
    // console.log(imageStyles)
    // setImageStyles((oldStyles) => ({ ...oldStyles, [`image${currentDisplay}`]: styles.swipePrevImage }))
    if (currentBackground === blueBg) {
      setCurrentBackGround(orangeBg)
    } else setCurrentBackGround(blueBg)

    /* const currentIndex = currentDisplay
    if (currentIndex === 5) {
      setImageStyles((oldStyles) => ({ ...oldStyles, image5: styles.swipePrevImage }))
      setCurrentDisplay(0)
      setNextDisplay(1)
      setImageStyles((oldStyles) => ({ ...oldStyles, image0: '' }))
      setImageStyles((oldStyles) => ({ ...oldStyles, image1: styles.swipeNextImage }))
    } else {
      setCurrentDisplay((oldDisplay) => (oldDisplay + 1))
      setImageStyles((oldStyles) => ({ ...oldStyles, [`image${currentDisplay}`]: styles.swipePrevImage }))
      setImageStyles((oldStyles) => ({ ...oldStyles, [`image${currentDisplay + 1}`]: '' }))
      if (currentIndex === 4) {
        setNextDisplay(0)
        setImageStyles((oldStyles) => ({ ...oldStyles, image0: styles.swipeNextImage }))
      }
    } */
  }

  useEffect(() => {
    setTimeout(() => {
      changeImage()
    }, 4000)
  }, [])

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
        {(currentDisplay === 0 || nextDisplay === 0) && (
        <img className={styles.displayImg} alt="image0" src={displayImages[0]} />
        )}
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
