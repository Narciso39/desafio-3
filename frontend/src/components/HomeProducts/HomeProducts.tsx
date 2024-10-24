import React from 'react'
import styles from './HomeProducts.module.css';
import ProductCard from '../productsCard/ProductCard';
import ShowMore from '../ShowMoreBTN/ShowMore';
import { useAPIGetAllProducts } from '../../hooks/useAPIGetAllProducts';

const HomeProducts: React.FC = () => {

  const {products, error, loading } = useAPIGetAllProducts();

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <section className={styles.title}> 
    <h3 className={styles.htres}>Our Products</h3>
    <ProductCard products={products} limit={8} />
    <ShowMore />
    </section>
  )
}

export default  HomeProducts;