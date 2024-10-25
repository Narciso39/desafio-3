import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import filter from "../../assets/filterBar/filtersvg.svg";
import square from "../../assets/filterBar/squaresvg.svg";
import dimension from "../../assets/filterBar/dimensionsvg.svg";
import pipe from "../../assets/pipeBar/pipe.svg";
import { NavLink } from "react-router-dom";

interface Filter {
  totalProducts: number;
  limit: number;
  // selectedOption: string;
  // inputValue: number;
  // event: string | number;
  onPageChange: (newLimit: number, sortByValue: string, order: "asc" | "desc") => void;
}

const FilterBar: React.FC<Filter> = ({ totalProducts, limit, onPageChange }) => {
  // Estado para controlar a visibilidade do select
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [inputValue, setInputValue] = useState("16");
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption((prev) => (prev === value ? "" : value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Função que alterna a visibilidade do select
  const toggleSelectVisibility = () => {
    setSelectVisible(!isSelectVisible);
  };

  return (
    <section className={styles.filter}>
      <form>
        {isSelectVisible && (
          <div>
            <input
              type="checkbox"
              id="name"
              name="topping"
              value="name"
              checked={selectedOption === "name"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="name">Name</label>

            <input
              type="checkbox"
              id="discont"
              name="topping"
              value="discont"
              checked={selectedOption === "discont"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="discont">Discont</label>

            <input
              type="checkbox"
              id="category"
              name="topping"
              value="category_id"
              checked={selectedOption === "category_id"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="category">Category</label>
          </div>
        )}
        <dl>
          <dd onClick={toggleSelectVisibility}>
            <img src={filter} alt="Filter" />
          </dd>
          <dd>
            <NavLink
              to={`/shop?page=1&limit=${inputValue}&order=asc&sortBy=${selectedOption}`}
              onClick={() => onPageChange(Number(inputValue), selectedOption, 'asc')}
            >
              <button className={styles.button}>Show</button>
            </NavLink>
          </dd>
          <dd>
            <img src={square} alt="" />
          </dd>
          <dd>
            <img src={dimension} alt="" />
          </dd>
          <dd>
            <img src={pipe} alt="" />
          </dd>
          <dd>Showing 1-{limit} of {totalProducts} results</dd>
        </dl>
        <div>
          <label htmlFor="input1">Show</label>
          <input
            type="text"
            id="input1"
            value={inputValue}
            onChange={handleInputChange}
            className={styles.first}
          />
        </div>
        <div>
          <label htmlFor="input2">Short By</label>
          <input
            type="text"
            id="input2"
            value={selectedOption || "Default"}
            className={styles.last}
            readOnly
          />
        </div>
      </form>
    </section>
  );
};

export default FilterBar;
