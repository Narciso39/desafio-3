import React from "react";
import styles from "./ProductExhibition.module.css";
import star from "../../assets/product/starsvg.svg";
import pipe from "../../assets/pipeBar/pipe.svg";
import Description from "../Decription/Description";
import AddBtn from "../addBtn/AddBtn";
import AddProductToCar from "../addProductToCar/AddProductToCar";
import CompareBtn from "../CompareBtn/CompareBtn";

interface Product {
  id: number;
  name: string;
  image_link: string;
  sku: string;
  price: string;
  discount_price?: string;
  description: string;
  large_description: string;
  is_new?: boolean;
  other_images_link: string[];
  category: {
    name: string;
  };
}

interface SingleProductProps {
  product: Product;
  rating: number;
}
const ProductExhibition: React.FC<SingleProductProps> = ({
  product,
  rating,
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? styles.filledStar : styles.emptyStar}
    >
      <img src={star} alt="star" />
    </span>
  ));

  // console.log(product)
  return (
    <>
      <section className={styles.container}>
        {/* { console.log(product.other_images_link)} */}
        <div className={styles.lastRow}></div>
        <div className={styles.otherImages}>
          <div className={styles.mini}>
            {product.other_images_link.map((imageLink, index) => (
              <img key={index} src={imageLink} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.img}>
            <img src={product.image_link} alt={product.name} />
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.detalhesGrandes}>
          <h2 className={styles.pName}>{product.name}</h2>
          <span className={styles.price} >
            R$:{" "}
            {product &&
              (product.discount_price ? product.discount_price : product.price)}
          </span>
          <div className={styles.starDiv}>
            {stars}
            <img src={pipe} alt="pipe" />
            <p>5 Customer Review</p>
          </div>
          <p className={styles.descP} >{product.description}</p>
          <div className={styles.btns}>
          <AddBtn />
          <AddProductToCar />
          <CompareBtn />
          </div>
        </div>
        <div className={styles.detalhesPequenos}>
          <dl>
            <dd>Sku: {product.sku}</dd>
            <dd>
              category: {product?.category?.name || "Categoria não disponível"}
            </dd>
            <dd>tags: Sofa, Chair, Home, Shop</dd>
          </dl>
        </div>
      </section>
      <Description
        description={product.description}
        largeDescription={product?.large_description}
      />
    </>
  );
};

export default ProductExhibition;
