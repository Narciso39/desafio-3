import React from "react";
import Hero from "../../components/hero/Hero";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import FirstSection from "../../components/firstSection/FirstSection";
import mockProducts from "../../hooks/test/MockProducts";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FirstSection />
      <ProductCard products={mockProducts} limit={8} />
      <InformationBar />
    </>
  );
};

export default Home;
