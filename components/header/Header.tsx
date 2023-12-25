import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import Language from "./Language";
import RequestPopUp from "./RequestPopUp";

const nav: Nav[] = [
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

  useEffect(() => {
    setPage(route.asPath);
  }, [route.asPath]);

  return (
    <>
      <header className="w-full px-[112px] py-4 flex justify-between items-center bg-white">
        <div className="flex items-center gap-[100px]">
          <Link href="/">
            <img
              src="../images/logo.png"
              alt="logo"
              className="w-[60px] cursor-pointer"
            />
          </Link>
          <div className="flex gap-4 items-center">
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
        <div className="relative w-[37%]">
          <input
            type="text"
            className="w-full py-[9px] px-6 rounded-[44px] text-[14px] leading-5 shadow-thin border border-[#EEE] outline-none"
            placeholder="მოძებნე მანქანა სახელით ან კოდით"
          />
          <IoIosSearch className="absolute top-3 right-6 text-[blue]" />
        </div>
        <div className="flex items-center gap-2">
          <div
            className="border-none py-[9px] px-[13px] text-white bg-[#022FB0] rounded-[30px] flex items-center gap-1 cursor-pointer hover:shadow-product duration-200"
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
    </>
  );
}
