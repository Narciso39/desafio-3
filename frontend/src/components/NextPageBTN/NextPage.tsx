import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NextPage.module.css"
interface PaginationProps {
  nPage: number;
  next: string; // Rota da próxima página
}

const NextPage: React.FC<PaginationProps> = ({ nPage, next }) => {
  return (
    <div className={styles.div}>
      {/* Renderiza os links numerados */}
      {Array.from({ length: nPage }, (_, index) => (
        <NavLink key={index} to="#"  className={({ isActive }) => (isActive ? 'selected' : '')}>
          <button>{index + 1}</button>
        </NavLink>
      ))}

      {/* Botão para próxima página */}
      <NavLink to={`/${next}`}><button>{next}</button></NavLink>
    </div>
  );
};

export default NextPage;
