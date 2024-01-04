import axiosClient from "@/utils/AxiosClients";
import axios from "axios";
import { log } from "console";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface Prop {
  oneCar: Product;
}

export default function EditCar() {
  const route = useRouter();

  const { carId } = route.query;

  const [oneCar, setOneCar] = useState<Product>();
  const [deleteCounter, setDeleteCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const responseOneProduct = await axiosClient.get(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/car/${carId}`
        );
        const data = responseOneProduct.data;
        setOneCar(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [deleteCounter]);

  const [changeValues, setChangeValues] = useState<any>({
    firm: oneCar?.firm,
    model: oneCar?.model,
    transmission: oneCar?.transmission,
    engine: oneCar?.engine,
    metersRun: oneCar?.metersRun,
    year: oneCar?.year,
    weel: oneCar?.weel,
    color: oneCar?.color,
    vehicleType: oneCar?.vehicleType,
    type: oneCar?.type,
    price: oneCar?.price,
  });

  useEffect(() => {
    setChangeValues(oneCar);
  }, [oneCar]);

  const deleteImg = async (id: number) => {
    try {
      const response = await axiosClient.delete(`admin/carImage/${id}`);
      setDeleteCounter(deleteCounter + 1);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(oneCar);

  return (
    <div
      className={`custom-width w-full py-[30px] px-8 flex flex-col items-start gap-5`}
    >
      <div className="w-full flex overflow-x-auto gap-5 ">
        <div className="flex gap-5">
          {isLoading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  className="w-[120px] h-[120px] rounded-[10px] animated-background"
                  key={item}
                ></div>
              ))
            : oneCar?.cars_imgs.map((item: CarImg) => (
                <div className="relative w-[120px] h-[120px]" key={item.id}>
                  <img
                    src={item.url}
                    alt="img"
                    key={item.id}
                    className="w-full h-full rounded-[10px]"
                  />
                  <div
                    className="absolute top-[4px] right-[4px] w-6 h-6 bg-red-600 rounded-[50%] flex items-center justify-center z-[99] text-white cursor-pointer"
                    onClick={() => deleteImg(item.id)}
                  >
                    <LiaTimesSolid />
                  </div>
                </div>
              ))}
        </div>
      </div>

      <form action="" className="w-full flex flex-col gap-5">
        {isLoading ? (
          <div className="w-full flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div className="flex flex-col gap-1 w-[48%]" key={item}>
                <div className="w-[80px] h-[20px] rounded-[4px] animated-background"></div>
                <div className="w-full h-[40px] rounded-[4px] animated-background"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-wrap gap-5 ">
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                ბრენდი{" "}
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.firm}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, firm: e.target.value })
                }
                name={"firm"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                მოდელი{" "}
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.model}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, model: e.target.value })
                }
                name={"model"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                ტრანსმისია{" "}
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.transmission}
                onChange={(e) =>
                  setChangeValues({
                    ...changeValues,
                    transmission: e.target.value,
                  })
                }
                name={"transmission"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                კუბატურა{" "}
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.engine}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, engine: e.target.value })
                }
                name={"engine"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                გარბენი{" "}
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.metersRun}
                onChange={(e) =>
                  setChangeValues({
                    ...changeValues,
                    metersRun: e.target.value,
                  })
                }
                name={"metersRun"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">წელი </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.year}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, year: e.target.value })
                }
                name={"year"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">საჭე </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.weel}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, weel: e.target.value })
                }
                name={"weel"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">ფერი </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.color}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, color: e.target.value })
                }
                name={"color"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">
                წამყვანი თვლები{" "}
              </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.vehicleType}
                onChange={(e) =>
                  setChangeValues({
                    ...changeValues,
                    vehicleType: e.target.value,
                  })
                }
                name={"vehicleType"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">ტიპი </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.type}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, type: e.target.value })
                }
                name={"type"}
              />
            </div>
            <div className="md600:w-[48%] w-full flex flex-col gap-1">
              <p className="text-[#787d87] text-[14px] leading-[22px]">ფასი </p>
              <input
                type="text"
                className="w-full rounded-[4px] border border-[#c0bebe] py-[7px] px-2 outline-none"
                value={changeValues?.price}
                onChange={(e) =>
                  setChangeValues({ ...changeValues, price: e.target.value })
                }
                name={"price"}
              />
            </div>
          </div>
        )}

        <button className="rounded-[12px] bg-[#022FB0] px-3 py-3 text-white text-[14px] leading-[22px] md600:w-[300px] w-full m-auto sm:ml-0">
          განახლება
        </button>
      </form>
    </div>
  );
}
