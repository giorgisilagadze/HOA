import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { MdLocalGasStation } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { PiCarFill } from "react-icons/pi";

interface Prop {
  product: Product;
}

export default function Card2({ product }: Prop) {
  const properties: Contact[] = [
    {
      id: 1,
      text: product.petrol,
      icon: <MdLocalGasStation />,
    },
    {
      id: 2,
      text: product.metersRun + " km",
      icon: <MdOutlineSpeed />,
    },
    {
      id: 3,
      text: product.year,
      icon: <LuCalendarDays />,
    },
  ];

  return (
    <div className="flex w-[32.2%] items-center shadow-product rounded-[4px] bg-white">
      <Link href={`/cars/${product.id}`}>
        <img
          src={`${product.mainPhoto}`}
          alt="product-image"
          className="w-[194px] h-[170px] rounded-tl-[4px] rounded-bl-[4px] object-cover"
        />
      </Link>
      <div className="py-2 px-4 w-[50%] flex flex-col gap-1">
        <div>
          <Link href={`/cars/${product.id}`}>
            <p className="text-[#022FB0] line-clamp-1 max-w-[140px]">
              {product.name}
            </p>
          </Link>
          <p className="text-[12px] leading-[16px] text-[#717171]">
            {product.code}
          </p>
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
          <Link href={`/cars/${product.id}`}>
            <div className="flex items-center hover:underline cursor-pointer">
              <p className="text-[14px] leading-[22px] text-[#022FB0]">
                დეტალურად
              </p>
              <IoIosArrowRoundForward className="text-[#022FB0] -rotate-45 text-[20px] ml-[-5px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
