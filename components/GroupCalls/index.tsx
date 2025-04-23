import { HiBars4 } from "react-icons/hi2";
import { Button } from "../ui/button/button";
import { BiDotsVertical } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { groupCalls } from "@/lib/data";
import Image from "next/image";
import {
  formatDateToCustomStyle,
  formatProgramModeColor,
  formatProgramModeDotColor,
} from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

export const GroupCalls = () => {
  return (
    <section className="py-3 rounded-lg bg-white ">
      <div className="flex justify-between items-center px-3">
        <div className="flex gap-2">
          <button className="text-black cursor-pointer">
            <HiBars4 />
          </button>
          <h3 className="font-bold text-text">Group calls</h3>
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
      <Swiper spaceBetween={16} slidesPerView="auto" grabCursor={true}>
        {groupCalls.map((groupCall) => (
          <SwiperSlide
            key={groupCall.id}
            className="bg-[#F9F7FF] rounded-lg px-3 py-4 h-auto !w-[19rem] space-y-2"
          >
            <Image
              src={groupCall.image}
              alt="Group call image"
              width={244}
              height={68}
              className="object-cover object-center h-[70px] w-full rounded-lg"
            />
            <div
              className={`${formatProgramModeColor(
                groupCall.status
              )} inline-flex items-center gap-2 text-xs px-4 py-1 rounded-xl`}
            >
              <span
                className={`size-2 rounded-full ${formatProgramModeDotColor(
                  groupCall.status
                )}`}
              ></span>
              {groupCall.status}
            </div>
            <h1 className="text-lg text-text-3">{groupCall.title}</h1>
            <div className="flex justify-between border-t border-gray-300 p-2 text-text-3">
              <div className="flex items-center gap-1  border-r border-gray-300 pr-5">
                <CiCalendar size={15} />
                <span className="text-xs">
                  {formatDateToCustomStyle(groupCall.date)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineClockCircle size={15} />
                <span className="text-xs">{groupCall.time}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-end">
                <Image
                  src={groupCall.groupImage}
                  alt={groupCall.studyGroup}
                  width={12}
                  height={12}
                  className="size-4 rounded-full object-cover "
                />
                <div className="flex flex-col justify-end">
                  <p className="text-text text-xs font-light">Study Group</p>
                  <h5 className="text-text-2 text-sm ">
                    {groupCall.studyGroup}
                  </h5>
                </div>
              </div>
              <div className="">
                <p className="text-text font-light text-xs">Mentors</p>
                <div className="flex gap-2">
                  {groupCall.mentors.map((src, idx) => (
                    <div
                      key={idx}
                      className={`w-5 h-5 rounded-full overflow-hidden  ${
                        idx !== 0 ? "-ml-3" : ""
                      } shadow-md`}
                    >
                      <Image
                        src={src}
                        alt={`Avatar ${idx + 1}`}
                        width={20}
                        height={20}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <Button as="button" variant="outline">
                View Participants
              </Button>
              <Button as="button" >
                <span>Join Now</span> <BsArrowRight />
              </Button>
            </div>
            <div className="flex flex-col gap-4"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
