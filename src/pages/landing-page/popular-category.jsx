import React from "react";
import { Link } from "react-router-dom";
import style from './styles.module.scss';
import Categorybanner from "../../components/categories-banner";

const PopularCategory = () => {
  return (
    <div>
      <div className={style.category_Banner}>
        <h2>Explore Popular Categories</h2>
        <Link to='viewall'>View All</Link>
      </div>
      <Categorybanner />
    </div>
  );
};

export default PopularCategory;
