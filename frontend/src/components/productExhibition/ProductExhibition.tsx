import React from "react";
import styles from "./ProductExhibition.module.css";
import star from "../../assets/product/starsvg.svg";
import pipe from "../../assets/pipeBar/pipe.svg";
interface Product {
  id: number;
  name: string;
  image_link: string;
  price: string;
  discount_price?: string;
  description: string;
  large_description: string;
  other_images_link: string[];
  is_new?: boolean;
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
  return (
    <div className={styles.container}>
      <div className={styles.lastRow}></div>
      <div className={styles.otherImages}></div>
      <div className={styles.image}>
        <img src={product.image_link} alt={product.name} />
      </div>
      <div className={styles.space}></div>
      <div className={styles.detalhesGrandes}>
        <h2>{product.name}</h2>
        <span>
          R$:{" "}
          {product &&
            (product.discount_price ? product.discount_price : product.price)}
        </span>
        <div>
          {stars}
          <img src={pipe} alt="pipe" />
          <p>5 Customer Review</p>
        </div>
        <p>{product.description}</p>
      </div>
      <div className={styles.detalhesPequenos}>tu</div>
    </div>
  );
};

export default ProductExhibition;
