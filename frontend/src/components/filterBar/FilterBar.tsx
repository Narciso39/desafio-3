import React, { useState } from 'react';
import styles from "./FilterBar.module.css";
import filter from "../../assets/filterBar/filtersvg.svg";
import square from "../../assets/filterBar/squaresvg.svg";
import dimension from "../../assets/filterBar/dimensionsvg.svg";
import pipe from  "../../assets/pipeBar/pipe.svg";

const FilterBar: React.FC = () => {
  // Estado para armazenar os valores dos inputs
  const [showValue, setShowValue] = useState("16");
  const [sortByValue, setSortByValue] = useState("Default");

  const handleShowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowValue(event.target.value);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortByValue(event.target.value);
  };

  return (
    <section className={styles.filter}>
      <dl>
        <dd><img src={filter} alt="Filter" /></dd>
        <dd><span>Filter</span></dd>
        <dd><img src={square} alt="Square" /></dd>
        <dd><img src={dimension} alt="Dimension" /></dd>
        <dd><img src={pipe} alt="Pipe" /></dd>
        <dd>Showing 1-16 of 32 results</dd>
      </dl>
      <form>
        <div>
          <label htmlFor="input1">Show</label>
          <input
            type="text"
            id="input1"
            value={showValue} // Usa o estado
            onChange={handleShowChange} // Adiciona onChange
            className={styles.first}
          />
        </div>
        <div>
          <label htmlFor="input2">Sort By</label>
          <input
            type="text"
            id="input2"
            value={sortByValue} // Usa o estado
            onChange={handleSortByChange} // Adiciona onChange
            className={styles.last}
          />
        </div>
      </form>
    </section>
  );
};

export default FilterBar;
