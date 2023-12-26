import { MdLocalGasStation } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

interface Prop {
  product: Product;
}

export default function Card1({ product }: Prop) {
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
    <div className="w-[289px] rounded-[4px] shadow-product pb-4">
      <Link href={`/cars/${product.id}`}>
        {" "}
        <img
          src={`${product.mainPhoto}`}
          alt="product"
          className={`cursor-pointer w-full rounded-t-[4px] h-[162px] object-cover`}
        />
      </Link>

      <div className="w-full mt-2 flex flex-col gap-2">
        <div className="w-full flex justify-between items-center px-4">
          <Link href={`/cars/${product.id}`}>
            {" "}
            <p className="text-[#022FB0] cursor-pointer line-clamp-1 max-w-[170px]">
              {product.name}
            </p>
          </Link>

          <p className="text-[14px] leading-[22px]">{product.code}</p>
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
          <p className="text-[#022FB0]">${product.price}</p>
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
