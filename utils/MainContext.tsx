import axios from "axios";
import { createContext, useState } from "react";

export const PrimaryContext = createContext({
  adminToken: {},
  setAdminToken: (adminToken: string | null) => {},
  filteredCars: {},
  setFilteredCars: (filteredCars: AllProducts[]) => {},
  isLoading: {},
  setIsLoading: (isLoading: boolean) => {},
  checkedFields: {},
  setCheckedFields: (checkedFields: CheckedFields[]) => {},
  handleFilter: (arg1: number) => {},
});

export default function MainContext({ children }: any) {
  const [adminToken, setAdminToken] = useState<string | any>();
  const [filteredCars, setFilteredCars] = useState<AllProducts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkedFields, setCheckedFields] = useState<CheckedFields[]>([
    {
      id: 1,
      title: "ბრენდი",
      checked: [],
    },
    {
      id: 2,
      title: "მოდელი",
      checked: [],
    },
    {
      id: 3,
      title: "წელი",
      checked: [],
    },
    {
      id: 4,
      title: "ტრანსმისია",
      checked: [],
    },
    {
      id: 5,
      title: "ძრავი",
      checked: [],
    },
    {
      id: 6,
      title: "საწვავის ტიპი",
      checked: [],
    },
    {
      id: 7,
      title: "საჭე",
      checked: [],
    },
    {
      id: 8,
      title: "ფასი",
      checked: [],
    },
    {
      id: 9,
      title: "ფერი",
      checked: [],
    },
    {
      id: 10,
      title: "წამყვანი თვლები",
      checked: [],
    },
    {
      id: 11,
      title: "ტიპი",
      checked: [],
    },
    {
      id: 12,
      title: "გარბენი",
      checked: [],
    },
  ]);

  const handleFilter = async (page: number) => {
    const checkedArr = checkedFields.map((item) => item.checked);
    setIsLoading(true);
    const response = await axios.get(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/front/car?page=${page}&per_page=20&firm=${JSON.stringify(
        checkedArr[0]
      )}` +
        `&model=${JSON.stringify(checkedArr[1])}` +
        `${
          checkedArr[2][0]
            ? `&minYear=${JSON.stringify(parseInt(checkedArr[2][0]))}`
            : ""
        }` +
        `${
          checkedArr[2][1]
            ? `&maxYear=${JSON.stringify(parseInt(checkedArr[2][1]))}`
            : ""
        }` +
        `&transmition=${JSON.stringify(checkedArr[3])}` +
        `&engine=${JSON.stringify(checkedArr[4])}` +
        `&petrol=${JSON.stringify(checkedArr[5])}` +
        `&weel=${JSON.stringify(checkedArr[6])}` +
        `${
          checkedArr[7][0]
            ? `&minPrice=${JSON.stringify(parseInt(checkedArr[7][0]))}`
            : ""
        }` +
        `${
          checkedArr[7][1]
            ? `&maxPrice=${JSON.stringify(parseInt(checkedArr[7][1]))}`
            : ""
        }` +
        `&color=${JSON.stringify(checkedArr[8])}` +
        `&driveShaft=${JSON.stringify(checkedArr[9])}` +
        `&type=${JSON.stringify(checkedArr[10])}` +
        `${
          checkedArr[11][0]
            ? `&minMetersRun=${JSON.stringify(parseInt(checkedArr[11][0]))}`
            : ""
        }` +
        `${
          checkedArr[11][1]
            ? `&maxMetersRun=${JSON.stringify(parseInt(checkedArr[11][1]))}`
            : ""
        }`
    );
    setIsLoading(false);
    const data = response.data;
    setFilteredCars(data);
    console.log(data);
  };

  return (
    <PrimaryContext.Provider
      value={{
        adminToken,
        setAdminToken,
        filteredCars,
        setFilteredCars,
        isLoading,
        setIsLoading,
        checkedFields,
        setCheckedFields,
        handleFilter,
      }}
    >
      {children}
    </PrimaryContext.Provider>
  );
}
