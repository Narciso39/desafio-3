import React from 'react'
import styles from "./FilterBar.module.css"
import filter from "../../assets/filterBar/filtersvg.svg"
import square from "../../assets/filterBar/squaresvg.svg"
import dimension from "../../assets/filterBar/dimensionsvg.svg"
import pipe from  "../../assets/pipeBar/pipe.svg"
const FilterBar: React.FC = () => {
  return (
    <section className={styles.filter}>
        <dl>
            <dd><img src={filter} alt="" /></dd>
            <dd><span>Filter</span></dd>
            <dd><img src={square} alt="" /></dd>
            <dd><img src={dimension} alt="" /></dd>
            <dd><img src={pipe} alt="" /></dd>
            <dd>Showing 1-16 of 32 results</dd>
        </dl>
        <form>
        <div>
        <label htmlFor="input1">Show</label>
        <input
          type="text"
          id="input1"
          value="16"
          className={styles.first}
        />
      </div>
      <div>
        <label htmlFor="input2">Short By</label>
        <input
          type="text"
          id="input2"
          value="Default"
          className={styles.last}
        />
      </div>
        </form>
    </section>
  )
}

export default FilterBar