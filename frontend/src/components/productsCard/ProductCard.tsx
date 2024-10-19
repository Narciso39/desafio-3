import React from "react";
import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number; // Adicionando um campo para o preço
  discountPrice?: number; // Opcional para preço com desconto
}

interface ProductCardProps {
  products: Product[];
  limit: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ products, limit }) => {
  // Limita a exibição dos produtos com base na prop limit
  const displayedProducts = products.slice(0, limit);

  return (
    <div className={styles.productCardContainer}>
      {displayedProducts.map(product => (
        <div key={product.id} className={styles.card}>
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
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
