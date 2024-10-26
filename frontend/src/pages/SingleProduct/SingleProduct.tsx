import React from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

// import ProductCard from "../../components/productsCard/ProductCard";
// import ShowMore from "../../components/ShowMoreBTN/ShowMore";

const SingleProductPage: React.FC = () => {
  // const [limit, setLimit] = useState(4);
  // const { products, error, loading } = useAPIGetAllProducts(1, limit);

  // Mensagens de carregamento e erro
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching products: {error.message}</p>;

  // const handleShowMore = () => {
  //   setLimit((prevLimit) => prevLimit + 4); 
  // };

  return (
    <>
      <SingleProduct />
    </>
  );
};

export default SingleProductPage;
