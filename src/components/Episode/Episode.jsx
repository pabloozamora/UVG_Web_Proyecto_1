import React from 'react'
import PropTypes from 'prop-types'
import styles from './Episode.module.css'

const Episode = ({
  src, title, subtitle, time,
}) => (
  <div className={styles.episodeContainer}>
    <img alt="epImg" className={styles.epImage} src={src} />
    <div className={styles.textContainer}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
      <div className={styles.footer}>
        <span className={styles.desc}>Sub | Dob</span>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  </div>
)

Episode.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default Episode
