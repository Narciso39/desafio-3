import React, { useState } from "react";
import styles from "./SingleProduct.module.css";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";
import ProductCard from "../../components/productsCard/ProductCard";
import ShowMore from "../../components/ShowMoreBTN/ShowMore";

const SingleProductPage: React.FC = () => {
  const [limit, setLimit] = useState(4);
  const { products, error, loading } = useAPIGetAllProducts(1, limit);

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 4); 
  };

  return (
    <>
      <SingleProduct />
      <section className={styles.section}>
        <h3 className={styles.htres}>Related Products</h3>
        <ProductCard products={products} limit={limit} />
        <ShowMore use={false}onShowMore={handleShowMore} />
        <hr className={styles.finalHr} />
      </section>
    </>
  );
};

export default SingleProductPage;
