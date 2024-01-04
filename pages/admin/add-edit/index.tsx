import PagePagination from "@/components/PagePagination";
import AddCar from "@/components/admin/addEdit/AddCar";
import CarComp from "@/components/admin/addEdit/CarComp";
import FileInput from "@/components/admin/addEdit/FileInput";
import SideAddCar from "@/components/admin/addEdit/SideAddCar";
import FilterInput from "@/components/filter/FilterInput";
import axiosClient from "@/utils/AxiosClients";
import { PrimaryContext } from "@/utils/MainContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Add() {
  const { setIsLoading, isLoading } = useContext(PrimaryContext);
  const [page, setPage] = useState(1);
  const [adminProducts, setAdminProducts] = useState<AllProducts | any>();
  const [isSideAddCarVisible, setIsSideAddCarVisible] = useState(false);

  const changePage = async (page: number) => {
    setIsLoading(true);

    try {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/car?page=${page}&per_page=20`
      );
      const data = response.data;
      setAdminProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    changePage(page);
  }, [page]);
  return (
    <div
      className={`custom-width w-full py-[30px] px-8 flex items-start gap-5`}
    >
      <div className="sm:w-[65%] w-full flex flex-col gap-7">
        <div className="w-full flex items-center">
          <input
            type="text"
            className="w-[95%] p-2 bg-white rounded-tl-[5px] rounded-bl-[5px] outline-none"
            placeholder="ძებნა(ფირმა, მოდელი, კოდი)"
          />
          <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#022FB0] text-white text-[20px] rounded-tr-[5px] rounded-br-[5px]">
            <IoIosSearch />
          </div>
        </div>
        <button
          className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px] sm:hidden
        "
          onClick={() => setIsSideAddCarVisible(true)}
        >
          მანქანის დამატება
        </button>
        <PagePagination
          dataLength={adminProducts?.total}
          itemsPerPage={20}
          both={true}
          adminChangePage={changePage}
        >
          <div className="flex flex-col gap-4">
            {isLoading
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <div
                    className="w-full h-[64px] animated-background"
                    key={item}
                  ></div>
                ))
              : adminProducts?.data?.map((item: Product) => (
                  <CarComp key={item.id} car={item} />
                ))}
          </div>
        </PagePagination>
      </div>
      <div className="w-[35%] h-[700px] rounded-[12px] bg-white p-5 overflow-y-auto flex-col gap-2 hidden sm:flex">
        <AddCar />
      </div>
      <SideAddCar
        isSideAddCarVisible={isSideAddCarVisible}
        setIsSideAddCarVisible={setIsSideAddCarVisible}
      />
    </div>
  );
}
