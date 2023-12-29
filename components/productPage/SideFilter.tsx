import { PrimaryContext } from "@/utils/MainContext";
import { useContext } from "react";
import { FaFilter } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import Filter from "../filter/Filter";

export default function SideFilter() {
  const { isSideFilterVisible, setIsSideFilterVisible } =
    useContext(PrimaryContext);
  return (
    <div
      className={`${
        isSideFilterVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
      } bg-[#00000092] top-0 left-0 z-[98] fixed`}
    >
      <div
        className={`${
          isSideFilterVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
        } top-0 left-0 z-[98] absolute`}
        onClick={() => setIsSideFilterVisible(false)}
      ></div>
      <div
        className={`${
          isSideFilterVisible ? "right-0" : "right-[-100%]"
        } w-[250px] h-[100vh] py-8 px-4 duration-300 bg-white fixed top-0 z-[99]`}
      >
        <LiaTimesSolid
          className={`cursor-pointer text-[20px] absolute top-4 ${
            isSideFilterVisible ? "right-4" : "right-[-16px]"
          }`}
          onClick={() => setIsSideFilterVisible(!isSideFilterVisible)}
        />
        <div
          className={`flex items-center gap-1 absolute top-4 ${
            isSideFilterVisible ? "left-4" : "right-[-16px]"
          }`}
        >
          <FaFilter className="text-[#022FB0] text-[12px]" />
          <h1 className="text-[14px] leading-[22px]">ფილტრი</h1>
        </div>
        <div
          className={`absolute top-[50px] ${
            isSideFilterVisible ? "left-4" : "right-[-16px]"
          }`}
        >
          <Filter />
        </div>
      </div>
    </div>
  );
}
