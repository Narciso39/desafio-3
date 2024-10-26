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
  onPageChange: (newLimit: number, sortByValue: string , order: "asc" | "desc") => void;
  baseUrl: string;
}

interface FormValues {
  selectValue: string;
  inputOne: string;
  inputTwo: string;
}

const FilterBar: React.FC<Filter> = ({ baseUrl, totalProducts, limit, onPageChange }) => {
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [inputValue, setInputValue] = useState("16");
  const [selectedOption, setSelectedOption] = useState("name");
  const [formValues, setFormValues] = useState<FormValues>({
    selectValue: "asc",
    inputOne: "asc",
    inputTwo: "desc",
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption((prev) => (prev === value ? "name" : value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues: FormValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const toggleSelectVisibility = () => {
    setSelectVisible(!isSelectVisible);
  };

  return (
    <section >
      <form className={styles.filter}>
        {isSelectVisible && (
          <div className={styles.checkboxContainer}>
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
              id="new"
              name="topping"
              value="price"
              checked={selectedOption === "price"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="discont">price</label>

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
              to={`${baseUrl}?page=1&limit=${inputValue}&order=${formValues.selectValue}&sortBy=${selectedOption}`}
              onClick={() => onPageChange(Number(inputValue), selectedOption, formValues.selectValue as "asc" | "desc")}
            >
              <button type="button" className={styles.button}>Show</button>
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
          <label htmlFor="input2">Sort By
            <select name="selectValue" value={formValues.selectValue} onChange={handleChange}>
              <option value="default" disabled>Default</option>
              <option value="asc">ascending</option>
              <option value="desc">descending</option>
            </select>
          </label>
        </div>
      </form>
    </section>
  );
};

export default FilterBar;
