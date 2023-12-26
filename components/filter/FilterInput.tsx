import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiCheckBold } from "react-icons/pi";

const countries: Country[] = [
  {
    id: 1,
    country: "ანდორა",
  },
  {
    id: 2,
    country: "ბელგია",
  },
  {
    id: 3,
    country: "კანადა",
  },
  {
    id: 4,
    country: "დანია",
  },
  {
    id: 5,
    country: "ინგლისი",
  },
  {
    id: 6,
    country: "საფრანგეთი",
  },
  {
    id: 7,
    country: "საქართველო",
  },
  {
    id: 8,
    country: "სომხეთი",
  },
  {
    id: 9,
    country: "თურქეთი",
  },
  {
    id: 10,
    country: "აზერბაიჯანი",
  },
  {
    id: 11,
    country: "იტალია",
  },
];

interface Prop {
  width: string;
  ml: string;
  border: string;
  title: string;
  filterFields: string[] | number[] | [];
}

export default function FilterInput({
  width,
  ml,
  border,
  title,
  filterFields,
}: Prop) {
  const [isClicked, setIsClicked] = useState(false);
  const [checked, setChecked] = useState<any>(["ქვეყანა"]);
  const [country, setCountry] = useState(countries);

  return (
    <div className={`w-${width} h-[38px] relative ml-${ml}`}>
      <div
        className={`w-full h-full py-[7px] pl-2 px-8 rounded-[4px] border border-[${border}] cursor-pointer`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <p className="text-[14px] leading-[22px] w-full overflow-x-auto">
          {title}
        </p>
      </div>
      <TiArrowSortedDown
        className={`text-[24px] text-blue-800 absolute top-[8px] right-2 cursor-pointer ${
          isClicked && "rotate-180"
        } duration-200`}
        onClick={() => setIsClicked(!isClicked)}
      />
      <div
        className={`${
          isClicked ? `h-[200px] py-1 px-1 border border-[${border}]` : "h-0"
        } bg-white absolute z-[99] top-[40px] rounded-[4px] left-0 w-full duration-100 overflow-y-auto`}
      >
        {isClicked && (
          <>
            <input
              type="text"
              className={`w-full border-b border-[${border}] rounded-[4px] outline-none text-[12px] leading-4 py-2 px-3`}
              placeholder="ძებნა"
              onChange={(e) => {
                e.preventDefault();
                setCountry(
                  countries.filter((item: Country) =>
                    item.country.includes(e.target.value)
                  )
                );
              }}
            />
            {filterFields.map((item) => (
              <div
                key={item}
                className={`p-2 border-b border-[#eee] rounded-[4px] flex items-center gap-2 cursor-pointer hover:opacity-60`}
                onClick={() => {
                  if (checked.includes(item)) {
                    const updatedChecked = checked.filter(
                      (each: string | number) => each !== item
                    );
                    setChecked(updatedChecked);
                  } else {
                    const clone = [...checked];
                    clone.push(item);
                    setChecked(clone);
                  }
                }}
              >
                <div
                  className={`w-3 h-3 rounded-[50%] border border-slate-300 flex justify-center items-center text-white text-[8px] ${
                    checked.includes(item) && "bg-[#022FB0] border-none"
                  }`}
                >
                  <PiCheckBold />
                </div>
                <p className="text-[14px] leading-4 ">{item}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
