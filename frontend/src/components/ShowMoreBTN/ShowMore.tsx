import React from "react";
import { NavLink } from "react-router-dom";
import styles from './ShowMore.module.css'

const ShowMore: React.FC = () => {
  return (
    <>
      <NavLink to="/shop" >
        <button className={styles.a}>Show More</button>
      </NavLink>
    </>
  );
};

export default ShowMore;
