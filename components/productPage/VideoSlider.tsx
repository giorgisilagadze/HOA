import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import ScreenSize from "../ScreenSize";
import { useEffect, useState } from "react";

export default function VideoSlider() {
  const [slidesCount, setSlidesCount] = useState<number>();
  const width = ScreenSize();

  useEffect(() => {
    if (width <= 600) {
      setSlidesCount(1);
    } else if (width > 600 && width <= 800) {
      setSlidesCount(2);
    } else if (width > 800 && width <= 1200) {
      setSlidesCount(3);
    } else {
      setSlidesCount(4);
    }
  }, [width]);
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
        slidesPerView={slidesCount}
        spaceBetween={30}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-full duration-200 w-full"
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item} className="w-[20%]  rounded-[8px]">
            {/* <video className="custom-video" controls>
              <source src="../video.mp4" type="video/mp4" /> */}
            {/* <source src="movie.ogg" type="video/ogg" /> */}
            {/* Your browser does not support the video tag. */}
            {/* </video>  */}
            <iframe
              width={width <= 1440 ? "100%" : "290"}
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
