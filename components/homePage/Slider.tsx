import { IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="w-full h-[619px] relative">
      <IoIosArrowBack className="text-[60px] text-white absolute top-[50%] left-5 translate-y-[-50%] z-[98] image-swiper-button-prev cursor-pointer hidden lg:block" />
      <IoIosArrowBack className="text-[60px] text-white absolute top-[50%] right-5 translate-y-[-50%] z-[98] rotate-180 image-swiper-button-next cursor-pointer hidden lg:block" />
      <Swiper
        // autoplay={{
        //   delay: 2000,
        // }}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
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
              <h1 className="lg:text-[55px] lg:leading-[70px] text-[24px] sm:text-[40px] md600:text-[30px] leading-[40px] sm:leading-[60px] text-white absolute lg:top-[230px] lg:left-[112px] top-[40%] left-[30px] w-[90%] sm:w-[80%] xl:w-[650px]">
                მანქანები კორეიდან შენს სახლამდე
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
