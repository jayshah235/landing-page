import style from "./styles.module.scss";

const ViewItems = (props) => {
  const { title, Data } = props;
  return (
    <div className={style.viewall_Section}>
      <h2>{title}</h2>
      <div className={style.inline_Row}>
        {Data?.map((i, index) => (
          <section className={style.category_List} key={index}>
            <img src={i?.image} alt="images" />
            <p>{i?.label}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ViewItems;
