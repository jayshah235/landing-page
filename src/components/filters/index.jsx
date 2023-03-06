import style from "./style.module.scss";
import { FacilityManagementData } from "./data";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Filters = ({closemodel}) => {
  const [dropdowm, setDropDowm] = useState();

  const showlist = (index) => {
    const check = index === dropdowm;
    console.log(check);
    if (dropdowm === index) {
      setDropDowm(true);
    } else {
      setDropDowm(index);
    }
  };
  return (
    <>
      <form className={style.serach_Box}>
        <input type="text" placeholder="Search Your Items" />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
      {FacilityManagementData?.map((i) => (
        <section key={i?.id}>
          <div className={style.dropdowm_Label} onClick={() => showlist(i?.id)}>
            <span>{i?.label}</span>
            <FaAngleDown className={dropdowm === i?.id && style.rotate_Icon} />
          </div>
          {dropdowm === i?.id && (
            <ul className={style.list}>
              {i?.listing?.map((s) => (
                <li key={s.id} onClick={closemodel}>{s.list}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
};

export default Filters;
