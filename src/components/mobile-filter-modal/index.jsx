import React from "react";
import style from "./style.module.scss";
import Filters from "../filters";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "../../store";

const FilterModal = () => {
  const { showFilterModal, SetShowFilterModal } = useGlobalContext();
  return (
    <>
      {showFilterModal && (
        <>
          <div className={style.modal_Overlay} onClick={() => SetShowFilterModal(false)} />
          <div className={style.filter_Modal_Wrapper}>
            <AiOutlineCloseSquare  className={style.close_Btn} onClick={() => SetShowFilterModal(false)} />
            <Filters closemodel={() => SetShowFilterModal(false)} />
          </div>
        </>
      )}
    </>
  );
};

export default FilterModal;
