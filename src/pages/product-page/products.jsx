import ListingLayout from "../../components/listing-layout";
import { AuctionsListing, BuyNowProducts, ProductListing } from "./data";
import { FaList } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import style from "./styles.module.scss";
import { useState } from "react";
import Filters from "../../components/filters";
import FilterModal from "../../components/mobile-filter-modal";
import { useGlobalContext } from "../../store";
import Sorting from "../../components/sorting";

const Products = () => {
  const [tabs, setTabs] = useState(1);
  const { showFilterModal, SetShowFilterModal } = useGlobalContext();
  return (
    <div className={style.product_Detail_Wrapper}>
      <ul className={style.linked_Items}>
        <li>Facility Management</li>
        <li>Maintainanance services</li>
        <li className={style.product_Name}>level 3</li>
      </ul>
      <div className={style.row_Items}>
        <div className={style.filters_Wid}>
          <Filters />
        </div>
        <div className={style.products_Wid}>
          <section className={style.sort_Section}>
            <span className={style.result_Section}>90,000+ results</span>
            <span className={style.icons_Section}>
              <FaList />
              <div
                className={style.filter_Section}
                onClick={() => SetShowFilterModal(!showFilterModal)}
              >
                <BiFilter />

                <span>Filter</span>
              </div>
             <Sorting />

            </span>
          </section>
          <ul className={style.tab_Section}>
            <li
              onClick={() => setTabs(1)}
              className={tabs === 1 ? style.activeTabs : ""}
            >
              All
            </li>
            <li
              onClick={() => setTabs(2)}
              className={tabs === 2 ? style.activeTabs : ""}
            >
              Auction
            </li>
            <li
              onClick={() => setTabs(3)}
              className={tabs === 3 ? style.activeTabs : ""}
            >
              Buy It Now
            </li>
          </ul>
          <section className={tabs === 1 ? style.flex_Row : style.d_None}>
            {ProductListing?.map((i, index) => (
              <ListingLayout
                key={index}
                title={i?.title}
                price={i?.price}
                timer={i?.timer}
                bids={i?.bids}
                shipping={i?.shipping}
              />
            ))}
          </section>
          <section className={tabs === 2 ? style.flex_Row : style.d_None}>
            {AuctionsListing?.map((i, index) => (
              <ListingLayout
                key={index}
                title={i?.title}
                price={i?.price}
                timer={i?.timer}
                bids={i?.bids}
                shipping={i?.shipping}
              />
            ))}
          </section>
          <section className={tabs === 3 ? style.flex_Row : style.d_None}>
            {BuyNowProducts?.map((i, index) => (
              <ListingLayout
                key={index}
                title={i?.title}
                price={i?.price}
                timer={i?.timer}
                bids={i?.bids}
                shipping={i?.shipping}
              />
            ))}
          </section>
        </div>
      </div>
      <FilterModal />
    </div>
  );
};

export default Products;
