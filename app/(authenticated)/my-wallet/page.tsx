import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button/button";
import { WalletCard } from "@/components/WalletCard";
import { FiPlus } from "react-icons/fi";
import { PiDotsThreeCircleThin } from "react-icons/pi";
import NGN from "@/public/images/NGN.png";
import GBP from "@/public/images/GBP.png";
import USD from "@/public/images/USD.png";
import { WalletTransactions } from "@/components/WalletTransactions";
const MyWallet = () => {
  return (
    <div>
      <Header title="My wallets" subTitle="Manage all your wallets from here" />

      <div className="p-5 rounded-lg bg-primary-1 my-6">
        <div className="flex justify-between sm:flex-row flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-[#C1C1C1] text-base font-normal">
              Your consolidated balance
            </p>
            <h2 className="text-2xl font-semibold">$34,780,267.08</h2>
          </div>

          <div className="flex gap-5 items-center sm:self-end self-start">
            <Button as="button" size="md" className="w-[200px]">
              <FiPlus />
              <span>Add New Wallet</span>
            </Button>
            <button>
              <PiDotsThreeCircleThin size={24} />
            </button>
          </div>
        </div>

        <div className="flex gap-5 mt-8 sm:flex-row flex-col items-center">
          <WalletCard title="NGN Wallet" logo={NGN} balance="245,800.89" />
          <WalletCard title="GBP Wallet" logo={GBP} balance="245,800.89" />
          <WalletCard title="USD Wallet" logo={USD} balance="245,800.89" />
        </div>
      </div>

      <WalletTransactions />
    </div>
  );
};

export default MyWallet;
