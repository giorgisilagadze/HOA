import { RxCross2 } from "react-icons/rx";
import FileInput from "../admin/addEdit/FileInput";
import { FormEvent } from "react";
import axios from "axios";
import { successToast } from "../alerts";

interface Prop {
  isRequested: boolean;
  setIsRequested: (isRequested: boolean) => void;
}

export default function RequestPopUp({ isRequested, setIsRequested }: Prop) {
  const handleReq = async (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/front/customerQuestion`,
        formData
      );
      successToast("მოთხოვნა წარმატებით გაიგზავნა");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#00000092] w-[100vw] h-[100vh] z-[99] fixed top-0 left-0 flex justify-end">
      <div
        className="w-[100%] h-[100%] absolute"
        onClick={() => {
          setIsRequested(false);
        }}
      ></div>
      <div className="w-[460px] h-[750px] py-5 overflow-y-auto bg-white rounded-tl-[20px] rounded-bl-[20px] z-[99]">
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
        <form onSubmit={handleReq} encType="multipart/form-data">
          <div className="pt-10 pb-6 px-6 flex flex-col gap-4 items-center">
            <FileInput isVideo={false} reqName={"imgs"} />
            <input
              type="text"
              className="w-full p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input"
              placeholder="სახელი, გვარი"
              name="name"
            />
            <input
              type="email"
              className="w-full p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input"
              placeholder="ელ.ფოსტა"
              name="email"
            />
            <input
              type="text"
              className="w-full p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input"
              placeholder="ტელეფონის ნომერი"
              name="phone"
            />

            <textarea
              className="w-full h-[142px] p-4 border-none outline-none bg-[#EEEEEE] rounded-[12px] shadow-input resize-none overflow-y-auto"
              placeholder="მოკლე აღწერა"
              name="description"
            />
            <button
              type="submit"
              className="w-[286px] py-4 text-[#022FB0] border-none bg-[#EEEEEE] rounded-[12px] shadow-input hover:text-[#eee] hover:bg-[#022FB0] duration-200"
            >
              მოთხოვნის გაგზავნა
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
