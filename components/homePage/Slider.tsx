import { IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full h-[619px] relative">
      <IoIosArrowBack className="text-[60px] text-white absolute top-[50%] left-10 translate-y-[-50%] z-[98] image-swiper-button-prev cursor-pointer" />
      <IoIosArrowBack className="text-[60px] text-white absolute top-[50%] right-10 translate-y-[-50%] z-[98] rotate-180 image-swiper-button-next cursor-pointer" />
      <Swiper
        // autoplay={{
        //   delay: 2000,
        // }}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-full duration-200 w-full"
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <div className="relative h-full fullScreen">
              <h1 className="xl:text-[55px] xl:leading-[70px] text-white absolute top-[230px] left-[112px] w-[650px]">
                მანქანები კორეიდან შენს სახლამდე
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
