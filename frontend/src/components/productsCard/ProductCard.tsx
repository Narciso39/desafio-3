import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate em vez de useRouter
import styles from "./ProductCard.module.css";
import { Product } from "../../types/Product";
import compare from '../../assets/icons/compare.svg'
import like from '../../assets/icons/like.svg'
import share from '../../assets/icons/gridicons_share.svg'
interface ProductCardProps {
  products: Product[];
  limit: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ products, limit }) => {
  const displayedProducts = products.slice(0, limit);
  const navigate = useNavigate(); // Hook para navegação

  const calculateDiscountPercentage = (price: number, discountPrice?: number) => {
    if (!discountPrice) return 0;
    return ((price - discountPrice) / price) * 100;
  };

  const handleSeeDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.productCardContainer}>
      {displayedProducts.map((product) => {
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

            <div className={styles.cardContent}>
              <img src={product.image_link} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productDescription}>{product.category.name}</p>
              <p className={styles.productPrice}>
                {numericDiscountPrice ? (
                  <>
                    <span className={styles.oldPrice}>
                      ${numericPrice.toFixed(2)}
                    </span>
                    <span>${numericDiscountPrice?.toFixed(2)}</span>
                  </>
                ) : (
                  <span>${numericPrice.toFixed(2)}</span>
                )}
              </p>
            </div>

            {/* Overlay de hover */}
            <div className={styles.hoverOverlay}>
              <button className={styles.seeDetailsBtn} onClick={() => handleSeeDetails(product.id)}>
                See Details
              </button>

              <div className={styles.iconButtons}>
                <button className={styles.iconBtn}>
                  <img src={share} alt="" />Share
                </button>
                <button className={styles.iconBtn}>
                <img src={compare} alt="" />Compare
                </button>
                <button className={styles.iconBtn}>
                <img src={like} alt="" />Like
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductCard;
