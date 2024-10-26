import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Alterado aqui
import styles from './ShowMore.module.css';

const ShowMore: React.FC<{ onShowMore: () => void , use: boolean}> = ({ onShowMore, use }) => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate(); // Alterado aqui

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Previne o redirecionamento padrão do NavLink
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 0) {
      onShowMore(); // Chama a função para mostrar mais produtos
    } else if (clickCount === 1) {
      navigate("/shop"); // Alterado aqui para usar navigate
    }
  };

  return (
    <>
    {!use && (<button className={styles.a} onClick={handleClick}>
      Show More
    </button>)}
    {use && (<button className={styles.a} onClick={() => navigate("/shop")}>
      Show More
    </button>)}
    </>
  );
};

export default ShowMore;
