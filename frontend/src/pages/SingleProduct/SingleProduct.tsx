import React from "react";
import styles from "./SingleProduct.module.css";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";
import ProductCard from "../../components/productsCard/ProductCard";
import ShowMore from "../../components/ShowMoreBTN/ShowMore";

const SingleProductPage: React.FC = () => {
  const { products, error, loading } = useAPIGetAllProducts();

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;
  return (
    <>
      <SingleProduct />
      
      <section className={styles.section}>
        <h3 className={styles.htres}>Related Products</h3>
        <ProductCard products={products} limit={4} />
        <ShowMore />
      </section>
    </>
  );
};

export default SingleProductPage;
