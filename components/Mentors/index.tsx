import { HiBars4 } from "react-icons/hi2";
import { Button } from "../ui/button/button";
import { BiDotsVertical } from "react-icons/bi";
import { BsPlus, BsPlusCircle } from "react-icons/bs";
import Image from "next/image";
export const Mentors = () => {
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
          <button className="cursor-pointer">
            <BsPlusCircle color="#9D92A6" size={20} />
          </button>
          <button className="text-black cursor-pointer">
            <BiDotsVertical />
          </button>
        </div>
      </div>
      <div className="space-y-5 mt-4">
        <div className="flex items-center justify-between border-b border-gray-200 pt-4 pb-2">
          <div className="flex gap-2">
            <Image
              src="https://randomuser.me/api/portraits/men/35.jpg"
              width={30}
              height={30}
              alt="Avatar"
              className="h-[30px] w-[30px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-black text-sm">Maxwell Smith</h2>
              <p className="text-text text-xs">Product Designer</p>
            </div>
          </div>
          <button className="bg-secondary-1 rounded-2xl px-2 py-1 text-xs">
            Message
          </button>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 pt-4 pb-2">
          <div className="flex gap-2">
            <Image
              src="https://randomuser.me/api/portraits/men/34.jpg"
              width={30}
              height={30}
              alt="Avatar"
              className="h-[30px] w-[30px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-black text-sm">Adeati Samuel</h2>
              <p className="text-text text-xs">Product Designer</p>
            </div>
          </div>
          <button className="bg-secondary-1 rounded-2xl px-2 py-1 text-xs">
            Message
          </button>
        </div>
        <Button
          as="button"
          borderRadius="rounded-full"
          bgColor="bg-[#DDD6FB]"
          className="w-full"
          color="text-secondary-1"
        >
          See all
        </Button>
      </div>
    </section>
  );
};
