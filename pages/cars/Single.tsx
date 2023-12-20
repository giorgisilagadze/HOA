import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
export default function ProductImageSlider() {
  let swiperRef = useRef<any>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="h-[400px] w-full gap-[30px] max-xl:gap-[20px] max-xl:flex-col-reverse max-xl:h-auto relative">
      <div className="relative">
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
          className="p-10"
        >
          <SwiperSlide>
            <div className="w-full h-[400px] border border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="../images/car.png"
                alt="#"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] border border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="../images/car.png"
                alt="#"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] border border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="../images/car.png"
                alt="#"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] border border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="../images/car.png"
                alt="#"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
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
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        direction={"horizontal"}
        spaceBetween={30}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full mt-10"
      >
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-[100px] w-full cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-full w-[150px] max-xl:w-full max-xl:h-[100px] max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-full w-[150px] max-xl:w-full max-xl:h-[100px] max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-full w-[150px] max-xl:w-full max-xl:h-[100px] max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-full w-[150px] max-xl:w-full max-xl:h-[100px] max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-full w-[150px] max-xl:w-full max-xl:h-[100px] max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-gray-400 rounded-lg flex items-center justify-center">
            <img
              src="../images/car.png"
              alt="#"
              className="h-full w-[150px] max-xl:w-full max-xl:h-[100px] max-tiny:h-[70px] cursor-pointer object-contain rounded-[10px] "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
