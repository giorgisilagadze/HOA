import { RxCross2 } from "react-icons/rx";

interface Prop {
  isRequested: boolean;
  setIsRequested: (isRequested: boolean) => void;
}

export default function RequestPopUp({ isRequested, setIsRequested }: Prop) {
  return (
    <div className="bg-[#00000092] w-[100vw] h-[100vh] z-[99] fixed top-0 left-0 flex justify-end">
      <div
        className="w-[100%] h-[100%] absolute"
        onClick={() => {
          setIsRequested(false);
        }}
      ></div>
      <div className="w-[460px] h-[563px] bg-white rounded-tl-[20px] rounded-bl-[20px] z-[99]">
        <div className="w-full py-[18px] px-6 flex justify-between items-center">
          <h1 className="text-[24px] leading-[32px] text-[#022FB0]">
            მოითხოვე მანქანა
          </h1>
          <RxCross2
            className="text-[24px] text-[#022FB0] cursor-pointer"
            onClick={() => {
              setIsRequested(false);
            }}
          />
        </div>
        <hr className="w-full h-[1px] border-none bg-[#eee]" />
        <div className="pt-10 pb-6 px-6 flex flex-col gap-4 items-center">
          <input
            type="text"
            className="w-full p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input"
            placeholder="სახელი, გვარი"
          />
          <input
            type="text"
            className="w-full p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input"
            placeholder="ტელეფონის ნომერი"
          />
          <input
            type="text"
            className="w-full p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input"
            placeholder="სასურველი მანქანის მოდელი"
          />
          <textarea
            className="w-full h-[142px] p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input resize-none overflow-y-auto"
            placeholder="მოკლე აღწერა"
          />
          <button className="w-[286px] py-4 text-[#022FB0] border-none bg-[#EEEEEE] rounded-[12px] shadow-input hover:text-[#eee] hover:bg-[#022FB0] duration-200">
            მოთხოვნის გაგზავნა
          </button>
        </div>
      </div>
    </div>
  );
}
