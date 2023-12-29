import axiosClient from "@/utils/AxiosClients";
import axios from "axios";
import { log } from "console";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Prop {
  oneCar: Product;
}

export default function EditCar() {
  const route = useRouter();
  const { carId } = route.query;

  const [oneCar, setOneCar] = useState<Product>();

  useEffect(() => {
    (async () => {
      const responseOneProduct = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/car/${carId}`
      );
      const data = responseOneProduct.data;
      setOneCar(data);
    })();
  }, []);

  console.log(oneCar);

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Slug: {carId}</p>
      <p>{oneCar?.name}</p>
    </div>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { params } = context;

//   if (!params || !params.productId) {
//     // Handle the case where 'params' or 'params.product' is missing.
//     // You can return an error or a different response as needed.
//     return {
//       notFound: true, // For example, return a 404 Not Found page.
//     };
//   }

//   const { carId } = params;

//   const responseOneProduct = await axiosClient.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/admin/car/${carId}`
//   );
//   const data = responseOneProduct.data;

//   return {
//     props: {
//       oneCar: data,
//     },
//   };
// }
