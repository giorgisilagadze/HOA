import { GiExitDoor } from "react-icons/gi";

import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { PrimaryContext } from "@/utils/MainContext";
import { RxHamburgerMenu } from "react-icons/rx";
import SideAdminMenu from "./SideAdminMenu";

export const nav: AdminNav[] = [
  {
    id: 1,
    title: "დამატება/ჩასწორება",
    link: "/admin/add-edit",
  },
  {
    id: 2,
    title: "ფირმები და მოდელები",
    link: "/admin/brands",
  },
  {
    id: 3,
    title: "ვიდეოების დამატება",
    link: "/admin/add-videos",
  },
  {
    id: 4,
    title: "პროფილი",
    link: "/admin/profile",
  },
];

export default function NavBar({ children }: any) {
  const route = useRouter();
  const { setAdminToken } = useContext(PrimaryContext);

  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  const logOut = () => {
    route.push("/admin");
    setAdminToken(null);
    localStorage.clear();
  };
  return (
    <div>
      <div className="w-full h-[56px] px-5 flex justify-between bg-white items-center border-b border-slate-300">
        <div className="!w-[330px] h-full flex items-center gap-4 bg-white">
          <RxHamburgerMenu
            className="block lg1110:hidden text-[24px]"
            onClick={() => setIsSideMenuVisible(true)}
          />
          <img src="../images/logo.png" alt="logo" className="w-15 h-10" />
          <p className="text-[14px] leading-[22px]">HOA</p>
        </div>
        <div className="w-full h-[57px] flex justify-end items-center">
          <div
            className="p-2 rounded-[50%] hover:bg-slate-300 duration-200 cursor-pointer"
            onClick={logOut}
          >
            <GiExitDoor className="text-[24px]" />
          </div>
        </div>
      </div>
      <div className="flex items-start w-full h-full">
        <div className="w-[290px] h-[100vh] px-5 py-4  flex-col gap-2 bg-white border-r border-slate-300 sticky top-0 hidden lg1110:flex">
          {nav.map((item: AdminNav) => (
            <Link key={item.id} href={item.link}>
              <div className="w-full p-2 rounded-[10px] cursor-pointer hover:bg-[#022FB0] hover:text-white duration-200">
                <p className="text-[14px] leading-[22px]">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        {children}
      </div>
      <SideAdminMenu
        isSideMenuVisible={isSideMenuVisible}
        setIsSideMenuVisible={setIsSideMenuVisible}
      />
    </div>
  );
}
