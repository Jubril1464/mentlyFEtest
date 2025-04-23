import { HiBars4 } from "react-icons/hi2";
import { Button } from "../ui/button/button";
import { BiDotsVertical } from "react-icons/bi";
import { activities } from "@/lib/data";
import Image from "next/image";
import { getTimeAgo } from "@/lib/utils";

export const RecentTransactions = () => {
  return (
    <section className="p-3 rounded-lg bg-white ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="text-black cursor-pointer">
            <HiBars4 />
          </button>
          <h3 className="font-bold text-text">Mentors</h3>
        </div>
        <div className="flex gap-2">
          <Button
            as="link"
            className="text-secondary-1 font-semibold text-xs cursor-pointer"
          >
            See all
          </Button>
          <button className="text-black cursor-pointer">
            <BiDotsVertical />
          </button>
        </div>
      </div>

      <div className="mt-5">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex py-2 gap-2 ${
              activities.length === index + 1 ? "" : "border-b border-gray-200"
            }`}
          >
            <Image
              src={activity.avatar}
              alt="User avatar"
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-black text-sm">{activity.title}</h3>
              <p className="text-xs font-light text-[#707991]">
                {activity.content}
              </p>
              <p className="text-xs font-light text-[#707991]">
                {getTimeAgo(activity.time)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
