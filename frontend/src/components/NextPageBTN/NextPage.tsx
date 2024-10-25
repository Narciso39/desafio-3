import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NextPage.module.css";

interface PaginationProps {
  nPage: number; // Total de páginas disponíveis
  currentPage: number; // Página atual
  onPageChange: (page: number) => void; // Nova prop
  filters: string[]; // Filtros selecionados
  limit: number; // Limite de produtos
  sortBy: string; // Ordenação
}

const NextPage: React.FC<PaginationProps> = ({ nPage, currentPage, onPageChange, filters, limit, sortBy }) => {
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  return (
    <div className={styles.div}>
      {/* Botão para a página anterior */}
      {currentPage > 1 && (
        <NavLink to={`/shop?page=${prevPage}&limit=${limit}&sortBy=${sortBy}&filters=${JSON.stringify(filters)}`} onClick={() => onPageChange(prevPage)}>
          <button className={styles.button}>{prevPage}</button> {/* Exibe o número da página anterior */}
        </NavLink>
      )}

      {/* Renderiza o número da página atual */}
      <button className={styles.button} disabled>{currentPage}</button>

      {/* Se houver mais de uma página, renderiza o botão "Next" */}
      {currentPage < nPage && (
        <NavLink to={`/shop?page=${nextPage}&limit=${limit}&sortBy=${sortBy}&filters=${JSON.stringify(filters)}`} onClick={() => onPageChange(nextPage)}>
          <button className={styles.button}>{nextPage}</button> {/* Exibe o número da próxima página */}
        </NavLink>
      )}
    </div>
  );
};

export default NextPage;
