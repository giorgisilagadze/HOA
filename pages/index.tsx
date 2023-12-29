import { IoEyeOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

import Filter from "@/components/filter/Filter";
import Slider from "@/components/homePage/Slider";
import Card1 from "@/components/productCards/Card1";
import Card2 from "@/components/productCards/Card2";
import axios from "axios";
import Link from "next/link";
import { useContext } from "react";
import { PrimaryContext } from "@/utils/MainContext";
import SideFilter from "@/components/productPage/SideFilter";

interface Prop {
  products: AllProducts;
}

export default function Home({ products }: Prop) {
  const { isSideFilterVisible, setIsSideFilterVisible } =
    useContext(PrimaryContext);

  return (
    <main className="pb-6">
      <Slider />
      <div className="w-full xl:px-[56px] px-4 flex justify-center mt-[-100px] relative z-[97]">
        <div className="w-full xl:max-w-[1328px] lg:max-w-[1020px] bg-white rounded-[30px] lg:py-8 py-4 flex flex-col gap-[42px]">
          <div className="pl-[44px] pr-[56px] hidden lg:block">
            <Filter />
          </div>
          <div className="lg:px-[56px] px-4 w-full flex flex-col xl:gap-[18px] gap-[10px]">
            <div className="w-full flex justify-between items-center">
              <h1 className="lg:text-[28px] lg:eading-[40px] text-[14px] leading-[22px] sm:text-[20px] sm:leading-8">
                აღმოაჩინე ავტომობილი
              </h1>
              <div className="flex items-center gap-2">
                <Link href="/cars">
                  <div className="rounded-[27px] flex justify-center items-center gap-1 border border-[#022FB0] text-[#022FB0] lg:py-2 lg:px-[22px] py-1 px-1 cursor-pointer hover:bg-[#022FB0] hover:text-white duration-200">
                    <IoEyeOutline className="lg:text-[20px] text-[12px]" />
                    <p className="text-[14px] leading-[22px] hidden lg:block">
                      მეტის ნახვა
                    </p>
                  </div>
                </Link>
                <div
                  className="rounded-[27px] lg:hidden flex justify-center items-center gap-1 border bg-[#022FB0] text-white lg:py-2 lg:px-[22px] py-1 px-1 cursor-pointer hover:bg-[#022FB0] hover:text-white duration-200"
                  onClick={() => setIsSideFilterVisible(true)}
                >
                  <FaFilter className="text-[12px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {products?.data?.slice(0, 8).map((item: Product) => (
                <Card1 key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 px-4 xl:px-[56px]">
        <div className="w-full xl:max-w-[1328px] lg:max-w-[1020px] bg-white rounded-[30px] py-4 lg:py-6 flex flex-col gap-[18px] px-[16px] lg:px-[56px]">
          <h1 className="lg:text-[28px] lg:eading-[40px] text-[14px] leading-[22px] sm:text-[20px] sm:leading-8">
            პოპულარული
          </h1>
          <div className="flex flex-wrap gap-5">
            {products?.data?.slice(0, 6).map((item: Product) => (
              <Card2 key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <SideFilter />
    </main>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/front/car`
  );
  const data = response.data;

  return {
    props: {
      products: data,
    },
  };
}
