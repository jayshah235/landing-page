import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import style from "./style.module.scss";
import { PopularCategory } from "./data";

const ProductsBanner = () => {
  return (
    <Swiper
      speed={1200}
      autoplay={{
        disableOnInteraction: true,
      }}
      loop={true}
      spaceBetween={40}
      modules={[Autoplay, EffectFade]}
      grabCursor={true}
      slidesPerView={4}
      slidesPerGroup={1}
      breakpoints={{
        0: {
          width: 0,
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        640: {
          width: 640,
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          width: 768,
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1064: {
          width: 1064,
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 40,
        },
      }}
    >
      {PopularCategory?.map((i, index) => (
        <SwiperSlide key={index}>
          <div className={style.banner_items_Wrapper}>
            <img src={i?.image ?? ""} alt="images" />
            <p>{i?.label}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsBanner;
