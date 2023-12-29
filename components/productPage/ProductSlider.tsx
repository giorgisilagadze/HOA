import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ScreenSize from "../ScreenSize";

interface Prop {
  imgs: CarImg[];
}

export default function ProductSlider({ imgs }: Prop) {
  let swiperRef = useRef<any>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const width = ScreenSize();
  console.log(width);

  return (
    <div className="xl:h-[500px] h-auto xl:w-[75%] w-full gap-[20px] flex xl:flex-row flex-col-reverse items-center  max-xl:h-auto relative">
      <div className="flex flex-col gap-2 xl:w-[150px] w-full h-full mx-0">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          direction={width >= 1440 ? "vertical" : "horizontal"}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper xl:w-[150px] w-full h-full mx-0"
        >
          {imgs.map((item: CarImg) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-lg flex items-center justify-center mx-0">
                <img
                  src={item.url}
                  alt="#"
                  className="lg:h-[120px] xl:h-[105px] h-[80px] sm:h-[100px] w-full max-tiny:h-[70px] cursor-pointer object-cover rounded-[10px] "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-1">
          <div className="xl:w-[48%] w-[50px] h-[30px] bg-white flex justify-center items-center rounded-[4px] prev cursor-pointer select-none">
            <IoIosArrowBack className="text-[#022FB0] xl:rotate-90  text-[28px]" />
          </div>
          <div className="xl:w-[48%] w-[50px] h-[30px] bg-white p-3 flex justify-center items-center rounded-[4px] next cursor-pointer select-none">
            <IoIosArrowBack className="text-[#022FB0] xl:-rotate-90 rotate-180 text-[28px]" />
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
          {imgs.map((item: CarImg) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-full rounded-[12px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.url}
                  alt="#"
                  className=" w-full lg:h-[500px] h-[289px] sm:h-[400px] duration-200 rounded-[12px] object-cover"
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
