import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FacilityManagementData } from "./data";
import { FiAlignJustify } from "react-icons/fi";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [hidesSideBar, setHideSideBar] = useState(false);
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
      <FiAlignJustify
        className={style.cursor_Pointer}
        onClick={() => setHideSideBar(true)}
      />
      {hidesSideBar && (
        <>
          <div
            className={style.sidebar_Overlay}
            onClick={() => setHideSideBar(false)}
          />
          <div className={style.sideBar_Wrapper}>
            <div className={style.title_Inline}>
              <FaAngleLeft
                onClick={() => setHideSideBar(false)}
                className={style.cursor_Pointer}
              />
              <h2>Facility Management</h2>
            </div>
            {FacilityManagementData?.map((i) => (
              <section key={i?.id}>
                <div
                  className={style.dropdowm_Label}
                  onClick={() => showlist(i?.id)}
                >
                  <span>{i?.label}</span>
                  <FaAngleDown
                    className={dropdowm === i?.id && style.rotate_Icon}
                  />
                </div>
                {dropdowm === i?.id && (
                  <ul className={style.list}>
                    {i?.listing?.map((s) => (
                      <li key={s.id} onClick={() => setHideSideBar(false)}>
                        <Link to='/detail'>
                        {s.list}
                        </Link>
                        </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
