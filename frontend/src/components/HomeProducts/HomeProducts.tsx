import React from 'react'
import styles from './HomeProducts.module.css';
import ProductCard from '../productsCard/ProductCard';
import mockProducts from '../../hooks/test/MockProducts';
import ShowMore from '../ShowMoreBTN/ShowMore';

const HomeProducts: React.FC = () => {
  return (
    <section className={styles.title}> 
    <h3 className={styles.htres}>Our Products</h3>
    <ProductCard products={mockProducts} limit={8} />
    <ShowMore />
    </section>
  )
}

export default  HomeProducts;