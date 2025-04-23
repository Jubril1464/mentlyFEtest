"use client";
import { useState } from "react";
import { GridIcon, ListIcon } from "@/public/icons";
import { Button } from "@/components/ui/button/button";
import { Programs } from "@/components/Programs";
import { GroupCalls } from "@/components/GroupCalls";
import { Applications } from "@/components/Applications";
import { UserDonutChart } from "@/components/UserDonutChart";
import { Mentors } from "@/components/Mentors";
import { RecentTransactions } from "@/components/RecentActivities";
import { ManageWidgetModal } from "@/components/ManageWidgetModal";

const Dashboard = () => {
  const [listType, setListType] = useState("grid");
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ManageWidgetModal open={openModal} setOpen={setOpenModal} />
      <div className="2xl:pl-5 sm:pl-2 sm:pr-2 font-chivo">
        <div className="flex gap-3 items-center justify-end">
          <button
            onClick={() => setListType("list")}
            className={`cursor-pointer p-2 ${
              listType === "list"
                ? "border-2 border-secondary-1 rounded-sm bg-[#6F01D01C]"
                : ""
            }`}
          >
            <ListIcon
              className={`${
                listType === "list" ? "text-secondary-1" : "text-[#A4A5B8]"
              }`}
            />
          </button>
          <button
            onClick={() => setListType("grid")}
            className={`cursor-pointer p-2 ${
              listType === "grid"
                ? "border-2 border-secondary-1 rounded-sm bg-[#6F01D01C]"
                : ""
            }`}
          >
            <GridIcon
              className={`${
                listType === "grid" ? "text-secondary-1" : "text-[#A4A5B8]"
              }`}
            />
          </button>
          <button
            className="cursor-pointer font-bold text-[#1F0954] text-sm"
            onClick={() => setOpenModal(true)}
          >
            Manage Widgets
          </button>
        </div>
        <div className="bg-secondary-1 rounded-sm py-2 px-4 flex justify-between xl:items-center mt-5 gap-3 xl:flex-row flex-col">
          <h1 className="text-white font-semibold xl:text-2xl text-lg">
            Welcome Aboard, Blessing 👋
          </h1>
          <h3 className="text-[#BDBDBD] xl:text-xl text-base font-semibold">
            We're thrilled to have you join Techrity Team!
          </h3>
          <Button
            as="btn"
            className="!font-bold text-black !w-40"
            bgColor="bg-white"
            hoverBgColor="bg-white"
          >
            Update Profile
          </Button>
        </div>
        <div className="2xl:grid flex flex-col 2xl:grid-cols-8 grid-cols-1 gap-3 mt-3 ">
          <div className="min-[1300px]:col-span-3 flex flex-col gap-3">
            <Programs />
            <UserDonutChart />
          </div>
          <div className="col-span-5 flex flex-col gap-3">
            <GroupCalls />
            <div className="grid 2xl:grid-cols-5 grid-cols-1 gap-3 h-full">
              <div className="col-span-3">
                <Applications />
              </div>
              <div className="col-span-2 flex flex-col gap-3">
                <Mentors />
                <RecentTransactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
