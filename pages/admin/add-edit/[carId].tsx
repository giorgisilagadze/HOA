import axiosClient from "@/utils/AxiosClients";
import axios from "axios";
import { GetServerSidePropsContext } from "next";

interface Prop {
  oneCar: Product;
}

export default function EditCar({ oneCar }: Prop) {
  console.log(oneCar);

  return <div>{oneCar.name}</div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  if (!params || !params.productId) {
    // Handle the case where 'params' or 'params.product' is missing.
    // You can return an error or a different response as needed.
    return {
      notFound: true, // For example, return a 404 Not Found page.
    };
  }

  const { carId } = params;

  const responseOneProduct = await axiosClient.get(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/car/${carId}`
  );
  const data = responseOneProduct.data;

  return {
    props: {
      oneCar: data,
    },
  };
}
