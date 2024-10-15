import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className={styles.div}>
        <h2>Furniro</h2>
        <address>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </address>
      </div>
      <ul>
        <span>Links</span>
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
        <span>Help</span>
        <li>
          <NavLink to="/">Payment Options</NavLink>
        </li>
        <li>
          <NavLink to="/">Returns</NavLink>
        </li>
        <li>
          <NavLink to="/">Privacy Policies</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      <div className="newsletter">
        <form>
          <label>
            <span>Newsletter</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />
          </label>
          <input type="submit" value="subscribe" />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
