import React from 'react'
import ProductCard from '../productsCard/ProductCard'
import mockProducts from '../../hooks/test/MockProducts'
import ShowMore from '../ShowMoreBTN/ShowMore'
import styles from './SingleProduct.module.css'

const SingleProduct: React.FC= () => {
  return (
    <section className={styles.section}>
        <h3 className={styles.htres}>Related Products</h3>
         <ProductCard products={mockProducts} limit={4} />
         <ShowMore />
    </section>
  )
}

export default SingleProduct