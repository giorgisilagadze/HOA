import { TiArrowSortedDown } from "react-icons/ti";

import Filter from "@/components/filter/Filter";
import Card1 from "@/components/productCards/Card1";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import LoadingCard from "@/components/productCards/LoadingCard";
import { useRouter } from "next/router";
import PagePagination from "@/components/PagePagination";

export default function Cars() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<AllProducts | any>();
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(1);

  const route = useRouter();

  const { query }: any = route;

  const changePage = async (page: number) => {
    route.push(
      {
        pathname: "/cars",
        query: `page=${page}&per_page=20`,
      },
      undefined,
      { scroll: false }
    );
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
    <div className="w-full px-[56px] flex justify-center py-6">
      <div className="w-full max-w-[1328px] bg-white rounded-[30px] py-8 flex flex-col gap-[48px]">
        <div className="pl-[44px] pr-[56px]">
          <Filter />
        </div>
        <div className="w-full px-[56px] flex flex-col items-center gap-8  ">
          <PagePagination
            dataLength={products?.total}
            itemsPerPage={20}
            both={false}
            changePage={changePage}
          >
            <div className=" w-full flex flex-col gap-[18px]">
              <div className="flex flex-wrap gap-5">
                {isLoading
                  ? [
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20,
                    ].map((item) => <LoadingCard key={item} />)
                  : products?.data.map((item: Product) => (
                      <Card1 key={item.id} product={item} />
                    ))}
              </div>
            </div>
          </PagePagination>
        </div>

        {/* <div className=" mx-auto mt-[-24px] flex items-center gap-1">
          <TiArrowSortedDown
            className="text-[28px] text-[#022FB0] rotate-90 cursor-pointer select-none"
            onClick={() => {
              if (page !== 1) setPage(page - 1);
              ScrollToTop();
            }}
          />
          <p className="text-[#717171] underline">
            {page} / {Math.ceil(products && products.total / 20)}
          </p>
          <TiArrowSortedDown
            className="text-[28px] text-[#022FB0] -rotate-90 cursor-pointer select-none"
            onClick={() => {
              if (page !== Math.ceil(products.total / 20)) {
                setPage(page + 1);
                ScrollToTop();
              }
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
