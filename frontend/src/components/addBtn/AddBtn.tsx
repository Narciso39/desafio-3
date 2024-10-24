import React, { useState } from 'react'
import styles from './AddBtn.module.css'
const AddBtn: React.FC = () => {
  // Estado para armazenar o número
  const [count, setCount] = useState(0);

  // Função para aumentar o contador
  const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
  };

  // Função para diminuir o contador
  const handleDecrement = () => {
      setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); 
  };

  return (
      <div className={styles.add}>
          <button onClick={handleDecrement} className={styles.btn}>-</button>
          <span className={styles.count}>{count}</span>
          <button onClick={handleIncrement} className={styles.btn}>+</button>
      </div>
  )
}

export default AddBtn