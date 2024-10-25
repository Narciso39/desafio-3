import React from "react";
import { useParams } from "react-router-dom";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIProductsByCategory } from "../../hooks/useAPIProductsByCategoryID";

const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extraindo o ID da rota

  const {
    products,
    error,
    loading,
  } = useAPIProductsByCategory(Number(id), 1); // Passando o ID como número

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  // Verifica se products é um array
  if (!Array.isArray(products)) {
    return <p>No products found.</p>;
  }

  return (
    <>
      {products.length > 0 && (
        <SecondHero
          key={products[0].id}
          before="Home"
          actual={products[0].category.name}
        />
      )}

      <ProductCard products={products} limit={16} />
      <InformationBar />
    </>
  );
};

export default Category;
