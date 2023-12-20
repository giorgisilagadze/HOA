import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

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

export default function FilterInput() {
  const [isClicked, setIsClicked] = useState(false);
  const [checked, setChecked] = useState("ქვეყანა");
  const [country, setCountry] = useState(countries);
  return (
    <div className="w-[186px] h-[38px] relative ml-3">
      <div
        className="w-full h-full py-[7px] px-2 rounded-[4px] border border-[#EEE] cursor-pointer"
        onClick={() => setIsClicked(!isClicked)}
      >
        <p className="text-[14px] leading-[22px]">{checked}</p>
      </div>
      <TiArrowSortedDown
        className={`text-[24px] text-blue-800 absolute top-[8px] right-2 cursor-pointer ${
          isClicked && "rotate-180"
        } duration-200`}
        onClick={() => setIsClicked(!isClicked)}
      />
      <div
        className={`${
          isClicked ? "h-[200px] py-1 px-1 border border-[#EEE]" : "h-0"
        } bg-white absolute z-[99] top-[40px] rounded-[4px] left-0 w-full duration-100 overflow-y-auto`}
      >
        {isClicked && (
          <>
            <input
              type="text"
              className="w-full border-b border-[#eee] rounded-[4px] outline-none text-[12px] leading-4 py-2 px-3"
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
            {country.map((item: Country) => (
              <p
                key={item.id}
                className="text-[12px] leading-4 p-2 border-b border-[#eee] cursor-pointer hover:opacity-60"
                onClick={() => setChecked(item.country)}
              >
                {item.country}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
