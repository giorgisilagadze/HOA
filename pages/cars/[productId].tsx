import Card2 from "@/components/productCards/Card2";
import ProductSlider from "@/components/productPage/ProductSlider";
import VideoSlider from "@/components/productPage/VideoSlider";
import { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiEngine } from "react-icons/pi";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { MdLocalGasStation } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { PiCarFill } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import axios from "axios";
import { GetServerSidePropsContext } from "next";

interface Prop {
  oneCar: Product;
  cars: AllProducts;
}

export default function SingleCar({ oneCar, cars }: Prop) {
  const [lari, setLari] = useState(false);

  const contactDiler = [
    {
      id: 1,
      cont: "+995 555 555 555",
      icon: <FaPhoneAlt className="text-[#022FB0]" />,
    },
    {
      id: 2,
      cont: "saxeligvari@gmail.com",
      icon: <MdEmail className="text-[#022FB0]" />,
    },
  ];

  const details = [
    {
      id: 1,
      prop: "ძრავის მოცულობა",
      value: oneCar.engine,
      icon: <PiEngine className="text-[24px]" />,
    },
    {
      id: 2,
      prop: "ფერი",
      value: oneCar.color,
      icon: <MdOutlineFormatColorFill className="text-[24px]" />,
    },
    {
      id: 3,
      prop: "საწვავის ტიპი",
      value: oneCar.petrol,
      icon: <MdLocalGasStation className="text-[24px]" />,
    },
    {
      id: 4,
      prop: "VIN კოდი",
      value: oneCar.vin,
      icon: <CiBarcode className="text-[24px]" />,
    },
    {
      id: 5,
      prop: "გარბენი",
      value: oneCar.metersRun + " km",
      icon: <MdOutlineSpeed className="text-[24px]" />,
    },
    {
      id: 6,
      prop: "გამოშვების წელი",
      value: oneCar.year,
      icon: <LuCalendarDays className="text-[24px]" />,
    },
    {
      id: 7,
      prop: "წამყვანი თვლები",
      value: oneCar.driveShaft,
      icon: <PiCarFill className="text-[24px]" />,
    },
    {
      id: 8,
      prop: "გადაცემათა კოლოფი",
      value: oneCar.transmission,
      icon: <GiGearStickPattern className="text-[24px]" />,
    },
  ];

  return (
    <div className="w-full lg:px-[112px] px-4 max-w-[1500px] mx-auto py-6 flex flex-col gap-6">
      <div className="flex justify-between items-start flex-row gap-5">
        <ProductSlider imgs={oneCar.cars_imgs} />
        <div className="xl:flex flex-col gap-4 w-[22%] sticky top-2 hidden ">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-3 w-full justify-between">
              <h1 className="text-[24px] leading-[32px] text-[#022FB0]">
                {oneCar.firm + " " + oneCar.model}
              </h1>
              <p className="p-2 rounded-[5px] bg-[#022FB0] text-white">
                {oneCar.year}
              </p>
            </div>

            <div className="px-2 py-4 bg-white shadow-thin rounded-[8px] flex items-center justify-center gap-4">
              {lari ? (
                <h6 className="text-[28px] font-bold leading-[36px] text-[#022FB0]">
                  ₾32 000
                </h6>
              ) : (
                <h6 className="text-[28px] font-bold leading-[36px] text-[#022FB0]">
                  $15 000
                </h6>
              )}

              <div className="w-[50px] h-[28px] rounded-[30px] border border-slate-300 relative flex items-center justify-between px-2">
                <p
                  className={`text-[12px] z-[99] cursor-pointer duration-200 ${
                    !lari && "text-white"
                  }`}
                  onClick={() => setLari(!lari)}
                >
                  $
                </p>
                <p
                  className={`text-[12px] z-[99] cursor-pointer duration-200 ${
                    lari && "text-white"
                  }`}
                  onClick={() => setLari(!lari)}
                >
                  ₾
                </p>
                <div
                  className={`absolute top-0 w-[26px] h-[26px] rounded-[50%] bg-[#022FB0] transition duration-500 ease-in-out ${
                    lari ? "right-0" : "left-0"
                  } cursor-pointer`}
                  onClick={() => setLari(!lari)}
                ></div>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-white px-6 py-4 flex flex-col items-center gap-3 shadow-thin">
            <img
              src="../images/man.svg"
              alt="diler"
              className="rounded-[50%] w-[83px] h-[83px]"
            />
            <h6 className="text-[20px] leading-7">სახელი გვარი</h6>
            <div className="w-full flex-col gap-1 flex justify-between items-center">
              {contactDiler.map((item) => (
                <div className="flex items-center gap-2" key={item.id}>
                  {item.icon}
                  <p className="text-[12px] leading-5">{item.cont}</p>
                </div>
              ))}
            </div>
            <button className="w-full border-none bg-[#022FB0] py-[8px] rounded-[8px] text-white text-[12px] leading-5">
              <h6>გასაუბრება დილერთან</h6>
            </button>
            <button className="w-full border border-[#028F19] rounded-[8px] py-[6px] text-[#028F19] text-[12px] leading-5 hover:bg-[#028F19] hover:text-white duration-200">
              <h6> Whatsapp ჩათი</h6>
            </button>
          </div>
        </div>
      </div>
      <div className="xl:hidden flex-col gap-4 w-full md600:w-[70%] sm:w-[50%] duration-200 flex ">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-3 w-full justify-between">
            <h1 className="text-[24px] leading-[32px] text-[#022FB0]">
              {oneCar.firm + " " + oneCar.model}
            </h1>
            <p className="p-2 rounded-[5px] bg-[#022FB0] text-white">
              {oneCar.year}
            </p>
          </div>

          <div className="px-2 py-4 bg-white shadow-thin rounded-[8px] flex items-center justify-center gap-4">
            {lari ? (
              <h6 className="text-[28px] font-bold leading-[36px] text-[#022FB0]">
                ₾32 000
              </h6>
            ) : (
              <h6 className="text-[28px] font-bold leading-[36px] text-[#022FB0]">
                $15 000
              </h6>
            )}

            <div className="w-[50px] h-[28px] rounded-[30px] border border-slate-300 relative flex items-center justify-between px-2">
              <p
                className={`text-[12px] z-[99] cursor-pointer duration-200 ${
                  !lari && "text-white"
                }`}
                onClick={() => setLari(!lari)}
              >
                $
              </p>
              <p
                className={`text-[12px] z-[99] cursor-pointer duration-200 ${
                  lari && "text-white"
                }`}
                onClick={() => setLari(!lari)}
              >
                ₾
              </p>
              <div
                className={`absolute top-0 w-[26px] h-[26px] rounded-[50%] bg-[#022FB0] transition duration-500 ease-in-out ${
                  lari ? "right-0" : "left-0"
                } cursor-pointer`}
                onClick={() => setLari(!lari)}
              ></div>
            </div>
          </div>
        </div>
        <div className="rounded-[8px] bg-white px-6 py-4 flex flex-col items-center gap-3 shadow-thin">
          <img
            src="../images/man.svg"
            alt="diler"
            className="rounded-[50%] w-[83px] h-[83px]"
          />
          <h6 className="text-[20px] leading-7">სახელი გვარი</h6>
          <div className="w-full flex-col gap-1 flex justify-between items-center">
            {contactDiler.map((item) => (
              <div className="flex items-center gap-2" key={item.id}>
                {item.icon}
                <p className="text-[12px] leading-5">{item.cont}</p>
              </div>
            ))}
          </div>
          <button className="w-full border-none bg-[#022FB0] py-[8px] rounded-[8px] text-white text-[12px] leading-5">
            <h6>გასაუბრება დილერთან</h6>
          </button>
          <button className="w-full border border-[#028F19] rounded-[8px] py-[6px] text-[#028F19] text-[12px] leading-5 hover:bg-[#028F19] hover:text-white duration-200">
            <h6> Whatsapp ჩათი</h6>
          </button>
        </div>
      </div>
      <div className="xl:w-[75%] w-full rounded-[8px] bg-white shadow-thin py-4 px-6 flex flex-col gap-4">
        <h1 className="text-[20px] leading-7 text-[#022FB0]">
          მანქანის დეტალები
        </h1>
        {details.map((item) => (
          <div key={item.id}>
            <div
              className="w-full flex items-center justify-between"
              key={item.id}
            >
              <div className="flex items-center gap-1">
                {item.icon}
                <p className="text-[14px] leading-[22px]">{item.prop}</p>
              </div>
              <p className="text-[14px] leading-[22px] sm:w-[200px] w-[100px] duration-200">
                {item.value}
              </p>
            </div>
            <hr className="w-full h-[1px] bg-[#eee] border-none mt-2" />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-4">
        <h1 className="text-[20px] leading-7 text-[#022FB0]">
          მსგავსი მოდელები
        </h1>
        <div className="flex flex-wrap gap-5">
          {cars.data.slice(0, 6).map((item: Product) => (
            <Card2 key={item.id} product={item} />
          ))}
        </div>
      </div>

      <VideoSlider />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  if (!params || !params.productId) {
    // Handle the case where 'params' or 'params.product' is missing.
    // You can return an error or a different response as needed.
    return {
      notFound: true, // For example, return a 404 Not Found page.
    };
  }

  const { productId } = params;

  const responseOneProduct = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/front/car/${productId}`
  );
  const data = responseOneProduct.data;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/front/car`
  );
  const productData = response.data;

  return {
    props: {
      oneCar: data,
      cars: productData,
      productId,
    },
  };
}
