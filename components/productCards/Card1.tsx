import { MdLocalGasStation } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Card1() {
  const properties: Contact[] = [
    {
      id: 1,
      text: "დიზელი",
      icon: <MdLocalGasStation />,
    },
    {
      id: 2,
      text: "135 000 km",
      icon: <MdOutlineSpeed />,
    },
    {
      id: 3,
      text: "2015",
      icon: <LuCalendarDays />,
    },
  ];

  return (
    <div className="w-[289px] rounded-[4px] shadow-product pb-4">
      <img src="../images/car.png" alt="product" className="cursor-pointer" />
      <div className="w-full mt-2 flex flex-col gap-2">
        <div className="w-full flex justify-between items-center px-4">
          <p className="text-[#022FB0]">De Lorean Smth Model</p>
          <p className="text-[14px] leading-[22px]">HOA-123</p>
        </div>
        <hr className="w-full h-[1px] border-none bg-[#EEE]" />
        <div className="w-full flex justify-between items-center px-4">
          {properties.map((item: Contact) => (
            <div className="flex flex-col items-center" key={item.id}>
              {item.icon}
              <p className="text-[14px] leading-[22px]">{item.text}</p>
            </div>
          ))}
        </div>
        <hr className="w-full h-[1px] border-none bg-[#EEE]" />
        <div className="w-full flex justify-between items-center px-4">
          <p className="text-[#022FB0]">$2 000 000</p>
          <div className="flex items-center hover:underline cursor-pointer">
            <p className="text-[14px] leading-[22px] text-[#022FB0]">
              დეტალურად
            </p>
            <IoIosArrowRoundForward className="text-[#022FB0] -rotate-45 text-[20px] ml-[-5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
