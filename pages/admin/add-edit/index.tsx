import PagePagination from "@/components/PagePagination";
import AddCar from "@/components/admin/addEdit/AddCar";
import CarComp from "@/components/admin/addEdit/CarComp";
import FileInput from "@/components/admin/addEdit/FileInput";
import FilterInput from "@/components/filter/FilterInput";
import { IoIosSearch } from "react-icons/io";

export default function Add() {
  return (
    <div className={`custom-width py-[30px] px-8 flex items-start gap-5`}>
      <div className="w-[65%] flex flex-col gap-7">
        <div className="w-full flex items-center">
          <input
            type="text"
            className="w-[95%] p-2 bg-white rounded-tl-[5px] rounded-bl-[5px]"
            placeholder="ძებნა(ფირმა, მოდელი, კოდი)"
          />
          <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#022FB0] text-white text-[20px] rounded-tr-[5px] rounded-br-[5px]">
            <IoIosSearch />
          </div>
        </div>
        <PagePagination dataLength={1000} itemsPerPage={20}>
          <div className="flex flex-col gap-4">
            {[1, 2, , 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <CarComp key={item} />
            ))}
          </div>
        </PagePagination>
      </div>
      <div className="w-[35%] h-[700px] rounded-[12px] bg-white p-5 overflow-y-auto flex flex-col gap-2">
        <AddCar />
      </div>
    </div>
  );
}
