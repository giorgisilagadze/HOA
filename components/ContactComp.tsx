import { FaPhoneAlt } from "react-icons/fa";
import { contact } from "./footer/Footer";
import { phoneNumbs } from "./footer/Footer";
import { useState } from "react";

export default function ContentComp() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="fixed top-[700px] right-[28px] z-[99] hidden lg:block"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" w-[56px] h-[56px] rounded-[50%] bg-[#D9D9D9] text-[#022FB0] flex justify-center items-center hover:bg-[#022FB0] hover:text-white duration-200 cursor-pointer">
        <FaPhoneAlt className="text-[28px]" />
      </div>
      <div
        className={`absolute w-[300px] top-[-160px] left-[-275px] flex items-end ${
          isHovered ? "h-[190px] opacity-100" : "h-0 opacity-0"
        } duration-200`}
      >
        {isHovered && (
          <>
            <div className="w-[90%] h-full bg-[#D9D9D9]  rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[5px] py-2 px-3 flex flex-col gap-2">
              <p className="text-[14px] leading-[22px] text-[#717171]">
                კითხვების არსებობის შემთხვევაში, დაგვიკავშირდით:
              </p>
              {contact.map((item: Contact) => (
                <div
                  className="flex items-center gap-2 text-[#4960A4]"
                  key={item.id}
                >
                  {item.icon}
                  <p className="text-[14px] leading-[22px]">{item.text}</p>
                </div>
              ))}
              <div className="flex items-center gap-3">
                {phoneNumbs.map((item: PhoneNumb) => (
                  <p
                    key={item.id}
                    className="text-[14px] leading-[22px] text-[#4960A4]"
                  >
                    {item.number}
                  </p>
                ))}
              </div>
            </div>
            <div className="arrow-right"></div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
