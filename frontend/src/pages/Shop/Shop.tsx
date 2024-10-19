import React from "react";

import InformationBar from "../../components/InformationBar/InformationBar";
import SecondHero from "../../components/SecondHero/SecondHero";

const Shop: React.FC = () => {
  return (
    <>
      <SecondHero before="Home" actual="Shop" />
      <InformationBar />
    </>
  );
};

export default Shop;
