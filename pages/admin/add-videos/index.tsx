import FileInput from "@/components/admin/addEdit/FileInput";
import ViodeComp from "@/components/admin/addVideo/VideoComp";

export default function Brands() {
  return (
    <div className="custom-width py-[40px] px-8 flex items-start gap-5">
      <div className="w-[65%] flex flex-col gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ViodeComp key={item} />
        ))}
      </div>
      <div className="w-[35%] h-[700px] rounded-[12px] bg-white p-5 overflow-y-auto">
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
    </div>
  );
}
