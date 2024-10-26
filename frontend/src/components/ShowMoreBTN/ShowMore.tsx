import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './ShowMore.module.css';

const ShowMore: React.FC<{ onShowMore: () => void, use: boolean }> = ({ onShowMore, use }) => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  console.log(clickCount)
  // useEffect(() => {
  //   if (clickCount === 2) {
  //     navigate("/shop");
  //   }
  // }, [clickCount, navigate]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 1) {
        onShowMore(); 
      }
      return newCount;
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
