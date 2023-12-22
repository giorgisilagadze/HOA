import FilterInput from "../../filter/FilterInput";
import FileInput from "./FileInput";

const addcar = [
  {
    id: 1,
    title: "ქვეყანა",
  },
  {
    id: 2,
    title: "ფირმა",
  },
  {
    id: 3,
    title: "მოდელი",
  },
  {
    id: 4,
    title: "ძრავი",
  },
  {
    id: 5,
    title: "გარბენი",
  },
  {
    id: 6,
    title: "საწვავის ტიპი",
  },
  {
    id: 7,
    title: "წამყვანი თვლები",
  },
  {
    id: 8,
    title: "წელი",
  },
  {
    id: 9,
    title: "ტრანსმისია",
  },
  {
    id: 10,
    title: "ფერი",
  },
  {
    id: 11,
    title: "ფასი",
  },
];

export default function AddCar() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput isVideo={false} />
      {addcar.slice(0, 4).map((item) => (
        <div className="flex flex-col gap-1" key={item.id}>
          <p className="text-[#787d87] text-[14px] leading-[22px]">
            {item.title}
          </p>
          <FilterInput width="full" ml="0" border="#c0bebe" />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <p className="text-[#787d87] text-[14px] leading-[22px]">გარბენი </p>
        <input
          type="text"
          className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
        />
      </div>
      {addcar.slice(5, 10).map((item) => (
        <div className="flex flex-col gap-1" key={item.id}>
          <p className="text-[#787d87] text-[14px] leading-[22px]">
            {item.title}
          </p>
          <FilterInput width="full" ml="0" border="#c0bebe" />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <p className="text-[#787d87] text-[14px] leading-[22px]">ფასი </p>
        <input
          type="text"
          className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
        />
      </div>
      <div className="w-full flex items-center gap-5 pt-4">
        <button className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px]">
          შენახვა
        </button>
        <button className="rounded-[12px] bg-[red] px-3 py-3 text-white text-[14px] leading-[22px]">
          გასუფთავება
        </button>
      </div>
    </div>
  );
}
