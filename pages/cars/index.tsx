import { TiArrowSortedDown } from "react-icons/ti";

import Filter from "@/components/filter/Filter";
import Card1 from "@/components/productCards/Card1";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import LoadingCard from "@/components/productCards/LoadingCard";
import { useRouter } from "next/router";
import PagePagination from "@/components/PagePagination";
import { PrimaryContext } from "@/utils/MainContext";
import { FaFilter } from "react-icons/fa";
import SideFilter from "@/components/productPage/SideFilter";

export default function Cars() {
  const {
    filteredCars,
    setFilteredCars,
    isLoading,
    setIsLoading,
    handleFilter,
    isSideFilterVisible,
    setIsSideFilterVisible,
  }: any = useContext(PrimaryContext);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<AllProducts | any>();

  const ref = useRef(1);

  const route = useRouter();

  const { query }: any = route;

  const changePage = async (page: number) => {
    // route.push(
    //   {
    //     pathname: "/cars",
    //     query: `page=${page}&per_page=20`,
    //   },
    //   undefined,
    //   { scroll: false }
    // );
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/front/car?page=${page}&per_page=20`
      );
      const data = response.data;
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    changePage(page);
    // }
    // else {
    //   ref.current += 1;
    //   console.log(query.page);
    //   (async () => {
    //     setIsLoading(true);
    //     try {
    //       const response = await axios.get(
    //         `${process.env.NEXT_PUBLIC_API_URL}/front/car?page=${query.page}&per_page=20`
    //       );
    //       const data = response.data;
    //       setProducts(data);
    //       setIsLoading(false);
    //       // setPage(query.page);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   })();
    //   // setPage(query.page);
    // }
  }, [page]);

  return (
    <div className="w-full lg:px-[56px] px-4 flex justify-center py-6">
      <div className="w-full xl:max-w-[1328px] lg:max-w-[950px] bg-white rounded-[30px] lg:py-8 py-4 flex flex-col lg:gap-[48px] gap-4">
        <div className="xl:pl-[44px] xl:pr-[56px] px-4 hidden lg:block">
          <Filter />
        </div>
        <div className="flex w-full justify-end lg:hidden px-4">
          <div
            className="rounded-[27px] lg:hidden flex justify-center items-center gap-1 border bg-[#022FB0] text-white lg:py-2 lg:px-[22px] py-1 px-1 cursor-pointer hover:bg-[#022FB0] hover:text-white duration-200"
            onClick={() => setIsSideFilterVisible(true)}
          >
            <FaFilter className="text-[12px]" />
          </div>
        </div>
        <div className="w-full xl:px-[56px] px-4 flex flex-col items-center gap-8  ">
          <PagePagination
            dataLength={
              filteredCars.length !== 0 ? filteredCars.total : products?.total
            }
            itemsPerPage={20}
            both={false}
            changePage={changePage}
          >
            <div className=" w-full flex flex-col gap-[18px]">
              <div className="flex flex-wrap gap-5">
                {isLoading ? (
                  [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20,
                  ].map((item) => <LoadingCard key={item} />)
                ) : filteredCars.length !== 0 ? (
                  filteredCars.total !== 0 ? (
                    filteredCars?.data?.map((item: Product) => (
                      <Card1 key={item.id} product={item} />
                    ))
                  ) : (
                    <div className="h-[500px] ">მონაცემები არ მოიძებნა</div>
                  )
                ) : (
                  products?.data.map((item: Product) => (
                    <Card1 key={item.id} product={item} />
                  ))
                )}
              </div>
            </div>
          </PagePagination>
        </div>
      </div>
      <SideFilter />
    </div>
  );
}
