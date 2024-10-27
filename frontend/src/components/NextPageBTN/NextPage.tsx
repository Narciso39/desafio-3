import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NextPage.module.css";
import { Paginate } from "../../types/Paginate";

const NextPage: React.FC<Paginate> = ({
  baseUrl,
  nPage,
  currentPage,
  onPageChange,
  filters,
  limit,
  sortBy,
}) => {
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  return (
    <div className={styles.div}>
      {currentPage > 1 && (
        <NavLink
          to={`/shop?page=${prevPage}&limit=${limit}&sortBy=${sortBy}&filters=${JSON.stringify(
            filters
          )}`}
          onClick={() => onPageChange(prevPage)}
        >
          <button className={styles.button}>{prevPage}</button>
        </NavLink>
      )}

      <button className={styles.button} disabled>
        {currentPage}
      </button>

      {currentPage < nPage && (
        <NavLink
          to={`${baseUrl}?page=${nextPage}&limit=${limit}&sortBy=${sortBy}&filters=${JSON.stringify(
            filters
          )}`}
          onClick={() => onPageChange(nextPage)}
        >
          <button className={styles.button}>{nextPage}</button>
          <button className={styles.buttonN}>Next</button>
        </NavLink>
      )}
    </div>
  );
};

export default NextPage;
