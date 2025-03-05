import { HeaderProps } from "@/model/interface";
import { IoSearchOutline } from "react-icons/io5";
export const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <header className="flex flex-wrap items-center justify-between font-karla text-white min-[900px]:pl-0 pl-8 gap-3">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-[#C1C1C1] text-base font-normal">{subTitle}</p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for anything..."
          className="rounded-lg min-[450px]:w-[380px] w-full px-4 h-10 py-2 bg-primary-1 font-karla placeholder:font-karla placeholder:text-[#AEABD8] focus:outline focus-within:border-none border-none"
        />
        <IoSearchOutline className="absolute right-5 top-1/2 -translate-y-1/2 text-white" />
      </div>
    </header>
  );
};
