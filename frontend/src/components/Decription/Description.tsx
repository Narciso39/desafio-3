import React from 'react';
import styles from './Description.module.css';

interface Content {
  description: string;
  largeDescription: string;
}

const Description: React.FC<Content> = ({ description, largeDescription }) => {
  return (
    <section className={styles.desc}>
      <header>
        <h3>Description</h3>
        <h3>Additional Information</h3>
      </header>
      <article>
        <section>
          <p>{description}</p>
        </section>
        <section>
          <p>{largeDescription}</p>
        </section>
      </article>
    </section>
  );
};

export default Description;
