import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import image1 from './images/servicebanner.png';
import image2 from './images/servicebanner2.png';

import style from  "./styles.module.scss";
const bannerData = [
	{
		id:1,
		image: image1,
		alt: 'image',
	},
	{
		id:2,
		image: image2,
		alt: 'image',
	},
	{
		id:3,
		image: image1,
		alt: 'image',
	},
	{
		id:4,
		image: image2,
		alt: 'image',
	},
]

const Bannerslider = () => {
  return (
    <Swiper
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={true}
      loop={true}
      effect={"fade"}
      spaceBetween={10}
      modules={[Autoplay, EffectFade, Pagination]}
      grabCursor={true}
      slidesPerView={1}
    >
      {bannerData?.map((i, index) => (
        <SwiperSlide key={index}>
          <div className={style.imagesbanner}>
            <img src={i?.image} alt={i?.alt} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Bannerslider;
