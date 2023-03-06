import Bannerslider from "./landing-page-banner";
import Buttons from "./buttons";
import FeaturedProducts from "./featured-products";
import FeaturedServices from "./featured-services";
import style from "./styles.module.scss";
import TrendingAuction from "./trending-auction";
import PopularCategory from "./popular-category";

const LandingPage = () => {
  return (
      <section className={style.content_Wrapper}>
        <Buttons />
        <Bannerslider />
        <PopularCategory />
        <TrendingAuction />
        <FeaturedProducts />
        <FeaturedServices />
      </section>
  );
};

export default LandingPage;
