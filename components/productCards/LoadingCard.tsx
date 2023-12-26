export default function LoadingCard() {
  return (
    <div className="w-[289px] rounded-[4px] shadow-product pb-4">
      <div className="w-full h-[162px] animated-background"></div>
      <div className="w-full mt-2 flex flex-col gap-2">
        <div className="w-full flex justify-between items-center px-4">
          <div className="w-[170px] h-[24px] animated-background"></div>
          <div className="w-[60px] h-[24px] animated-background"></div>
        </div>
        <div className="w-full flex justify-between items-center px-4">
          <div className="w-[55px] h-[38px] animated-background"></div>
          <div className="w-[55px] h-[38px] animated-background"></div>
          <div className="w-[55px] h-[38px] animated-background"></div>
        </div>
        <div className="w-full flex justify-between items-center px-4">
          <div className="w-[60px] h-[24px] animated-background"></div>
          <div className="w-[110px] h-[24px] animated-background"></div>
        </div>
      </div>
    </div>
  );
}
