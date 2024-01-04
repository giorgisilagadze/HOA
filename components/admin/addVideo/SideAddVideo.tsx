import { LiaTimesSolid } from "react-icons/lia";
import FileInput from "../addEdit/FileInput";

interface Prop {
  isSideAddVideoVisible: boolean;
  setIsSideAddVideoVisible: (isSideAddCarVisible: boolean) => void;
}

export default function SideAddVideo({
  isSideAddVideoVisible,
  setIsSideAddVideoVisible,
}: Prop) {
  return (
    <div
      className={`${
        isSideAddVideoVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
      } bg-[#00000092] top-0 left-0 z-[98] fixed`}
    >
      <div
        className={`${
          isSideAddVideoVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
        } top-0 left-0 z-[98] absolute`}
        onClick={() => setIsSideAddVideoVisible(false)}
      ></div>
      <div
        className={`${
          isSideAddVideoVisible ? "right-0" : "right-[-100%]"
        } w-[300px] h-[100vh] py-8 px-4 duration-300 bg-white fixed top-0 z-[99]`}
      >
        <LiaTimesSolid
          className={`cursor-pointer text-[20px] absolute top-4 ${
            isSideAddVideoVisible ? "right-4" : "right-[-16px]"
          }`}
          onClick={() => setIsSideAddVideoVisible(!isSideAddVideoVisible)}
        />
        <div
          className={`flex items-center gap-1 absolute top-4 ${
            isSideAddVideoVisible ? "left-4" : "right-[-16px]"
          }`}
        >
          <h1 className="text-[14px] leading-[22px]">დამატება</h1>
        </div>
        <div
          className={`absolute w-[90%] top-[50px] ${
            isSideAddVideoVisible ? "left-4" : "right-[-16px]"
          }`}
        >
          <FileInput isVideo={true} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                ვიდეოს ლინკი
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                ინდექსი
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
              />
            </div>
            <div className="w-full flex items-center gap-5">
              <button className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px]">
                შენახვა
              </button>
              <button className="rounded-[12px] bg-[red] px-3 py-3 text-white text-[14px] leading-[22px]">
                გასუფთავება
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
