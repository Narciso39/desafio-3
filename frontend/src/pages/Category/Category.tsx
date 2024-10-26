import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import SecondHero from "../../components/SecondHero/SecondHero";
import { useAPIProductsByCategory } from "../../hooks/useAPIProductsByCategoryID";
import NextPage from "../../components/NextPageBTN/NextPage";
import FilterBar from "../../components/filterBar/FilterBar";

const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [limit, setLimit] = useState(16);
  const [sortBy, setSortBy] = useState<string>("name");

  const { products, totalPages, error, loading } = useAPIProductsByCategory(
    Number(id),
    currentPage,
    limit,
    order,
    sortBy
  );
  const numberProducts =Object.keys(products).length;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newLimit: number, sortByValue: string, orderValue: "asc" | "desc") => {
    setCurrentPage(1);
    setLimit(newLimit);
    setOrder(orderValue);
    setSortBy(sortByValue);
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
      <FilterBar 
        baseUrl={`/category/${products[0].category.id}`}
        totalProducts={numberProducts} 
        limit={numberProducts} 
        onPageChange={handleFilterChange} 
      />
      <ProductCard products={products} limit={limit} />
      <NextPage
        baseUrl={`/category/${products[0].category.id}`}
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

export default Category;
