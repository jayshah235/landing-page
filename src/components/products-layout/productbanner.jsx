import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import ListingLayout from "../listing-layout";

const ProductsBanner = (props) => {
  const { Data } = props;
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
          spaceBetween: 0,
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
      {Data?.map((i, index) => (
        <SwiperSlide key={index}>
          <ListingLayout
            title={i?.title}
            price={i?.price}
            timer={i?.timer}
            bids={i?.bids}
            shipping={i?.shipping}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsBanner;
