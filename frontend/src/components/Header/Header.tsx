import { NavLink } from "react-router-dom";
//css
import styles from "./Header.module.css";
//logo
import logo from "../../assets/navbar/logo.svg";
//icones
import likeIcon from "../../assets/navbar/likeIcon.svg";
import searchIcon from "../../assets/navbar/searchIcon.svg";
import userIcon from "../../assets/navbar/userIcon.svg";
import carIcon from "../../assets/navbar/carIcon.svg";

const Header = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.div}>
        <NavLink to="/">
          <img src={logo} alt="Furniro logo" />
        </NavLink>
        <NavLink to="/">
          <h1>Furniro</h1>
        </NavLink>
      </div>
      <nav >
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
      <ul className={styles.icons}>
        <li>
          <img src={userIcon} alt="User" />
        </li>
        <li>
          <img src={searchIcon} alt="search" />
        </li>
        <li>
          <img src={likeIcon} alt="liked" />
        </li>
        <li>
          <img src={carIcon} alt="car" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
