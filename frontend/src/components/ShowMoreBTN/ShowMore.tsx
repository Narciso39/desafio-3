import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './ShowMore.module.css';

const ShowMore: React.FC<{ onShowMore: () => void, use: boolean }> = ({ onShowMore, use }) => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Aumenta o contador baseado no estado anterior
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      // Verifica o novo contador e executa a ação apropriada
      if (newCount === 1) {
        onShowMore(); // Chama a função para mostrar mais produtos
      } else if (newCount === 2) {
        navigate("/shop"); 
      }

      return newCount; // Retorna o novo contador
    });
  };

  return (
    <>
      {!use && (
        <button className={styles.a} onClick={handleClick}>
          Show More
        </button>
      )}
      {use && (
        <button className={styles.a} onClick={() => navigate("/shop")}>
          Show More
        </button>
      )}
    </>
  );
};

export default ShowMore;
