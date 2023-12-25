import { TiArrowSortedDown } from "react-icons/ti";

import Filter from "@/components/filter/Filter";
import Card1 from "@/components/productCards/Card1";
import { useState } from "react";

export default function Cars() {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full px-[56px] flex justify-center py-6">
      <div className="w-full max-w-[1328px] bg-white rounded-[30px] py-8 flex flex-col gap-[48px]">
        <div className="pl-[44px] pr-[56px]">
          <Filter />
        </div>
        <div className="px-[56px] w-full flex flex-col gap-[18px]">
          <div className="flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item: number) => (
              <Card1 key={item} />
            ))}
          </div>
        </div>
        <div className=" mx-auto mt-[-24px] flex items-center gap-1">
          <TiArrowSortedDown
            className="text-[28px] text-[#022FB0] rotate-90 cursor-pointer select-none"
            onClick={() => {
              if (page !== 1) setPage(page - 1);
            }}
          />
          <p className="text-[#717171] underline">{page} / 20</p>
          <TiArrowSortedDown
            className="text-[28px] text-[#022FB0] -rotate-90 cursor-pointer select-none"
            onClick={() => {
              if (page !== 20) setPage(page + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
