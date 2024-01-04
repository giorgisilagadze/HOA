import FileInput from "@/components/admin/addEdit/FileInput";
import SideAddVideo from "@/components/admin/addVideo/SideAddVideo";
import ViodeComp from "@/components/admin/addVideo/VideoComp";
import { useState } from "react";

export default function Brands() {
  const [isSideAddVideoVisible, setIsSideAddVideoVisible] = useState(false);
  return (
    <div className="custom-width w-full py-[40px] sm:px-8 px-5 flex flex-col sm:flex-row items-end sm:items-start gap-5 justify-between lg:justify-start">
      <button
        className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px] sm:hidden
        "
        onClick={() => setIsSideAddVideoVisible(true)}
      >
        მანქანის დამატება
      </button>
      <div className="lg:w-[65%] sm:w-[55%] w-full duration-200 flex flex-col gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ViodeComp key={item} />
        ))}
      </div>
      <div className="lg:w-[35%] w-[40%] hidden sm:block h-[700px] rounded-[12px] bg-white p-5 overflow-y-auto">
        <FileInput isVideo={true} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#787d87] text-[14px] leading-[22px]">
              ვიდეოს ლინკი
            </p>
            <input
              type="text"
              className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#787d87] text-[14px] leading-[22px]">ინდექსი</p>
            <input
              type="text"
              className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
            />
          </div>
          <div className="w-full flex items-center gap-5">
            <button className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px]">
              შენახვა
            </button>
            <button className="rounded-[12px] bg-[red] px-3 py-3 text-white text-[14px] leading-[22px]">
              გასუფთავება
            </button>
          </div>
        </div>
      </div>
      <SideAddVideo
        isSideAddVideoVisible={isSideAddVideoVisible}
        setIsSideAddVideoVisible={setIsSideAddVideoVisible}
      />
    </div>
  );
}
