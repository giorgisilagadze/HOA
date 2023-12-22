import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";

export default function VideoSlider() {
  return (
    <div className="w-full flex flex-col gap-4 rounded-[12px]  bg-[#022FB0] p-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[20px] leading-7 text-white">ვიდეო</h1>
        <div className="flex items-center gap-1">
          <div className="image-swiper-button-prev w-10 h-10 rounded-[8px] flex justify-center items-center bg-white cursor-pointer">
            <IoIosArrowBack className="text-[#022FB0] text-[24px]" />
          </div>
          <div className="image-swiper-button-next w-10 h-10 rounded-[8px] flex justify-center items-center bg-white cursor-pointer">
            <IoIosArrowBack className="text-[#022FB0] text-[24px] rotate-180" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-full duration-200 w-full"
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item} className="w-[23.7%] rounded-[8px]">
            {/* <video className="custom-video" controls>
              <source src="../video.mp4" type="video/mp4" /> */}
            {/* <source src="movie.ogg" type="video/ogg" /> */}
            {/* Your browser does not support the video tag. */}
            {/* </video>  */}
            <iframe
              width="full"
              height="180"
              src="https://www.youtube.com/embed/c0AjyW3Cj7s?si=_Ej2RYeaAQDwKQoD"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
