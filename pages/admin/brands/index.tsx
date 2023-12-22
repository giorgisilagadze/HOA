import AddOrDeleteBrand from "@/components/admin/brands/AddOrDeleteBrand";

export default function Brands() {
  return (
    <div className="custom-width h-[100%] py-8 flex flex-col justify-center gap-[40px] items-center">
      <AddOrDeleteBrand isAdd={true} />
      <AddOrDeleteBrand isAdd={false} />
    </div>
  );
}
