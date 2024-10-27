import React, { useState } from "react";
import styles from "./Description.module.css";

interface Content {
  description: string;
  largeDescription: string;
}

const Description: React.FC<Content> = ({ description, largeDescription }) => {
  const [activeSection, setActiveSection] = useState<
    "description" | "largeDescription"
  >("description");

  return (
    <section className={styles.desc}>
      <hr className={styles.hr} />
      <header>
        <h3
          onClick={() => setActiveSection("description")}
          className={
            activeSection === "description" ? styles.active : styles.inactive
          }
        >
          Description
        </h3>
        <h3
          onClick={() => setActiveSection("largeDescription")}
          className={
            activeSection === "largeDescription"
              ? styles.active
              : styles.inactive
          }
        >
          Additional Information
        </h3>
      </header>
      <article>
        {activeSection === "description" ? (
          <section>
            <p className={styles.para}>{description}</p>
          </section>
        ) : (
          <section>
            <p className={styles.para}>{largeDescription}</p>
          </section>
        )}
      </article>
    </section>
  );
};

export default Description;
