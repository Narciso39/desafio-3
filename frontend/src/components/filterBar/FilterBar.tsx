import React from 'react'
import styles from "./FilterBar.module.css"

const FilterBar: React.FC = () => {
  return (
    <section className={styles.filter}>
        <dl>
            <dd><img src="" alt="" /><span>Filter</span></dd>
            <dd><img src="" alt="" /></dd>
            <dd><img src="" alt="" /></dd>
            <dd><img src="" alt="" /></dd>
            <dd>Showing 1-16 of 32 results</dd>
        </dl>
        <form>
        <div>
        <label htmlFor="input1">Show</label>
        <input
          type="text"
          id="input1"
          value="16"
        />
      </div>
      <div>
        <label htmlFor="input2">Short By</label>
        <input
          type="text"
          id="input2"
          value="Default"
        />
      </div>
        </form>
    </section>
  )
}

export default FilterBar