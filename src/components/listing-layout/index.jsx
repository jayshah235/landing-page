import style from "./style.module.scss";
import dummyImage from "./dummyimage.png";

const ListingLayout = (props) => {
  const { title, price, timer, bids, shipping } = props;
  return (
    <div className={style.dataItems_Wrapper}>
      <img src={dummyImage} alt="" />
      <h3 className={style.title}>{title}</h3>
      <span className={style.pricing}>${price}</span>
      <p className={style.light_Text}>Time Left</p>
      <span className={style.timer}>{timer}</span>
      <p className={style.light_Text}>{bids}</p>
      <p className={style.light_Text}>{shipping}</p>
    </div>
  );
};

export default ListingLayout;
