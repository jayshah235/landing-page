import React, { useState } from "react";
import style from "./style.module.scss";
import { FaSort } from "react-icons/fa";
import { SortingList } from "./data";

const Sorting = () => {
  const [showSorting, setShowSorting] = useState(false);

  return (
    <div
      className={style.sort_items}
      onClick={() => setShowSorting(!showSorting)}
    >
      <FaSort />
      <span>Sort</span>
      {showSorting && (
        <div className={style.sort_Dropdowm_Items}>
          <ul>
            {SortingList?.map((i, index) => (
              <li key={index}>
                <input type="radio" />
                {i?.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
