import React from "react";

import InformationBar from "../../components/InformationBar/InformationBar";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";
import ProductCard from "../../components/productsCard/ProductCard";
import NextPage from "../../components/NextPageBTN/NextPage";

const Shop: React.FC = () => {
  
  const {products, error, loading } = useAPIGetAllProducts();

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <>
      <SecondHero before="Home" actual="Shop" />
      <ProductCard products={products} limit={16} />
      <NextPage nPage={3} next="next"/>
      <InformationBar />
    </>
  );
};

export default Shop;
