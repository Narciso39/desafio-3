import React from 'react'
import styles from './FirstSection.module.css'
import CategoryCards from './CategoryCard';

const FirstSection: React.FC = () => {
  return (
    <section className={styles.first}>
      <h2>Browse The Range</h2>
      <CategoryCards />
    </section>
  )
}

export default FirstSection;