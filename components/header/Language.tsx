import { BiSolidDownArrow } from "react-icons/bi";

import { useState } from "react";

export default function Language() {
  const [language, setLanguage] = useState("GE");
  const [isLangClicked, setIsLangCLicked] = useState(false);

  return (
    <div
      className="relative cursor-pointer bg-white hover:shadow-product duration-200 rounded-[30px]"
      onClick={() => setIsLangCLicked(!isLangClicked)}
    >
      <div className="flex items-center gap-1 lg:py-[8px] py-1 lg:px-4 px-2 rounded-[30px] border border-[#022FB0]">
        <p className="cursor-pointer text-[10px] leading-4 lg:text-[14px] lg:leading-[22px]">
          {language}
        </p>
        <BiSolidDownArrow
          className={`${
            isLangClicked && "rotate-180"
          } duration-200 text-[10px] lg:text-[14px] xl:text-[16px] text-[#022FB0]`}
        />
      </div>
      {isLangClicked && (
        <div className="py-2 px-2 flex flex-col gap-1 z-[99] absolute lg:top-10 top-8 bg-white rounded-[8px] w-full shadow-thin">
          {["GE", "EN"].map((item: string) => (
            <p
              onClick={() => setLanguage(item)}
              className="cursor-pointer text-[10px] leading-4 lg:text-[14px] lg:leading-[22px]"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
