import { LiaTimesSolid } from "react-icons/lia";
import { nav } from "./NavBar";
import Link from "next/link";

interface Prop {
  isSideMenuVisible: boolean;
  setIsSideMenuVisible: (isSideMenuVisible: boolean) => void;
}

export default function SideAdminMenu({
  isSideMenuVisible,
  setIsSideMenuVisible,
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
          className={`absolute w-[85%] top-12 ${
            isSideMenuVisible ? "left-4" : "left-[-16px]"
          }`}
        >
          {nav.map((item: AdminNav) => (
            <Link key={item.id} href={item.link}>
              <div className="w-full p-2 rounded-[10px] cursor-pointer hover:bg-[#022FB0] hover:text-white duration-200">
                <p className="text-[14px] leading-[22px]">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
