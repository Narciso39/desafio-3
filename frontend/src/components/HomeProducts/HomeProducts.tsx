import React from "react";
import styles from "./HomeProducts.module.css";
import ProductCard from "../productsCard/ProductCard";
import ShowMore from "../ShowMoreBTN/ShowMore";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";

const HomeProducts: React.FC = () => {
  const page = 1;
  const limit = 8;
  const { products, error, loading } = useAPIGetAllProducts(
    page,
    limit
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <section className={styles.title}>
      <h3 className={styles.htres}>Our Products</h3>
      <ProductCard products={products} limit={8} />
      <ShowMore use={true} onShowMore={() => console.log("nada")} />
    </section>
  );
};

export default HomeProducts;
