import React from "react";
import Hero from "../../components/hero/Hero";
import InformationBar from "../../components/InformationBar/InformationBar";
import FirstSection from "../../components/firstSection/FirstSection";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FirstSection />
      <HomeProducts />
     
      <InformationBar />
    </>
  );
};

export default Home;
