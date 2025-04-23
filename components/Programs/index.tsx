"use client";
import { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { BiDotsVertical } from "react-icons/bi";
import CustomSelect from "../ui/select";
import { programs } from "@/lib/data";
import { formatProgramModeColor, formatProgramModeDotColor } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

export const Programs = () => {
  const [filter, setFilter] = useState("");
  return (
    <section className="p-3 rounded-lg  bg-white row-span-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="text-black cursor-pointer">
            <HiBars4 />
          </button>
          <h3 className="font-bold text-text">Programs</h3>
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
      <div className="flex gap-3 items-center justify-end my-5">
        <span className="text-text">Filter</span>
        <CustomSelect
          options={["Active", "Inactive"]}
          onChange={(val) => setFilter(val)}
        />
      </div>
      <div className="space-y-3 2xl:block hidden">
        {programs.map((program) => (
          <div
            key={program.id}
            className="relative shadow-lg rounded-lg px-3 py-2 bg-cover bg-center"
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${program.image})`,
              }}
              className="bg-cover rounded-xl p-2"
            >
              <h4 className="font-bold text-2xl">{program.title}</h4>
              <div
                className={`${formatProgramModeColor(
                  program.mode
                )} inline-flex items-center gap-2 text-xs px-4 py-1 rounded-xl mt-2`}
              >
                <span
                  className={`size-2 rounded-full ${formatProgramModeDotColor(
                    program.mode
                  )}`}
                ></span>
                {program.mode}
              </div>
            </div>
            <div className="relative z-10 text-white p-3">
              <p className="text-black text-sm">{program.about}</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2">
                {program.mentors.map((src, idx) => (
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
                <p className="text-text font-medium text-sm">Mentors</p>
              </div>
              <div className="flex gap-3">
                <Button as="btn" variant="outline" className="w-28">
                  View Details
                </Button>
                <Button as="btn" className="w-28">
                  Analysis
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Swiper spaceBetween={16} slidesPerView='auto' grabCursor={true} className="2xl:!hidden !block">
        {programs.map((program) => (
          <SwiperSlide
            key={program.id}
            className="relative shadow-lg rounded-lg px-3 py-2 bg-cover bg-center !w-[30rem] !h-[20rem]"
          >
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${program.image})`,
              }}
              className="bg-cover rounded-xl p-2 h-[112px]"
            >
              <h4 className="font-bold text-2xl">{program.title}</h4>
              <div
                className={`${formatProgramModeColor(
                  program.mode
                )} inline-flex items-center gap-2 text-xs px-4 py-1 rounded-xl mt-2`}
              >
                <span
                  className={`size-2 rounded-full ${formatProgramModeDotColor(
                    program.mode
                  )}`}
                ></span>
                {program.mode}
              </div>
            </div>
            <div className="relative z-10 text-white p-3">
              <p className="text-black text-sm">{program.about}</p>
            </div>
            <div className="flex justify-between items-start sm:items-center mt-3 sm:flex-row flex-col gap-5 ">
              <div className="flex gap-2">
                {program.mentors.map((src, idx) => (
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
                <p className="text-text font-medium text-sm">Mentors</p>
              </div>
              <div className="flex gap-3">
                <Button as="btn" variant="outline" className="w-28">
                  View Details
                </Button>
                <Button as="btn" className="w-28">
                  Analysis
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
