// src/pages/Shop/Shop.tsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InformationBar from "../../components/InformationBar/InformationBar";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";
import ProductCard from "../../components/productsCard/ProductCard";
import NextPage from "../../components/NextPageBTN/NextPage";
import FilterBar from "../../components/filterBar/FilterBar";

const Shop: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(query.get("page") || "1", 10));
  const limit = 16; // Define o limite de produtos por página

  const { products, totalCount, error, loading } = useAPIGetAllProducts(
    currentPage,
    limit
  );

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  const totalPages = Math.ceil(totalCount / limit); // Calcula o total de páginas

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SecondHero before="Home" actual="Shop" />
      <FilterBar />
      <ProductCard products={products} limit={limit} />
      <NextPage
        nPage={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <InformationBar />
    </>
  );
};

export default Shop;
