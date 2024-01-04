import { IoIosSearch } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import FilterInput from "./FilterInput";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PrimaryContext } from "@/utils/MainContext";
import { useRouter } from "next/router";

export default function Filter() {
  const {
    filteredCars,
    setFilteredCars,
    isLoading,
    setIsLoading,
    checkedFields,
    setCheckedFields,
    handleFilter,
  }: any = useContext(PrimaryContext);
  const route = useRouter();

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
  const [yearFields, setYearFields] = useState<null | Array<string>>(null);
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
    const stringNumbersArray = tmp2.map((number) => String(number));
    setYearFields(stringNumbersArray);
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

  const [isClear, setIsClear] = useState(false);
  const [clickedFilter, setClickeFilter] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col lg:flex-row xl:gap-2 lg:gap-0 gap-2">
      <div className="w-full flex flex-wrap items-center justify-start xl:gap-2 lg:gap-3 gap-2">
        {filterProp.map((item) => (
          <FilterInput
            key={item.id}
            width="xl:w-[248px] lg:w-[220px] w-[92%]"
            ml="3"
            border="#EEE"
            title={item.title}
            filterFields={item.filterFields}
            isClear={isClear}
            setIsClear={setIsClear}
            id={item.id}
            clickedFilter={clickedFilter}
            setClickedFilter={setClickeFilter}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 justify-center">
        <button
          className="lg:w-[186px] lg:h-[38px] w-[92%] h-[30px] lg:py-2 py-1 bg-[#022FB0] rounded-[20px] flex justify-center items-center gap-2 border-none xl:ml-3 ml-0"
          onClick={() => {
            handleFilter(1);
            if (route.pathname !== "/cars") {
              route.push("/cars");
            }
          }}
        >
          <IoIosSearch className="text-[20px] text-white" />
          <p className="text-white">ძიება</p>
        </button>
        <button
          className="lg:w-[186px] lg:h-[38px] w-[92%] h-[30px] lg:py-2 py-1 bg-[#D81111] rounded-[20px] flex justify-center items-center gap-2 border-none xl:ml-3 ml-0"
          onClick={() => {
            const updatedCheckedFields = checkedFields.map(
              (item: CheckedFields) => ({
                ...item,
                checked: [],
              })
            );
            setCheckedFields(updatedCheckedFields);
            if (isClear) {
              setIsClear(false);
              setTimeout(() => {
                setIsClear(true);
              }, 50);
            } else {
              setIsClear(true);
            }
          }}
        >
          <MdDelete className="text-[20px] text-white" />
          <p className="text-white">წაშლა</p>
        </button>
      </div>
    </div>
  );
}
