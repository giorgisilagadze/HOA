import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ProductSlider() {
  let swiperRef = useRef<any>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="h-[500px] w-[75%] gap-[20px] flex items-center  max-xl:h-auto relative">
      <div className="flex flex-col gap-1 w-[150px] h-full mx-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          direction={"vertical"}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-[150px] h-full mx-0"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide key={item}>
              <div className=" rounded-lg flex items-center justify-center mx-0">
                <img
                  src="../images/car.jpeg"
                  alt="#"
                  className="h-[105px] w-full max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1">
          <div className="w-[48%] h-[30px] bg-white flex justify-center items-center rounded-[4px] prev cursor-pointer select-none">
            <IoIosArrowBack className="text-[#022FB0] rotate-90 text-[28px]" />
          </div>
          <div className="w-[48%] h-[30px] bg-white p-3 flex justify-center items-center rounded-[4px] next cursor-pointer select-none">
            <IoIosArrowBack className="text-[#022FB0] -rotate-90 text-[28px]" />
          </div>
        </div>
      </div>

      <div className="relative product-image">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            nextEl: null,
            prevEl: null,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full rounded-[12px]"
        >
          {[1, 2, 3, 4].map((item) => (
            <SwiperSlide key={item}>
              <div className="w-full h-full rounded-[12px] flex items-center justify-center overflow-hidden">
                <img
                  src="../images/car.jpeg"
                  alt="#"
                  className=" w-full h-[500px] rounded-[12px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-[50%] translate-y-[-50%] left-[15px] bg-[#0000005b]
           hover:bg-[#00000099] duration-150  z-10 h-[50px] rounded-full w-[50px] flex justify-center items-center"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsChevronLeft className="text-white text-[30px]  " />
        </button>
        <button
          className="absolute top-[50%] right-[15px] translate-y-[-50%] bg-[#0000005b] hover:bg-[#00000099] duration-150 z-10 h-[50px] rounded-full w-[50px] flex justify-center items-center"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsChevronRight className="text-white text-[30px]" />
        </button>
      </div>
    </div>
  );
}
