import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import style from "./style.module.scss";

const TopScroll = () => {
  const [visible, setVisible] = useState(false);

  const listenEvent = () => {
    let bodyScroll = 250;
    const handleScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (handleScroll > bodyScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenEvent);
  }, []);

  const positionTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div onClick={positionTop} className={style.icontop}>
          <span className={style.designicon}><AiOutlineArrowUp /></span>
        </div>
      )}
    </>
  );
};

export default TopScroll;
