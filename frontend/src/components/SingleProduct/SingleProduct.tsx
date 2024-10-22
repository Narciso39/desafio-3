import React from "react";
// import ProductCard from '../productsCard/ProductCard'
// import mockProducts from '../../hooks/test/MockProducts'
import ShowMore from "../ShowMoreBTN/ShowMore";
import styles from "./SingleProduct.module.css";
import Bar from "../barSingleProduct/Bar";
import { useAPIProductsById } from "../../hooks/useAPIProductById";
import { useParams } from "react-router-dom";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, error, loading } = useAPIProductsById(id ?? "");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <>
      {product && <Bar key={product.id} product={product.name} page="shop" />}
      <section className={styles.section}>
        <h3 className={styles.htres}>Related Products</h3>
        {/* <ProductCard products={mockProducts} limit={4} /> */}
        <ShowMore />
      </section>
    </>
  );
};

export default SingleProduct;
