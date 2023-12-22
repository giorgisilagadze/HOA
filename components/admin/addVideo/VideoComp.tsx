import { RiDeleteBin6Line } from "react-icons/ri";

export default function ViodeComp() {
  return (
    <div className="w-full rounded-[5px] bg-white py-3 px-3 flex justify-between items-center">
      <p className="text-[#9CA3AF]">
        aasnlkanfklanflkanfklansflknaslkfnalkfnalkfnklasfnlkanfskl
      </p>
      <div className="w-8 h-8 rounded-[5px] bg-[red] text-white cursor-pointer flex justify-center items-center">
        <RiDeleteBin6Line className="text-[16px]" />
      </div>
    </div>
  );
}
