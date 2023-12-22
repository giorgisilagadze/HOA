import FilterInput from "@/components/filter/FilterInput";

interface Prop {
  isAdd: boolean;
}

export default function AddOrDeleteBrand({ isAdd }: Prop) {
  return (
    <div className="w-[80%] p-5 bg-white rounded-[12px] flex flex-col gap-4">
      <p className="text-[#787d87]">ფირმების დამატება</p>
      <div className="flex flex-col gap-2">
        <hr className="w-full h-[1px] border-none bg-slate-300" />
        <div className="flex flex-col gap-1">
          <p className="text-[#787d87] text-[14px] leading-[22px]">
            ფირმის სახელი
          </p>
          <div className="flex items-center gap-2">
            {isAdd ? (
              <input
                type="text"
                className="w-[95%] rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
              />
            ) : (
              <FilterInput width="[95%]" ml="0" border="#c0bebe" />
            )}
            <button
              className={`p-[9px] rounded-[12px] text-white text-[14px] leading-[22px] ${
                isAdd ? "bg-[#022FB0]" : "bg-[red]"
              }`}
            >
              {isAdd ? "შენახვა" : "წაშლა"}
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#787d87]">მოდელების დამატება</p>
      <div className="flex flex-col gap-2">
        <hr className="w-full h-[1px] border-none bg-slate-300" />
        <div className="flex flex-col gap-1">
          <p className="text-[#787d87] text-[14px] leading-[22px]">
            აირჩიეთ ფირმა
          </p>
          <FilterInput width="full" ml="0" border="#c0bebe" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#787d87] text-[14px] leading-[22px]">მოდელი</p>
          <div className="flex items-center gap-2">
            {isAdd ? (
              <input
                type="text"
                className="w-[95%] rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
              />
            ) : (
              <FilterInput width="[95%]" ml="0" border="#c0bebe" />
            )}
            <button
              className={`p-[9px] rounded-[12px] text-white text-[14px] leading-[22px] ${
                isAdd ? "bg-[#022FB0]" : "bg-[red]"
              }`}
            >
              {isAdd ? "შენახვა" : "წაშლა"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
