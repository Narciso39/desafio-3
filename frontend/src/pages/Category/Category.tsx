import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIProductsByCategory } from "../../hooks/useAPIProductsByCategoryID";
import NextPage from "../../components/NextPageBTN/NextPage";

const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [currentPage, setCurrentPage] = useState(1); 
  const limit = 16; 

  
  const [filters, setFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("asc");

  const {
    products,
    totalPages,
    error,
    loading,
  } = useAPIProductsByCategory(Number(id), currentPage); 

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  
  if (!Array.isArray(products)) {
    return <p>No products found.</p>;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page); 
  };

  return (
    <>
      {products.length > 0 && (
        <SecondHero
          key={products[0].id}
          before="Home"
          actual={products[0].category.name}
        />
      )}

      <ProductCard products={products} limit={limit} />

      {/* Adiciona o componente NextPage */}
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

export default Category;
