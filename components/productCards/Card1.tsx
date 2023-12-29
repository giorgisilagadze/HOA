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
    <div className="xl:w-[289px] w-[46.5%] lg:w-[31.8%]  max-w-[289px] rounded-[4px] shadow-product sm:pb-4 pb-2">
      <Link href={`/cars/${product.id}`}>
        {" "}
        <img
          src={`${product.mainPhoto}`}
          alt="product"
          className={`cursor-pointer w-full rounded-t-[4px] h-[162px] object-cover`}
        />
      </Link>

      <div className="w-full mt-2 flex flex-col gap-1 sm:gap-2">
        <div className="w-full flex flex-col sm:flex-row gap-1 justify-between items-start sm:items-center sm:px-4 px-1">
          <Link href={`/cars/${product.id}`}>
            {" "}
            <p className="text-[#022FB0] cursor-pointer line-clamp-1 max-w-[170px] text-[12px] leading-5 sm:text-[16px] sm:leading-6">
              {product.name}
            </p>
          </Link>

          <p className="text-[10px] leading-[16px] sm:text-[14px] sm:leading-[22px]">
            {product.code}
          </p>
        </div>
        <hr className="w-full h-[1px] border-none bg-[#EEE]" />
        <div className="w-full flex justify-between items-center sm:px-4 px-1">
          {properties.map((item: Contact) => (
            <div className="flex flex-col items-center " key={item.id}>
              {item.icon}
              <p className="text-[8px] leading-[14px] sm:text-[14px] sm:leading-[22px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <hr className="w-full h-[1px] border-none bg-[#EEE]" />
        <div className="w-full flex justify-between items-center sm:px-4 px-1">
          <p className="text-[#022FB0] text-[10px] leading-4 sm:text-[16px] sm:leading-6">
            ${product.price}
          </p>
          <Link href={`/cars/${product.id}`}>
            <div className="flex items-center hover:underline cursor-pointer">
              <p className="text-[8px] leading-[16px] text-[#022FB0] sm:text-[14px] sm:leading-[22px]">
                დეტალურად
              </p>
              <IoIosArrowRoundForward className="text-[#022FB0] -rotate-45 text-[14px] sm:text-[20px] sm:ml-[-5px] ml-[-2px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
