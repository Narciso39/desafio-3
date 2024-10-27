import React from "react";
import styles from "./SecondHero.module.css";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/secondHero/seta.svg";
interface SecondHeroProps {
  before: string;
  actual: string;
}

const SecondHero: React.FC<SecondHeroProps> = ({ before, actual }) => {
  return (
    <section className={styles.img}>
      <div className={styles.hero}>
        <h2>{actual}</h2>
        <div className={styles.link}>
          <NavLink to={`/${before}`}>
            <p>{before}</p>
          </NavLink>
          <img src={arrow} alt="arrow" />
          <NavLink to="#">{actual}</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
