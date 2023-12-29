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
      icon: <MdLocalGasStation className="text-[14px] sm:text-[16px]" />,
    },
    {
      id: 2,
      text: product.metersRun + " km",
      icon: <MdOutlineSpeed className="text-[14px] sm:text-[16px]" />,
    },
    {
      id: 3,
      text: product.year,
      icon: <LuCalendarDays className="text-[14px] sm:text-[16px]" />,
    },
  ];

  return (
    <div className="flex xl:w-[32.2%] w-full md600:w-[48%] lg:w-[48.5%] items-center shadow-product rounded-[4px] bg-white">
      <Link href={`/cars/${product.id}`}>
        <img
          src={`${product.mainPhoto}`}
          alt="product-image"
          className="w-[194px] md600:w-[135px] sm:w-[194px] sm:h-[175px] h-[145px] rounded-tl-[4px] rounded-bl-[4px] object-cover"
        />
      </Link>
      <div className="py-2 lg:px-4 pr-1 pl-2 w-[50%] flex flex-col gap-1">
        <div>
          <Link href={`/cars/${product.id}`}>
            <p className="text-[#022FB0] cursor-pointer line-clamp-1 lg:max-w-[140px] max-w-[100px] text-[12px] leading-5 sm:text-[16px] sm:leading-6">
              {product.name}
            </p>
          </Link>
          <p className="text-[10px] leading-[16px] sm:text-[12px] sm:leading-[22px]">
            {product.code}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          {properties.map((item: Contact) => (
            <div className="flex items-center gap-1" key={item.id}>
              {item.icon}
              <p className="text-[8px] leading-[14px] sm:text-[14px] sm:leading-[22px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-[#022FB0] text-[10px] leading-4 sm:text-[16px] sm:leading-6">
            ${product.price}{" "}
          </p>
          <Link href={`/cars/${product.id}`}>
            <div className="flex items-center hover:underline cursor-pointer">
              <p className="text-[10px] leading-[16px] text-[#022FB0] sm:text-[14px] sm:leading-[22px]">
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
