import React from "react";
import styles from "./SizetBtn.module.css";
const SizeBtn: React.FC = () => {
  return (
    <div className={styles.divContainer}>
      <span>Size</span>
      <dl>
        <dd className={styles.divBtn}>
          <button>L</button>
        </dd>
        <dd className={styles.divBtn}>
          <button>XL</button>
        </dd>
        <dd className={styles.divBtn}>
          <button>XS</button>
        </dd>
      </dl>
    </div>
  );
};

export default SizeBtn;
