import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFoundComponent: React.FC = () => {
  return (
    <>
      <section className={styles.notfound}>
        <h2>404</h2>
        <h3>Not Found</h3>
        <p>
          Página não encontrada, clique no botão home para ser redirecionado de
          página.
        </p>
        <NavLink to="/">
          <button className={styles.btn}>home</button>
        </NavLink>
      </section>
    </>
  );
};

export default NotFoundComponent;
