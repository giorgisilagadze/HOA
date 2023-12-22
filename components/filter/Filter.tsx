import { IoIosSearch } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import FilterInput from "./FilterInput";

export default function Filter() {
  return (
    <div className="w-full flex flex-wrap items-center gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
        <FilterInput key={item} width="[186px]" ml="3" border="#EEE" />
      ))}
      <button className="w-[186px] h-[38px] py-2 bg-[#022FB0] rounded-[20px] flex justify-center items-center gap-2 border-none ml-3">
        <IoIosSearch className="text-[20px] text-white" />
        <p className="text-white">ძიება</p>
      </button>
      <button className="w-[186px] h-[38px] py-2 bg-[#D81111] rounded-[20px] flex justify-center items-center gap-2 border-none ml-3">
        <MdDelete className="text-[20px] text-white" />
        <p className="text-white">წაშლა</p>
      </button>
    </div>
  );
}
