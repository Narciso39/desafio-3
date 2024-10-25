import React, { useState, useEffect } from "react";
import InformationBar from "../../components/InformationBar/InformationBar";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";
import ProductCard from "../../components/productsCard/ProductCard";
import NextPage from "../../components/NextPageBTN/NextPage";
import FilterBar from "../../components/filterBar/FilterBar";

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);
  const [limit, setLimit] = useState(16);
  const [sortBy, setSortBy] = useState("asc");

  // Chama a API quando algum dos parâmetros muda
  const { products, totalCount, error, loading } = useAPIGetAllProducts(
    currentPage,
    limit,
    filters,
    sortBy
  );

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newLimit: number, sortByValue: string, selectedFilters: string[]) => {
    setFilters(selectedFilters);
    setLimit(newLimit); 
    setSortBy(sortByValue); 
    setCurrentPage(1); 
  };

  return (
    <>
      <SecondHero before="Home" actual="Shop" />
      <FilterBar  />
      <ProductCard products={products} limit={limit} />
      <NextPage
        nPage={totalPages} 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        filters={filters} 
        limit={limit}     
        sortBy={sortBy}   
      />
      <InformationBar />
    </>
  );
};

export default Shop;
