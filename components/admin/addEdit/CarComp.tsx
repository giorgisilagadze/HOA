import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Prop {
  car: Product;
}

export default function CarComp({ car }: Prop) {
  return (
    <div className="w-full rounded-[5px] bg-white py-2 px-3 flex justify-between items-center">
      <div className="flex items-center w-[25%] gap-[5%]">
        <img
          src={car.mainPhoto}
          alt="car"
          className="w-12 h-12 rounded-[8px]"
        />
        <p className="text-[#475569] line-clamp-1 max-w-[150px]">{car.name}</p>
      </div>
      <div className="w-[68%] flex items-center justify-between">
        <p className="text-[#9CA3AF]">{car.metersRun} km</p>
        <p className="text-[#9CA3AF]">{car.year} წ</p>
        <p className="text-[#9CA3AF]">{car.price} $</p>
        <div className="flex items-center gap-2">
          <Link href={`/admin/add-edit/${car.id}`}>
            <div className="w-10 h-10 rounded-[12px] bg-[#022FB0] text-white cursor-pointer flex justify-center items-center">
              <FaPencil className="text-[18px]" />
            </div>
          </Link>
          <div className="w-10 h-10 rounded-[12px] bg-[red] text-white cursor-pointer flex justify-center items-center">
            <RiDeleteBin6Line className="text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
