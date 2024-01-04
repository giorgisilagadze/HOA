import { useContext, useEffect, useState } from "react";
import FilterInput from "../../filter/FilterInput";
import FileInput from "./FileInput";
import { PrimaryContext } from "@/utils/MainContext";

const wheel = ["მარცხენა", "მარჯვენა"];
const salonColorOptions = [
  "შავი",
  "თეთრი",
  "წითელი",
  "ყავისფერი",
  "ნაცრისფერი",
  "ბეჟი",
  "იასამნისფერი",
  "ყვითელი",
  "ლურჯი",
];
const colorOptions = [
  "შავი",
  "თეთრი",
  "ვერცხლისფერი",
  "იასამნისფერი",
  "რუხი",
  "წითელი",
  "ლურჯი",
  "ყავისფერი",
  "ოქროსფერი",
  "ყვითელი",
  "სტაფიილოსფერი",
  "შინდისფერი",
  "ვარდისფერი",
  "ცისფერი",
  "მწვანე",
];
const pullingWheelsOptions = ["4X4", "წინა წამყვანი", "უკანა წამყვანი"];
const petrolOptions = [
  "ბენზინი",
  "დიზელი",
  "ჰიბრიდი",
  "თხევადი გაზი",
  "ელექტრო",
  "წყალბადი",
  "ბენზინი+გაზი",
];
// const countryOptions = ["usa", "korea", "china"];
const transitionOptions = ["ავტომატიკა", "მექანიკა"];
const vehicleTypeOptions = [
  "სედანი",
  "ჯიპი",
  "კუპე",
  "ჰეტჩბექი",
  "უნივერსალი",
  "კაბრიოლეტი",
  "მინივენი",
  "პიკაპი",
  "ლიმუზინი",
  "სპორტბექი",
  "ჯიპის კუპე",
];

export default function AddCar() {
  const { checkedFields, setCheckedFields }: any = useContext(PrimaryContext);
  const [isClear, setIsClear] = useState(false);
  const [clickedFilter, setClickeFilter] = useState<number | null>(null);
  const [engineFields, setEngineFields] = useState<null | Array<string>>(null);
  const [yearFields, setYearFields] = useState<null | Array<number>>(null);
  const arrayRangeFloat = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step + 1 }, (value, index) =>
      Number(start + index * step).toFixed(1)
    );
  const arrayRangeInt = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  useEffect(() => {
    let tmp1 = arrayRangeFloat(0.7, 7.1, 0.1);
    tmp1 = ["0.0", ...tmp1];
    setEngineFields(tmp1);
    const currentYear: any = new Date().getFullYear();
    let tmp2 = arrayRangeInt(1990, parseInt(currentYear), 1);
    setYearFields(tmp2);
  }, []);

  const filterProp = [
    {
      id: 1,
      title: "ბრენდი",
      filterFields: ["bmw", "mercedes", "porsche", "audi", "nissan", "Kia"],
    },
    {
      id: 2,
      title: "მოდელი",
      filterFields: ["e46", "f10", "laferari", "cl", "xtera"],
    },
    {
      id: 5,
      title: "ტრანსმისია",
      filterFields: transitionOptions,
    },
    {
      id: 6,
      title: "ძრავი",
      filterFields: engineFields,
    },
    {
      id: 7,
      title: "საწვავის ტიპი",
      filterFields: petrolOptions,
    },
    {
      id: 8,
      title: "საჭე",
      filterFields: wheel,
    },
    {
      id: 10,
      title: "ფერი",
      filterFields: colorOptions,
    },
    {
      id: 11,
      title: "წამყვანი თვლები",
      filterFields: pullingWheelsOptions,
    },
    {
      id: 12,
      title: "ტიპი",
      filterFields: vehicleTypeOptions,
    },
  ];
  console.log(checkedFields);

  return (
    <div className="flex flex-col gap-3">
      <FileInput isVideo={false} />
      {filterProp.slice(0, 4).map((item) => (
        <div className="flex flex-col gap-1" key={item.id}>
          <p className="text-[#787d87] text-[14px] leading-[22px]">
            {item.title}
          </p>
          <FilterInput
            width="w-full"
            ml="0"
            border="#c0bebe"
            title={""}
            filterFields={item.filterFields}
            id={item.id}
            isClear={isClear}
            setIsClear={setIsClear}
            clickedFilter={clickedFilter}
            setClickedFilter={setClickeFilter}
          />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <p className="text-[#787d87] text-[14px] leading-[22px]">გარბენი </p>
        <input
          type="text"
          className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#787d87] text-[14px] leading-[22px]">წელი </p>
        <input
          type="text"
          className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
        />
      </div>
      {filterProp.slice(5, 10).map((item) => (
        <div className="flex flex-col gap-1" key={item.id}>
          <p className="text-[#787d87] text-[14px] leading-[22px]">
            {item.title}
          </p>
          <FilterInput
            width="w-full"
            ml="0"
            border="#c0bebe"
            title={""}
            filterFields={item.filterFields}
            id={item.id}
            isClear={isClear}
            setIsClear={setIsClear}
            clickedFilter={clickedFilter}
            setClickedFilter={setClickeFilter}
          />
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
