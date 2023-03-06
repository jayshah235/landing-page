import style from "./style.module.scss";
import ProductsBanner from "./productbanner";
import { DummyProductsData } from "./data";
import { Link } from "react-router-dom";

// created this reusable component so we can use
// the same component design for multiple
// pages and we can change data as we get from api

const Products = (props) => {
  const {
    productTitle,
    productDescription,
    productDetails = DummyProductsData,
  } = props;
  return (
    <div className={style.product_Wrapper}>
      <div className={style.row}>
        <h2>{productTitle}</h2>
        <Link to='detail'>View All</Link>
      </div>
      <p>{productDescription}</p>
      <ProductsBanner Data={productDetails} />
    </div>
  );
};

export default Products;
