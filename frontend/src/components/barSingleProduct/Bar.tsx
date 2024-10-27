import React from "react";
import arrow from "../../assets/secondHero/seta.svg";
import styles from "./Bar.module.css";
import pipe from "../../assets/pipeBar/pipe.svg";
import { NavLink } from "react-router-dom";

interface Content {
  product: string;
  page: string;
}

const Bar: React.FC<Content> = ({ product, page }) => {
  return (
    <section className={styles.sec}>
      <dl>
        <dt>{product}</dt>
        <dd>
          <img src={pipe} alt="pipe" />
        </dd>
        <dd>
          <img src={arrow} alt="arrow" />
        </dd>
        <dd><NavLink to={`/${page}`}>{page}</NavLink></dd>
        <dd>
          <img src={arrow} alt="arrow" />
        </dd>
      <dd><NavLink to="/home">home</NavLink></dd>
      </dl>
    </section>
  );
};

export default Bar;
