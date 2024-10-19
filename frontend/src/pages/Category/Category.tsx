import React from "react";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import mockProducts from "../../hooks/test/MockProducts";
import SecondHero from "../../components/SecondHero/SecondHero";

const Category: React.FC = () => {
  return (
    <>
      <SecondHero before="Home" actual="Category" />
      <ProductCard products={mockProducts} limit={16} />
      <InformationBar />
    </>
  );
};

export default Category;
