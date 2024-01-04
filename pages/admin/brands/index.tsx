import AddOrDeleteBrand from "@/components/admin/brands/AddOrDeleteBrand";

export default function Brands() {
  return (
    <div className="custom-width w-full h-[100%] py-8 px-5 sm:px-0 flex flex-col justify-center gap-[40px] items-center">
      <AddOrDeleteBrand isAdd={true} />
      <AddOrDeleteBrand isAdd={false} />
    </div>
  );
}
