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

export default function SingleCar() {
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
      prop: "ძრავი",
      value: "2.4",
      icon: <PiEngine className="text-[24px]" />,
    },
    {
      id: 2,
      prop: "ფერი",
      value: "თეთრი",
      icon: <MdOutlineFormatColorFill className="text-[24px]" />,
    },
    {
      id: 3,
      prop: "საწვავის ტიპი",
      value: "დიზელი",
      icon: <MdLocalGasStation className="text-[24px]" />,
    },
    {
      id: 4,
      prop: "VIN კოდი",
      value: "7SDF6FDSVD8ZSX9",
      icon: <CiBarcode className="text-[24px]" />,
    },
    {
      id: 5,
      prop: "გარბენი",
      value: "36 251 mil",
      icon: <MdOutlineSpeed className="text-[24px]" />,
    },
    {
      id: 6,
      prop: "გამოშვების წელი",
      value: "2015",
      icon: <LuCalendarDays className="text-[24px]" />,
    },
    {
      id: 7,
      prop: "წამყვანი თვლები",
      value: "4 x 4",
      icon: <PiCarFill className="text-[24px]" />,
    },
    {
      id: 8,
      prop: "გადაცემათა კოლოფი",
      value: "ავტომატიკა",
      icon: <GiGearStickPattern className="text-[24px]" />,
    },
  ];

  return (
    <div className="w-full px-[112px] max-w-[1500px] mx-auto py-6 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <ProductSlider />
        <div className="flex flex-col gap-4 w-[22%] sticky top-2">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-3 w-full justify-between">
              <h1 className="text-[24px] leading-[32px] text-[#022FB0]">
                BMW 300
              </h1>
              <p className="p-2 rounded-[5px] bg-[#022FB0] text-white">2015</p>
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
      <div className="w-[75%] rounded-[8px] bg-white shadow-thin py-4 px-6 flex flex-col gap-4">
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
              <p className="text-[14px] leading-[22px] w-[200px]">
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card2 key={item} />
          ))}
        </div>
      </div>

      <VideoSlider />
    </div>
  );
}
