import React, { useEffect, useState } from "react";
import Bar from "../barSingleProduct/Bar";
import { useAPIProductsById } from "../../hooks/useAPIProductById";
import { useNavigate, useParams } from "react-router-dom";
import ProductExhibition from "../productExhibition/ProductExhibition";
import { useAPIProductsByCategory } from "../../hooks/useAPIProductsByCategoryID";
import ProductCard from "../productsCard/ProductCard";
import ShowMore from "../ShowMoreBTN/ShowMore";
import styles from "./SingleProduct.module.css";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, error, loading } = useAPIProductsById(id ?? "");
  const navigate = useNavigate();
  const [limit, setLimit] = useState(4);

  const categoryId = product ? product.category_id : 1;
  const {
    products,
    error: categoryError,
    loading: categoryLoading,
  } = useAPIProductsByCategory(categoryId, 1, limit);

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
    localStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo({ top: parseInt(savedPosition, 10), behavior: "smooth" });
    }
  }, [products]);

  useEffect(() => {
    if (limit > 8) {
      navigate("/shop");
    }
  }, [limit, navigate]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("scrollPosition");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product: {error.message}</p>;
  if (categoryLoading) return <p>Loading related products...</p>;
  if (categoryError)
    return <p>Error fetching related products: {categoryError.message}</p>;

  return (
    <>
      {product && <Bar key={product.id} product={product.name} page="shop" />}
      {product && <ProductExhibition product={product} rating={5} />}
      <section className={styles.section}>
        <h3 className={styles.htres}>Related Products</h3>
        <ProductCard products={products} limit={limit} />
        <ShowMore use={false} onShowMore={handleShowMore} />
        <hr className={styles.finalHr} />
      </section>
    </>
  );
};

export default SingleProduct;
