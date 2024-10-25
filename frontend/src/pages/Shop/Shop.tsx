import React, { useState } from "react";
import InformationBar from "../../components/InformationBar/InformationBar";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIGetAllProducts } from "../../hooks/useAPIGetAllProducts";
import ProductCard from "../../components/productsCard/ProductCard";
import NextPage from "../../components/NextPageBTN/NextPage";
import FilterBar from "../../components/filterBar/FilterBar";

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<'asc' | 'desc'>("asc"); // Restrição de tipo
  const [limit, setLimit] = useState(16);
  const [sortBy, setSortBy] = useState<string>("name");

  // Chama a API quando algum dos parâmetros muda
  const { products, totalCount, error, loading } = useAPIGetAllProducts(
    currentPage,
    limit,
    order,
    sortBy
  );

  // Mensagens de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newLimit: number, sortByValue: string, orderValue: 'asc' | 'desc') => { // Ajuste do tipo para orderValue
    setCurrentPage(1);// Atualiza o estado de order com o novo valor
    setLimit(newLimit); 
    setOrder(orderValue); 
    setSortBy(sortByValue); 
     
  };

  return (
    <>
      <SecondHero before="Home" actual="Shop" />
      <FilterBar 
        totalProducts={totalCount} 
        limit={limit}  
        onPageChange={handleFilterChange} 
      />
      <ProductCard products={products} limit={limit} />
      <NextPage
        nPage={totalPages} 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        filters={[]} 
        limit={limit}     
        sortBy={sortBy}   
      />
      <InformationBar />
    </>
  );
};

export default Shop;
