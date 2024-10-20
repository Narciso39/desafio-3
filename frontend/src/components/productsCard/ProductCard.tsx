import React from "react";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  isNew?: boolean; // Tornando 'isNew' opcional
}

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
      {displayedProducts.map((product) => (
        <article key={product.id} className={styles.card}>
          <div className={styles.promoBubble}>
            {/* Exibe a bolha de "NEW" se isNew for verdadeiro */}
            {product.isNew && (
              <span className={styles.newBubble}>NEW</span>
            )}
            {/* Exibe a bolha de desconto se houver um preço de desconto */}
            {product.discountPrice && !product.isNew && (
              <span className={styles.discountBubble}>
                {calculateDiscountPercentage(product.price, product.discountPrice).toFixed(0)}%
              </span>
            )}
          </div>
          <img src={product.image} alt={product.title} className={styles.productImage} />
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>
            {product.discountPrice ? (
              <>
                <span className={styles.oldPrice}>${product.price.toFixed(2)}</span>
                <span>${product.discountPrice.toFixed(2)}</span>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </p>
        </article>
      ))}
    </div>
  );
};

export default ProductCard;
