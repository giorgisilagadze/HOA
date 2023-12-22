import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Admin() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-6">
      <h1 className="text-[20px] leading-6 text-[#717171]">
        გაიარეთ ავტორიზაცია გასაგრძელებლად
      </h1>
      <div className="w-[500px] relative">
        <input
          type="email"
          className="w-full py-2 pl-10 bg-slate-100 rounded-[5px]"
          placeholder="ელ.ფოსტა"
        />
        <MdOutlineEmail className="absolute top-3 left-2 text-[18px]" />
      </div>
      <div className="w-[500px] relative">
        <input
          type="password"
          className="w-full py-2 pl-10 bg-slate-100 rounded-[5px]"
          placeholder="პაროლი"
        />
        <RiLockPasswordFill className="absolute top-3 left-2 text-[18px]" />
      </div>
      <button className="w-[500px] py-2 bg-[#022FB0] text-white rounded-[5px] mt-3">
        შესვლა
      </button>
    </div>
  );
}
