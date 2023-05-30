import React from 'react'
import PropTypes from 'prop-types'
import styles from './Selector.module.css'
import Card from '../Card/Card'
import carrouselArrow from '../../assets/carrouselArrow.svg'

const Selector = ({
  title, subtitle, color, elements,
}) => (
  <div className={styles.selectorMainContainer}>
    <span className={styles.title}>{title}</span>
    <span className={styles.subtitle}>{subtitle}</span>
    <div className={color === 'orange' ? styles.dividerOrange : styles.dividerGray} />
    <div className={styles.cardsContainer}>
      {elements.map((card) => <Card title={card.title} subtitle={card.subtitle} src={card.src} />)}
      <div className={styles.carrouselArrowContainer}>
        <img className={styles.carrouselArrowRight} alt="arrow" src={carrouselArrow} />
      </div>
    </div>
  </div>
)

Selector.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
}

export default Selector
