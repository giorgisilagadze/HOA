import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CarComp() {
  return (
    <div className="w-full rounded-[5px] bg-white py-2 px-3 flex justify-between items-center">
      <div className="flex items-center justify-between w-[15%]">
        <img
          src="../images/car.png"
          alt="car"
          className="w-12 h-12 rounded-[8px]"
        />
        <p className="text-[#475569]">TESLA</p>
      </div>
      <div className="w-[68%] flex items-center justify-between">
        <p className="text-[#9CA3AF]">50 000 ml</p>
        <p className="text-[#9CA3AF]">2023 წ</p>
        <p className="text-[#9CA3AF]">30 000 $</p>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-[12px] bg-[#022FB0] text-white cursor-pointer flex justify-center items-center">
            <FaPencil className="text-[18px]" />
          </div>
          <div className="w-10 h-10 rounded-[12px] bg-[red] text-white cursor-pointer flex justify-center items-center">
            <RiDeleteBin6Line className="text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
