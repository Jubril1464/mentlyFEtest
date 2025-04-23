import { HiBars4 } from "react-icons/hi2";
import { Button } from "../ui/button/button";
import { BiDotsVertical } from "react-icons/bi";
import { CustomCheckbox } from "../ui/input/custom-checkbox";
import Image from "next/image";
import { students } from "@/lib/data";

export const Applications = () => {
  return (
    <section className="p-3 rounded-lg col-span-3  bg-white row-span-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="text-black cursor-pointer">
            <HiBars4 />
          </button>
          <h3 className="font-bold text-text">Applications</h3>
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

      <div className="py-5 border-b border-gray-300">
        <h4 className="text-sm font-light text-[#7D8DA6] ml-10  mb-3">
          Mentors
        </h4>
        <div className="flex item-center justify-between min-[500px]:flex-row flex-col gap-2">
          <div className="flex items-center gap-5">
            <CustomCheckbox />
            <Image
              src="https://randomuser.me/api/portraits/men/35.jpg"
              width={40}
              height={40}
              alt="Avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-black">Maxwell Smith</h2>
              <p className="text-text text-xs">maxwellsmith@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              as="btn"
              variant="outline"
              className="bg-[#FFEDED] border-[#D09696] border text-[#D83535]"
            >
              Reject
            </Button>
            <Button as="btn">Accept</Button>
          </div>
        </div>
        <div className="flex gap-2 min-[500px]:ml-10 ml-0 mt-3">
          <div className="bg-[#F3ECF9] border border-[#DDCEEE] text-[#9985A7] text-[9px] rounded-md px-2 py-1">
            <span>Product Designer</span>
          </div>
          <div className="bg-[#E8FDFB] border border-[#A1BDBA] text-[#58948E] text-[9px] rounded-md px-2 py-1">
            <span>4 years Experience</span>
          </div>
          <div className="bg-[#E3ECF9] border border-[#ABBEE0] text-[#8196B5] text-[9px] rounded-md px-2 py-1 flex items-center gap-2">
            <div className="flex">
              <span className="w-1 bg-[#186648] h-2"></span>
              <span className="w-1 h-2"></span>
              <span className="w-1 h-2 bg-[#186648]"></span>
            </div>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="bg-[#F4F4F4] border border-[#C8C8C8] text-[#595564] text-[9px] rounded-md px-2 py-1">
            <span>GMT +1</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="text-sm font-light text-[#7D8DA6] ml-10 mb-3">
          Students
        </h4>
        <div className="space-y-3">
          {students.map((student, index) => (
            <div
              className={`flex item-center justify-between  min-[500px]:flex-row flex-col gap-3 pt-5 pb-3 ${
                students.length === index + 1 ? "" : "border-b border-gray-300"
              }`}
              key={student.id}
            >
              <div className="flex items-center gap-5">
                <CustomCheckbox />
                <Image
                  src={student.avatar}
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold text-black">{student.name}</h2>
                  <p className="text-text text-xs">{student.email}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  as="btn"
                  variant="outline"
                  className="bg-[#FFEDED] border-[#D09696] border text-[#D83535]"
                >
                  Reject
                </Button>
                <Button as="btn">Accept</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
