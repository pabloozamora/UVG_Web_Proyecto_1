import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview2.module.css'
import playButton from '../../assets/playButton.svg'
import orangeBookmark from '../../assets/orangeBookmark.svg'
import background from '../../assets/promoBackground.svg'

const Preview2 = ({
  title, subtitle, description, src1, src2,
}) => (
  <div className={styles.preview2Container}>
    <img className={styles.background} alt="bg" src={background} />
    <div className={styles.mainContainer}>
      <img className={styles.imgFigure} alt="figure" src={src1} />
      <img className={styles.previewImage} alt="preview" src={src2} />
      <div className={styles.contentContainer}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
        <p className={styles.previewDescription}>{description}</p>
        <div className={styles.buttonsContainer}>
          <button type="submit" className={styles.button1}>
            <img alt="play" className={styles.playButton} src={playButton} />
            COMENZAR A VER T1 E1
          </button>
          <button type="submit" className={styles.button2}>
            <img alt="save" className={styles.playButton} src={orangeBookmark} />
            AÑADIR A MI LISTA
          </button>
        </div>
      </div>
    </div>
  </div>
)

Preview2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src1: PropTypes.string.isRequired,
  src2: PropTypes.string.isRequired,
}

export default Preview2
