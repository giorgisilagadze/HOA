import { FaFilter } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import AddCar from "./AddCar";

interface Prop {
  isSideAddCarVisible: boolean;
  setIsSideAddCarVisible: (isSideAddCarVisible: boolean) => void;
}

export default function SideAddCar({
  isSideAddCarVisible,
  setIsSideAddCarVisible,
}: Prop) {
  return (
    <div
      className={`${
        isSideAddCarVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
      } bg-[#00000092] top-0 left-0 z-[98] fixed`}
    >
      <div
        className={`${
          isSideAddCarVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
        } top-0 left-0 z-[98] absolute`}
        onClick={() => setIsSideAddCarVisible(false)}
      ></div>
      <div
        className={`${
          isSideAddCarVisible ? "right-0" : "right-[-100%]"
        } w-[300px] h-[100vh] py-8 px-4 duration-300 bg-white fixed top-0 z-[99]`}
      >
        <LiaTimesSolid
          className={`cursor-pointer text-[20px] absolute top-4 ${
            isSideAddCarVisible ? "right-4" : "right-[-16px]"
          }`}
          onClick={() => setIsSideAddCarVisible(!isSideAddCarVisible)}
        />
        <div
          className={`flex items-center gap-1 absolute top-4 ${
            isSideAddCarVisible ? "left-4" : "right-[-16px]"
          }`}
        >
          <h1 className="text-[14px] leading-[22px]">დამატება</h1>
        </div>
        <div
          className={`absolute w-[90%] top-[50px] ${
            isSideAddCarVisible ? "left-4" : "right-[-16px]"
          }`}
        >
          <AddCar />
        </div>
      </div>
    </div>
  );
}
