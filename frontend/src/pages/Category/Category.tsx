import React from "react";
import { useParams } from "react-router-dom";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIProductsByCategory } from "../../hooks/useAPIProductsByCategoryID";


const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extraindo o ID da rota

  const { product: products, error, loading } = useAPIProductsByCategory(id ?? "0");

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;
  console.log(products);
  return (
    <>
      {products.map((p) => (
         <SecondHero key={p.id} before="Home" actual={p.category.name}/>
      ))}
      <ProductCard products={products} limit={16} />
      <InformationBar />
    </>
  );
};

export default Category;