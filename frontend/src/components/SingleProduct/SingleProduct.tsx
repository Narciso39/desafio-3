import React from "react";
import Bar from "../barSingleProduct/Bar";
import { useAPIProductsById } from "../../hooks/useAPIProductById";
import { useParams } from "react-router-dom";
import ProductExhibition from "../productExhibition/ProductExhibition";
import styles from './SingleProduct.module.css'
// import Description from "../Decription/Description";



const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, error, loading } = useAPIProductsById(id ?? "");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;
  
  
  return (
    <>
      {product && <Bar key={product.id} product={product.name} page="shop"  />}
      {product &&   <ProductExhibition product={product} rating={5}/>}
      {/* {product &&  />} */}
     
    </>
  );
};

export default SingleProduct;
