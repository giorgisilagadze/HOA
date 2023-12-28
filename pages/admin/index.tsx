import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PrimaryContext } from "@/utils/MainContext";

const schema = yup
  .object({
    email: yup
      .string()
      .required("მიუთითეთ მეილი")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
        "მიუთითეთ ვალიდური მეილი"
      ),
    password: yup.string().required("პაროლი ცარიელია"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function Admin() {
  const { adminToken, setAdminToken } = useContext(PrimaryContext);

  const [logInError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const route = useRouter();

  useEffect(() => {
    adminToken !== null && route.push("admin/add-edit");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData, e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/adminAuth/loginAdmin`,
        {
          email: data.email,
          password: data.password,
        }
      );
      setLoginError("");
      route.push("/admin/add-edit");
      setAdminToken(response.data.access_token);
      localStorage.setItem("adminToken", response.data.access_token);
    } catch (err: any) {
      console.log(err, "errr");
      setLoginError("მეილი ან პაროლი არასწორია");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-6">
        <h1 className="text-[20px] leading-6 text-[#717171]">
          გაიარეთ ავტორიზაცია გასაგრძელებლად
        </h1>
        <div className="w-[500px] relative">
          <input
            type="email"
            className={`w-full py-2 pl-10 bg-slate-100 outline-none rounded-[5px] ${
              errors.email && " border border-red-600"
            }`}
            placeholder="ელ.ფოსტა"
            {...register("email")}
          />
          <MdOutlineEmail className="absolute top-3 left-2 text-[18px]" />
          <p className="mt-1 text-red-600 text-[10px]">
            {errors.email?.message}
          </p>
        </div>
        <div className="w-[500px] relative">
          <input
            type={showPass ? "text" : "password"}
            className={`w-full py-2 pl-10 bg-slate-100 outline-none rounded-[5px] ${
              errors.password && " border border-red-600"
            }`}
            placeholder="პაროლი"
            {...register("password")}
          />
          <RiLockPasswordFill className="absolute top-3 left-2 text-[18px]" />
          <p className="mt-1 text-red-600 text-[10px]">
            {errors.password?.message}
          </p>
          <div
            className="absolute top-3 right-3 text-[18px]"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <BsEyeFill /> : <BsEyeSlashFill />}
          </div>
        </div>
        {logInError == "მეილი ან პაროლი არასწორია" && (
          <p className="text-red-600 text-[14px]">{logInError}</p>
        )}
        <button
          type="submit"
          className="w-[500px] py-2 bg-[#022FB0] text-white rounded-[5px] mt-3"
        >
          შესვლა
        </button>
      </div>
    </form>
  );
}
