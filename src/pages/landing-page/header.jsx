import SideBar from "../../components/sidebar";
import { BiSearch } from "react-icons/bi";
import { BiFilter } from "react-icons/bi";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <header className={style.header_Wrapper}>
        <SideBar className={style.sidbar_Icon} />
      <div className={style.form_Wrapper}>
        <form>
          <input type="text" placeholder="Search by Products & services" />
        </form>
        <BiSearch />
      </div>
      <section className={style.filter_Section}>
        <BiFilter className={style.cursor_Pointer} />
        <span>Filter</span>
      </section>
    </header>
  );
};

export default Header;
