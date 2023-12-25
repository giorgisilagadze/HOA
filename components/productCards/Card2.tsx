import { IoIosArrowRoundForward } from "react-icons/io";
import { MdLocalGasStation } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { PiCarFill } from "react-icons/pi";

export default function Card2() {
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
      text: "4 x 4",
      icon: <PiCarFill />,
    },
  ];

  return (
    <div className="flex w-[32.2%] items-center shadow-product rounded-[4px] bg-white">
      <img
        src="../images/car.jpeg"
        alt="product-image"
        className="w-[194px] h-full rounded-tl-[4px] rounded-bl-[4px]"
      />
      <div className="py-2 px-4 flex flex-col gap-1">
        <div>
          <p className="text-[#022FB0]">De Lorean Smth Model</p>
          <p className="text-[12px] leading-[16px] text-[#717171]">HOA-123</p>
        </div>
        <div className="flex flex-col gap-1">
          {properties.map((item: Contact) => (
            <div className="flex items-center gap-1" key={item.id}>
              {item.icon}
              <p className="text-[14px] leading-[22px]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-[#022FB0]">$2 000 </p>
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
