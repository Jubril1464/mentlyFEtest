import { clipSentence } from "@/lib/utils";
import { BellIcon } from "@/public/icons";
import Image from "next/image";
import { LiaAngleDownSolid } from "react-icons/lia";
export const Header = () => {
  return (
    <header className="flex items-center justify-end font-chivo bg-white shadow px-8 gap-3 h-20 text-[#404040]">
      <button className="relative cursor-pointer">
        <BellIcon />
        <span className="size-2 rounded-full bg-[#FF3E3E] absolute top-0 right-1 z-10"></span>
      </button>
      <div className="flex gap-2">
        <div className="size-10 rounded-full bg-light-secondary grid place-items-center">
          <Image
            src="/images/white-logo.svg"
            alt="Techrity Logo"
            className="size-8"
            height={32}
            width={32}
          />
        </div>
        <div className="flex flex-col font-chivo text-[#404040]">
          <p>{clipSentence("Techrity Founder", 13)}</p>
          <p className="text-xs">Member</p>
        </div>
      </div>
      <button className="size-6 rounded-md bg-secondary-1 grid place-items-center cursor-pointer">
        <LiaAngleDownSolid color="#C2C2C2" size={16} />
      </button>
    </header>
  );
};
