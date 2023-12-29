import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const contact: Contact[] = [
  {
    id: 1,
    text: "#HoaCars",
    icon: <FaTiktok className="lg:text-[24px] text-[10px]" />,
  },
  {
    id: 2,
    text: "#HoaCars __ 579 029 029",
    icon: <FaWhatsapp className="lg:text-[28px] text-[10px]" />,
  },
  {
    id: 3,
    text: "#HoaCars",
    icon: <FaFacebookF className="lg:text-[24px] text-[10px]" />,
  },
];

export const phoneNumbs: PhoneNumb[] = [
  {
    id: 1,
    number: "2 11 11 50",
  },
  {
    id: 2,
    number: "579 029 029",
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6 pt-6 pb-2 bg-[#FBFBFA] justify-center items-center">
      <img
        src="../images/logo.png"
        alt="logo"
        className="lg:w-[97px] w-[50px]"
      />
      <div className="flex items-center gap-[26px]">
        {contact.map((item: Contact) => (
          <div className="flex flex-col gap-1 items-center" key={item.id}>
            {item.icon}
            <p className="text-[10px] leading-[16px] lg:text-[14px] lg:leading-[22px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6">
        {phoneNumbs.map((item: PhoneNumb) => (
          <div className="flex items-center gap-2" key={item.id}>
            <FaPhoneAlt className="text-[#022FB0] text-[14px]" />
            <p
              key={item.id}
              className="text-[14px] leading-[22px] text-[#4960A4] underline cursor-pointer"
            >
              {item.number}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <hr className="sm:w-[520px] w-full h-[1px] border-none bg-[#BBB]" />
        <div className="flex items-center gap-1 justify-center">
          <p className="text-[14px] leading-[22px]">All rights are reserved.</p>
          <div className="flex items-center">
            <img src="../images/ph_copyright.svg" alt="rights" />
            <p className="text-[14px] leading-[22px]">2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
