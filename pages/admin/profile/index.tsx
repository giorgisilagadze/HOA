import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

export default function Brands() {
  return (
    <div className="custom-width w-full h-[100%] py-8 sm:px-0 px-8 flex flex-col items-center">
      <div className="sm:w-[70%] w-full rounded-[12px] bg-white p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img src="../images/logo.png" alt="logo" className="w-10 h-10" />
            <p className="text-[#787d87] text-[14px] leading-[22px]">gio</p>
          </div>
          <button className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px]">
            შენახვა
          </button>
        </div>
        <hr className="w-full h-[1px] border-none bg-[#eee] mt-2" />
        <div className="w-full mt-2 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-[#787d87] text-[14px] leading-[22px]">სახელი</p>
            <div className="w-full relative">
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] pl-4 pr-2 outline-none"
              />
              <FaUser className="absolute top-3 left-3" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#787d87] text-[14px] leading-[22px]">
              ელ.ფოსტა
            </p>
            <div className="w-full relative">
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] pl-4 pr-2 outline-none"
              />
              <MdEmail className="absolute top-3 left-3" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#787d87] text-[14px] leading-[22px]">პაროლი</p>
            <div className="w-full relative">
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] pl-4 pr-2 outline-none"
              />
              <RiLockPasswordFill className="absolute top-3 left-3" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#787d87] text-[14px] leading-[22px]">
              გაიმეორეთ პაროლი
            </p>
            <div className="w-full relative">
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] pl-4 pr-2 outline-none"
              />
              <RiLockPasswordFill className="absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
