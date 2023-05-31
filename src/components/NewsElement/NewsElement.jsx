import React from 'react'
import PropTypes from 'prop-types'
import styles from './NewsElement.module.css'

const NewsElement = ({
  src, title, subtitle, author,
}) => (
  <div className={styles.newsElementContainer}>
    <div className={styles.imgWrapper}>
      <img alt="news" className={styles.newsImg} src={src} />
    </div>
    <div className={styles.textContainer}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
      <span className={styles.author}>{author}</span>
    </div>
  </div>
)

NewsElement.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default NewsElement
