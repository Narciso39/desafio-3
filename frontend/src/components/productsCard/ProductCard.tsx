import React from "react";
import styles from "./ProductCard.module.css";
import { Product } from "../../types/Product";


interface ProductCardProps {
  products: Product[];
  limit: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ products, limit }) => {
  const displayedProducts = products.slice(0, limit);

  const calculateDiscountPercentage = (price: number, discountPrice?: number) => {
    if (!discountPrice) return 0;
    return ((price - discountPrice) / price) * 100;
  };

  return (
    <div className={styles.productCardContainer}>
      {displayedProducts.map((product) => {
        // Conversão de strings para números
        const numericPrice = Number(product.price);
        const numericDiscountPrice = product.discount_price ? Number(product.discount_price) : undefined;

        return (
          <article key={product.id} className={styles.card}>
            <div className={styles.promoBubble}>
              {product.is_new && <span className={styles.newBubble}>NEW</span>}
              {numericDiscountPrice && (
                <span className={styles.discountBubble}>
                  {calculateDiscountPercentage(numericPrice, numericDiscountPrice).toFixed(0)}%
                </span>
              )}
            </div>
            <img src={product.image_link} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productTitle}>{product.name}</h3>
            <p className={styles.productDescription}>{product.category.name}</p>
            <p className={styles.productPrice}>
              {numericDiscountPrice ? (
                <>
                  <span className={styles.oldPrice}>
                    ${numericPrice.toFixed(2)}
                  </span>
                  <span>${numericDiscountPrice.toFixed(2)}</span>
                </>
              ) : (
                <span>${numericPrice.toFixed(2)}</span>
              )}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default ProductCard;
