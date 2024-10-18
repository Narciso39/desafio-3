import React from "react";
import styles from "./InformationBar.module.css";
import InfoObjects from "./InfoObject"; 

const InformationBar: React.FC = () => {
  return (
    <section className={styles.bar}>
      <dl className={styles.listInfo}>
        {InfoObjects.map((info, index) => (
          <div key={index} className={styles.item}>
            <dt>
              <img src={info.image} alt={info.title} />
            </dt>
            <dd>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default InformationBar;
