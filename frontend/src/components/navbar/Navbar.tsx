import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/navbar/logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.div}>
        <NavLink to="/">
            <img src={logo} alt="Furniro logo" />
          </NavLink>
          <NavLink to="/">Furniro</NavLink>
          </div>
      <ul className={styles.ul}>
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
    </nav>
  );
};

export default Navbar;
