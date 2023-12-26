import { IoIosSearch } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import FilterInput from "./FilterInput";
import { useEffect, useState } from "react";

export default function Filter() {
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
      filterFields: ["bmw", "mercedes", "porsche", "audi", "nissan"],
    },
    {
      id: 2,
      title: "მოდელი",
      filterFields: ["e46", "f10", "laferari", "cl", "xtera"],
    },
    {
      id: 4,
      title: "წელი",
      filterFields: yearFields,
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
      id: 9,
      title: "ფასი",
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
    {
      id: 13,
      title: "გარბენი",
    },
  ];

  return (
    <div className="w-full flex flex-wrap items-center gap-2">
      {filterProp.map((item) => (
        <FilterInput
          key={item.id}
          width="[186px]"
          ml="3"
          border="#EEE"
          title={item.title}
          filterFields={item.filterFields ? item.filterFields : []}
        />
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
