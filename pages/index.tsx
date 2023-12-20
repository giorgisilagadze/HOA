import { IoEyeOutline } from "react-icons/io5";

import Filter from "@/components/filter/Filter";
import Slider from "@/components/homePage/Slider";
import Card1 from "@/components/productCards/Card1";
import Card2 from "@/components/productCards/Card2";

export default function Home() {
  return (
    <main className="pb-6">
      <Slider />
      <div className="w-full px-[56px] flex justify-center mt-[-100px] relative z-[99]">
        <div className="w-full max-w-[1328px] bg-white rounded-[30px] py-8 flex flex-col gap-[42px]">
          <div className="pl-[44px] pr-[56px]">
            <Filter />
          </div>
          <div className="px-[56px] w-full flex flex-col gap-[18px]">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[28px] leading-[40px]">
                აღმოაჩინე ავტომობილი
              </h1>
              <div className="rounded-[27px] flex justify-center items-center gap-1 border border-[#022FB0] text-[#022FB0] py-2 px-[22px] cursor-pointer hover:bg-[#022FB0] hover:text-white duration-200">
                <IoEyeOutline className="text-[20px]" />
                <p className="text-[14px] leading-[22px]">მეტის ნახვა</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
                <Card1 key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6">
        <div className="w-full max-w-[1328px] bg-white rounded-[30px] py-6 flex flex-col gap-[18px] px-[56px]">
          <h1 className="text-[28px] leading-[40px]">პოპულარული</h1>
          <div className="flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6].map((item: number) => (
              <Card2 key={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
