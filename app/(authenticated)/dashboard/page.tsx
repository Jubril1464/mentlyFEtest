import AnalyticsChart from "@/components/AnalyticsChart";
import { RecentTransactions } from "@/components/RecentTransactions";
import { Header } from "@/components/Header";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { MyCard } from "@/components/MyCard";
import ActivityChart from "@/components/ActivityCharts";
const Dashboard = () => {
  return (
    <div>
      <Header
        title="Welcome Back, Ali 👋"
        subTitle="Here’s what’s happening with your store today."
      />

      <div className="grid xl:grid-cols-5 grid-cols-1 gap-10 font-karla text-white mt-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-5 xl:gap-y-10 gap-y-5 xl:col-span-3 col-span-full">
          <div className="p-5 rounded-2xl flex gap-5 bg-primary-1 items-center h-[84px]">
            <div className="h-10 w-10 grid place-items-center rounded bg-[#64CFF6] shrink-0">
              <GoArrowDownRight size={20} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#8C89B4] text-sm">Total income</p>
              <h2 className="text-2xl font-semibold">$632.000</h2>
            </div>
            <span className="bg-[#193345] px-2 py-1 mt-5 rounded-3xl text-xs text-[#02B15A]">
              +1.29%
            </span>
          </div>
          <div className="p-5 rounded-2xl flex  gap-5 bg-primary-1 items-center h-[84px]">
            <div className="h-10 w-10 grid place-items-center rounded bg-[#6359E9] shrink-0">
              <GoArrowUpRight size={20} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#8C89B4] text-sm">Total outcome</p>
              <h2 className="text-2xl font-semibold">$632.000</h2>
            </div>
            <span className="bg-[#3C193B] px-2 py-1 mt-5 rounded-3xl text-xs text-[#E41414]">
              +1.29%
            </span>
          </div>

          <AnalyticsChart />
        </div>
        <div className="flex flex-col gap-10 xl:col-span-2 col-span-full h-full">
          <MyCard />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-10 font-karla text-white mt-10">
        <RecentTransactions />
        <ActivityChart />
      </div>
    </div>
  );
};

export default Dashboard;
