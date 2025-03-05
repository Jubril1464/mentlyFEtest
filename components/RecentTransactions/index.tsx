import { transactions } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

export const RecentTransactions = () => {
  return (
    <div className="lg:col-span-3 col-span-1 bg-primary-1 p-5 rounded-2xl shadow-md">
      <div className="flex justify-between">
        <h2 className="text-white text-2xl font-semibold">
          Recent transactions
        </h2>
        <button className="text-sm text-text font-semibold active:outline-none active:border-none">
          See All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mt-5">
          <thead className="overflow-x-auto">
            <tr className="text-left text-[#AEABD8] text-sm font-karla font-normal overflow-x-auto">
              <th className="px-4 py-3 text-nowrap">Name</th>
              <th className="px-4 py-3 text-nowrap">Date</th>
              <th className="px-4 py-3 text-nowrap">Amount</th>
              <th className="px-4 py-3 text-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-t border-[#2D2B4D] overflow-x-auto"
              >
                <td className="px-4 py-3 flex items-center gap-3 text-nowrap">
                  <div className="w-6 h-6 grid place-items-center rounded-full bg-white">
                    <Image
                      src={transaction.logo}
                      alt={transaction.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                  {transaction.name}
                </td>
                <td className="px-4 py-3  text-nowrap">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-4 py-3  text-nowrap">{transaction.amount}</td>
                <td className="px-4 py-3  text-nowrap">
                  <span className="bg-[#1A3527] text-[#02B15A] text-xs px-2 py-1 rounded-full">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
