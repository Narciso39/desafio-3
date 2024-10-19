import React from "react";
import Hero from "../../components/hero/Hero";
import InformationBar from "../../components/InformationBar/InformationBar";
import ProductCard from "../../components/productsCard/ProductCard";
import FirstSection from "../../components/firstSection/FirstSection";

const Home: React.FC = () => {
  const mockProducts = [
    {
      id: 1,
      image: "path/to/image1.jpg",
      title: "Product 1",
      description: "Description 1",
      price: 29.99,
    },
    {
      id: 2,
      image: "path/to/image2.jpg",
      title: "Product 2",
      description: "Description 2",
      price: 49.99,
      discountPrice: 39.99,
    },
    {
      id: 3,
      image: "path/to/image3.jpg",
      title: "Product 3",
      description: "Description 3",
      price: 19.99,
    },
    {
      id: 4,
      image: "path/to/image4.jpg",
      title: "Product 4",
      description: "Description 4",
      price: 89.99,
      discountPrice: 79.99,
    },
    {
      id: 5,
      image: "path/to/image1.jpg",
      title: "Product 1",
      description: "Description 1",
      price: 29.99,
    },
    {
      id: 6,
      image: "path/to/image2.jpg",
      title: "Product 2",
      description: "Description 2",
      price: 49.99,
      discountPrice: 39.99,
    },
    {
      id: 7,
      image: "path/to/image3.jpg",
      title: "Product 3",
      description: "Description 3",
      price: 19.99,
    },
    {
      id: 8,
      image: "path/to/image4.jpg",
      title: "Product 4",
      description: "Description 4",
      price: 89.99,
      discountPrice: 79.99,
    },
  ];

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
