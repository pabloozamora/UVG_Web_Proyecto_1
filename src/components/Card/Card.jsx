import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

const Card = ({ src, title, subtitle }) => (
  <div className={styles.cardContainer}>
    <img className={styles.cardImage} alt="img" src={src} />
    <div className={styles.textContainer}>
      <span className={styles.cardTitle}>{title}</span>
      {subtitle && (
      <span className={styles.cardSubtitle}>{subtitle}</span>
      )}
    </div>
  </div>

)

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

Card.defaultProps = {
  subtitle: null,
}

export default Card
