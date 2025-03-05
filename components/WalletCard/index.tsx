import { IWalletCard } from "@/model/interface";
import Image from "next/image";

export const WalletCard = ({ logo, title, balance }: IWalletCard) => {
  return (
    <div className="border border-[#8477FF] rounded-lg p-3 sm:w-[282px] w-full font-karla">
      <div className="flex gap-2">
        <div className="w-10 h-[30px] bg-white rounded-full grid place-items-center">
          <Image
            src={logo}
            alt={title}
            height={24}
            width={24}
            className="h-6 w-6 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-normal text-base">{title}</h4>
          <p className="text-xs font-medium text-[#C1C1C1]">
            Balance: {balance}
          </p>
        </div>
      </div>
    </div>
  );
};
