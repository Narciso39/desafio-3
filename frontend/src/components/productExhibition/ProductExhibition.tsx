import React, { useState } from "react";
import styles from "./ProductExhibition.module.css";
import star from "../../assets/product/starsvg.svg";
import pipe from "../../assets/pipeBar/pipe.svg";
import Description from "../Decription/Description";
import AddBtn from "../addBtn/AddBtn";
import AddProductToCar from "../addProductToCar/AddProductToCar";
import CompareBtn from "../CompareBtn/CompareBtn";
import { Product } from "../../types/Product";
import SizeBtn from "../sizeBtn/SizeBtn";
import ColorBtn from "../colorBtn/ColorBtn";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";

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
  const [mainImage, setMainImage] = useState(product.image_link);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.lastRow}></div>

        <div className={styles.otherImages}>
          <div className={styles.mini}>
            <img
              src={product.image_link}
              alt="Imagem Principal"
              onClick={() => setMainImage(product.image_link)}
              style={{ cursor: "pointer" }}
            />
            {/* Mapeia as outras imagens */}
            {product.other_images_link.map((imageLink, index) => (
              <img
                key={index}
                src={imageLink}
                alt={`Image ${index + 1}`}
                onClick={() => setMainImage(imageLink)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Imagem principal */}
        <div className={styles.image}>
          <div className={styles.img}>
            <img src={mainImage} alt={product.name} />
          </div>
        </div>

        <div className={styles.space}></div>

        <div className={styles.detalhesGrandes}>
          <article>
            <h2 className={styles.pName}>{product.name}</h2>
            <span className={styles.price}>
              R$:{" "}
              {product.discount_price ? product.discount_price : product.price}
            </span>
            <div className={styles.starDiv}>
              {stars}
              <img src={pipe} alt="pipe" />
              <p>5 Customer Review</p>
            </div>
            <p className={styles.descP}>{product.description}</p>
            <div className={styles.containerBtn}>
              <SizeBtn />
              <ColorBtn />
              <div className={styles.btns}>
                <AddBtn />
                <AddProductToCar />
                <CompareBtn />
              </div>
            </div>
          </article>
        </div>

        <div className={styles.detalhesPequenos}>
          <hr className={styles.finalHr} />
          <dl className={styles.detalhes}>
            <dd>Sku: {product.sku}</dd>
            <dd>
              category: {product?.category?.name || "Categoria não disponível"}
            </dd>
            <dd>tags: Sofa, Chair, Home, Shop</dd>
          </dl>
          <dl className={styles.icons}>
            <dt>Share:</dt>
            <dd>
              <img src={facebook} alt="facebook logo" />
            </dd>
            <dd>
              <img src={linkedin} alt="linkedin logo" />
            </dd>
            <dd>
              <img src={twitter} alt="twitter logo" />
            </dd>
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
