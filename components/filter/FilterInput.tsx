import { useContext, useEffect, useRef, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiCheckBold } from "react-icons/pi";
import { PrimaryContext } from "@/utils/MainContext";

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
  id: number;
  filterFields: string[] | any;
  isClear: boolean;
  setIsClear: (isClear: boolean) => void;
  clickedFilter: number | null;
  setClickedFilter: (clickedFilter: number | null) => void;
}

export default function FilterInput({
  width,
  ml,
  border,
  title,
  id,
  filterFields,
  isClear,
  setIsClear,
  clickedFilter,
  setClickedFilter,
}: Prop) {
  const { checkedFields, setCheckedFields }: any = useContext(PrimaryContext);
  const [info, setInfo] = useState<string[] | [] | undefined>();
  const [inputFromVal, setInputFromVal] = useState("");
  const [inputToVal, setInputToVal] = useState("");
  const [divHeight, setDivHeight] = useState<number>(0);

  const divRef: any = useRef();

  useEffect(() => {
    setInfo(filterFields);
    if (divRef.current) {
      setDivHeight(divRef.current.clientHeight);
    }
  }, [clickedFilter]);

  useEffect(() => {
    if (isClear) setInputFromVal("");
    setInputToVal("");
  }, [isClear]);

  return (
    <div className={`w-${width} h-[38px] relative ml-${ml} select-none`}>
      <div
        className={`w-full h-full py-[7px] pl-2 px-8 rounded-[4px] border border-[${border}] cursor-pointer`}
        onClick={() => {
          if (clickedFilter === id) {
            setClickedFilter(null);
          } else {
            setClickedFilter(id);
          }
        }}
      >
        <p className="text-[14px] leading-[22px] w-full overflow-x-auto">
          {title}
        </p>
      </div>
      <TiArrowSortedDown
        className={`text-[24px] text-blue-800 absolute top-[8px] right-2 cursor-pointer ${
          clickedFilter === id && "rotate-180"
        } duration-200`}
        onClick={() => {
          if (clickedFilter === id) {
            setClickedFilter(null);
          } else {
            setClickedFilter(id);
          }
        }}
      />
      <div
        className={`${
          clickedFilter === id ? ` py-1 px-1 border border-[${border}]` : "h-0"
        } bg-white absolute z-[99] top-[40px] rounded-[4px] left-0 w-full duration-100 overflow-y-auto`}
        style={{
          height: clickedFilter == id ? `${divHeight + 15}px` : "0px",
        }}
      >
        {clickedFilter === id &&
          (title == "წელი" || title == "ფასი" || title == "გარბენი" ? (
            <div
              className="w-full px-1 flex items-center gap-2 z-[97]"
              ref={divRef}
            >
              <div className="w-[48%] flex flex-col items-start gap-1">
                <p className="text-[12px]">დან</p>
                <input
                  type="number"
                  className={`w-full border border-[#EEE] rounded-[4px] outline-none text-[12px] leading-4 py-2 px-3`}
                  placeholder="ძებნა"
                  value={inputFromVal}
                  onChange={(e) => {
                    const updatedCheckedFields = checkedFields.map(
                      (field: CheckedFields) => {
                        if (field?.title === title) {
                          const updatedField = { ...field };
                          updatedField.checked[0] = e.target.value;
                          return updatedField;
                        } else {
                          return field;
                        }
                      }
                    );
                    setInputFromVal(e.target.value);
                    setCheckedFields(updatedCheckedFields);
                  }}
                />
              </div>
              <div className="w-[48%] flex flex-col items-end gap-1">
                <p className="text-[12px]">მდე</p>
                <input
                  type="number"
                  className={`w-full border border-[#EEE] rounded-[4px] outline-none text-[12px] leading-4 py-2 px-3`}
                  placeholder="ძებნა"
                  value={inputToVal}
                  onChange={(e) => {
                    e.preventDefault();
                    const updatedCheckedFields = checkedFields.map(
                      (field: CheckedFields) => {
                        if (field?.title === title) {
                          const updatedField = { ...field };
                          updatedField.checked[1] = e.target.value;
                          return updatedField;
                        } else {
                          return field;
                        }
                      }
                    );
                    setInputToVal(e.target.value);
                    setCheckedFields(updatedCheckedFields);
                  }}
                />
              </div>
            </div>
          ) : (
            <div ref={divRef} className="h-[190px] z-[99]">
              <input
                type="text"
                className={`w-full border-b border-[${border}] rounded-[4px] outline-none text-[12px] leading-4 py-2 px-3`}
                placeholder="ძებნა"
                onChange={(e) => {
                  e.preventDefault();
                  setInfo(
                    (filterFields as string[]).filter((item: string) =>
                      item.includes(e.target.value)
                    )
                  );
                }}
              />
              {info?.map((item) => (
                <div
                  key={item}
                  className={`p-2 border-b border-[#eee] rounded-[4px] flex items-center gap-2 cursor-pointer hover:opacity-60`}
                  onClick={() => {
                    const updatedCheckedFields = checkedFields.map(
                      (field: CheckedFields) => {
                        if (field?.title === title) {
                          const updatedField = { ...field };
                          if (field?.checked.includes(item)) {
                            updatedField.checked = updatedField.checked.filter(
                              (checkedItem: any) => checkedItem !== item
                            );
                          } else {
                            updatedField.checked.push(item);
                          }
                          return updatedField;
                        } else {
                          return field;
                        }
                      }
                    );

                    setCheckedFields(updatedCheckedFields);
                  }}
                >
                  <div
                    className={`w-3 h-3 rounded-[50%] border border-slate-300 flex justify-center items-center text-white text-[8px] ${
                      checkedFields.some(
                        (field: CheckedFields) =>
                          field?.title == title && field?.checked.includes(item)
                      ) && "bg-[#022FB0] border-none"
                    }`}
                  >
                    <PiCheckBold />
                  </div>
                  <p className="text-[14px] leading-4 ">{item}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
