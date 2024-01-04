import FilterInput from "@/components/filter/FilterInput";

interface Prop {
  isAdd: boolean;
}

export default function AddOrDeleteBrand({ isAdd }: Prop) {
  return (
    <div className="sm:w-[80%] w-full p-5 bg-white rounded-[12px] flex flex-col gap-4">
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
                className="w-[95%] rounded-[4px] border border-[#c0bebe] h-[28px] lg:h-auto py-[7px] px-2 outline-none"
              />
            ) : (
              <FilterInput
                width="w-[95%]"
                ml="0"
                border="#c0bebe"
                title={""}
                id={0}
                filterFields={undefined}
                // @ts-ignore
                checkedFields={[]}
                setCheckedFields={function (checkedFields: any[]): void {
                  throw new Error("Function not implemented.");
                }}
                isClear={false}
                setIsClear={function (isClear: boolean): void {
                  throw new Error("Function not implemented.");
                }}
                clickedFilter={null}
                setClickedFilter={function (
                  clickedFilter: number | null
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
            <button
              className={`lg:p-[9px] p-[6px] lg:rounded-[12px] rounded-[6px] text-white lg:text-[14px] text-[12px] lg:leading-[22px] leading-4 ${
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
          <FilterInput
            width="w-full"
            ml="0"
            border="#c0bebe"
            title={""}
            id={0}
            filterFields={undefined}
            // @ts-ignore
            checkedFields={[]}
            setCheckedFields={function (checkedFields: any[]): void {
              throw new Error("Function not implemented.");
            }}
            isClear={false}
            setIsClear={function (isClear: boolean): void {
              throw new Error("Function not implemented.");
            }}
            clickedFilter={null}
            setClickedFilter={function (clickedFilter: number | null): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#787d87] text-[14px] leading-[22px]">მოდელი</p>
          <div className="flex items-center gap-2">
            {isAdd ? (
              <input
                type="text"
                className="w-[95%] rounded-[4px] border border-[#c0bebe] h-[28px] lg:h-auto py-[7px] px-2 outline-none"
              />
            ) : (
              <FilterInput
                width="w-[95%]"
                ml="0"
                border="#c0bebe"
                title={""}
                id={0}
                filterFields={undefined}
                // @ts-ignore
                checkedFields={[]}
                setCheckedFields={function (checkedFields: any[]): void {
                  throw new Error("Function not implemented.");
                }}
                isClear={false}
                setIsClear={function (isClear: boolean): void {
                  throw new Error("Function not implemented.");
                }}
                clickedFilter={null}
                setClickedFilter={function (
                  clickedFilter: number | null
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
            <button
              className={`lg:p-[9px] p-[6px] lg:rounded-[12px] rounded-[6px] text-white lg:text-[14px] text-[12px] lg:leading-[22px] leading-4 ${
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
