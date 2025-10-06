import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="relative banner w-full h-[350px] my-4 bg-black">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src="/client/banner1.png"
            alt="banner 1"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/client/banner2.png"
            alt="banner 2"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/client/banner3.png"
            alt="banner 3"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
