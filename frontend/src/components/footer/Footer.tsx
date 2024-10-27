import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  const dataAtual = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.rowOne}>
        <div className={styles.logo}>
          <h2>Furniro.</h2>
          <address>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </address>
        </div>
        <ul>
          <li>
            <span>Links</span>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <span>Help</span>
          </li>
          <li>
            <NavLink to="/pay">Payment Options</NavLink>
          </li>
          <li>
            <NavLink to="/return">Returns</NavLink>
          </li>
          <li>
            <NavLink to="/privacy">Privacy Policies</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
        </ul>
        <div className={styles.container}>
          <span>Newsletter</span>
          <form className={styles.form}>
            <label className={styles.input}>
              <input
                className={styles.email}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
              />
            </label>
            <input className={styles.submit} type="submit" value="subscribe" />
          </form>
        </div>
      </div>
      <hr className={styles.hrDois} />
      <p className={styles.copy}>
        {dataAtual.getFullYear()} furino. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
