import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { nav } from "./Header";
import Link from "next/link";

import { contact } from "../footer/Footer";
import { phoneNumbs } from "../footer/Footer";

interface Prop {
  isSideMenuVisible: boolean;
  setIsSideMenuVisible: (isSideMenuVisible: boolean) => void;
  isRequested: boolean;
  setIsRequested: (isRequested: boolean) => void;
  page: string;
  setPage: (page: string) => void;
}

export default function SideMenu({
  isSideMenuVisible,
  setIsSideMenuVisible,
  isRequested,
  setIsRequested,
  page,
  setPage,
}: Prop) {
  return (
    <div
      className={`${
        isSideMenuVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
      } bg-[#00000092] top-0 left-0 z-[98] fixed`}
    >
      <div
        className={`${
          isSideMenuVisible ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
        } top-0 left-0 z-[98] absolute`}
        onClick={() => setIsSideMenuVisible(false)}
      ></div>
      <div
        className={`${
          isSideMenuVisible ? "top-0 left-0" : "top-0 left-[-100%]"
        } w-[250px] h-[100vh] py-8 px-4 duration-300 bg-white fixed top-0 left-0 z-[99]`}
      >
        <LiaTimesSolid
          className={`cursor-pointer text-[20px] absolute top-4 ${
            isSideMenuVisible ? "right-4" : "left-[-16px]"
          }`}
          onClick={() => setIsSideMenuVisible(!isSideMenuVisible)}
        />
        <div
          className={`border-none py-[2px] px-[6px] absolute top-4 ${
            isSideMenuVisible ? "left-4" : "left-[-16px]"
          }  text-white bg-[#022FB0] rounded-[30px] flex items-center gap-1 cursor-pointer hover:shadow-product duration-200`}
          onClick={() => setIsRequested(true)}
        >
          <MdOutlineSupportAgent />
          <h6 className="text-[10px] leading-[16px]">მოითხოვე მანქანა</h6>
        </div>

        <input
          type="text"
          className={`w-[80%] py-[4px] px-2 rounded-[20px] text-[8px] leading-4 placeholder:text-[8px] shadow-thin border border-[#EEE] outline-none absolute top-[45px] ${
            isSideMenuVisible ? "left-[14px]" : "left-[-16px]"
          }`}
          placeholder="მოძებნე მანქანა სახელით ან კოდით"
        />
        <div
          className={`flex gap-4 items-center absolute top-[90px] ${
            isSideMenuVisible ? "left-4" : "left-[-16px]"
          }`}
        >
          {nav.map((item: Nav) => (
            <Link
              href={item.link}
              key={item.id}
              onClick={() => setPage(item.link)}
            >
              <h6
                className={`${
                  page == item.link
                    ? "border-b-[2px] border-[#022FB0] pb-1"
                    : "pb-[6px]"
                } cursor-pointer text-[10px] leading-4`}
              >
                {item.title}
              </h6>
            </Link>
          ))}
        </div>
        <div
          className={`w-[80%]  py-2 flex flex-col gap-2 absolute top-[120px] ${
            isSideMenuVisible ? "left-4" : "left-[-16px]"
          }`}
        >
          <p className="text-[10px] leading-[16px] text-[#717171]">
            კითხვების არსებობის შემთხვევაში, დაგვიკავშირდით:
          </p>
          {contact.map((item: Contact) => (
            <div
              className="flex items-center text-[10px] gap-2 text-[#4960A4]"
              key={item.id}
            >
              {item.icon}
              <p className="text-[10px] leading-[16px]">{item.text}</p>
            </div>
          ))}
          <div className="flex items-center gap-3">
            {phoneNumbs.map((item: PhoneNumb) => (
              <p
                key={item.id}
                className="text-[10px] leading-[16px] text-[#4960A4] underline"
              >
                {item.number}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
