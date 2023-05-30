import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview1.module.css'
import playButton from '../../assets/playButton.svg'
import orangeBookmark from '../../assets/orangeBookmark.svg'

const Preview1 = ({
  title, subtitle, description, src,
}) => (
  <div className={styles.preview1Container}>
    <img className={styles.previewImage} alt="seriesPreview" src={src} />
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
)

Preview1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default Preview1
