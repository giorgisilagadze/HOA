import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import Language from "./Language";
import RequestPopUp from "./RequestPopUp";
import SideMenu from "./SideMenu";

export const nav: Nav[] = [
  {
    id: 1,
    title: "მთავარი",
    link: "/",
  },
  {
    id: 2,
    title: "ავტომობილები",
    link: "/cars",
  },
];

export default function Header() {
  const route = useRouter();
  const [page, setPage] = useState(route.asPath);
  const [isRequested, setIsRequested] = useState(false);

  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  useEffect(() => {
    setPage(route.pathname);
  }, [route.pathname]);

  return (
    <>
      <header className="w-full xl:px-[112px] px-8 lg:py-[22px] py-4 flex justify-between items-center bg-white">
        <RxHamburgerMenu
          className="text-[24px] lg:hidden"
          onClick={() => setIsSideMenuVisible(true)}
        />
        <div className="flex items-center xl:gap-[100px] gap-[30px]">
          <Link href="/">
            <img
              src="../images/logo.png"
              alt="logo"
              className="lg:w-[60px] cursor-pointer w-[46px]"
            />
          </Link>
          <div className="lg:flex gap-4 items-center hidden">
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
                  } cursor-pointer`}
                >
                  {item.title}
                </h6>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative w-[37%] hidden lg:block">
          <input
            type="text"
            className="w-full py-[12px] px-6 rounded-[44px] text-[14px] leading-5 shadow-thin border border-[#EEE] outline-none"
            placeholder="მოძებნე მანქანა სახელით ან კოდით"
          />
          <IoIosSearch className="absolute top-4 right-6 text-[blue]" />
        </div>
        <div className="flex items-center gap-2">
          <div
            className="border-none py-[9px] px-[13px] text-white bg-[#022FB0] rounded-[30px] lg:flex items-center gap-1 cursor-pointer hover:shadow-product duration-200 hidden "
            onClick={() => setIsRequested(true)}
          >
            <MdOutlineSupportAgent />
            <h6 className="text-[14px] leading-[22px]">მოითხოვე მანქანა</h6>
          </div>
          <Language />
        </div>
      </header>
      {isRequested && (
        <RequestPopUp
          isRequested={isRequested}
          setIsRequested={setIsRequested}
        />
      )}
      <SideMenu
        isSideMenuVisible={isSideMenuVisible}
        setIsSideMenuVisible={setIsSideMenuVisible}
        isRequested={isRequested}
        setIsRequested={setIsRequested}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
