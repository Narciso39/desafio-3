import React from "react";
import styles from "./ColorBtn.module.css";
const ColorBtn: React.FC = () => {
  return (
    <div className={styles.color}>
      <span>Color</span>
      <dl className={styles.colorList}>
        <dd className={styles.blue}>
          <button></button>
        </dd>
        <dd className={styles.black}>
          <button></button>
        </dd>
        <dd className={styles.orange}>
          <button></button>
        </dd>
      </dl>
    </div>
  );
};

export default ColorBtn;
