"use client";
import MastercardLogo from "@/public/images/mastercard_logo.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../ui/button/button";
export const MyCard = () => {
  return (
    <div className="bg-primary-1 p-5 rounded-2xl shadow-md h-full">
      <h2 className="text-white text-2xl font-semibold ">My Card</h2>
      <div className="flex flex-col gap-1 mt-5">
        <p className="font-normal text-text">Card Balance</p>
        <h2 className="text-2xl font-semibold">$15,595.015</h2>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        loop={true}
      >
        {Array(5)
          .fill(null)
          .map((_,i) => (
            <SwiperSlide className="p-6 font-karla" key={i}>
              <div className="xl:h-[197px] sm:h-[300px] h-[200px] rounded-[20px] p-6 card mt-5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="font-normal text-text">Current Balance</p>
                    <h2 className="text-2xl font-semibold">$5,750,20</h2>
                  </div>
                  <Image
                    src={MastercardLogo}
                    alt="Mastercard logo"
                    width={55}
                    height={20}
                    className="w-[55px]"
                  />
                </div>

                <div className="flex justify-between">
                  <p className="font-medium text-base">5282 3456 7890 1289</p>
                  <p className="font-medium text-base">9/25</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="flex justify-between gap-5 mt-10">
        <Button as="button" className="w-full h-10" size="md">Manage Cards</Button>
        <Button as="button" variant="outline" className="w-full" size="md">Transfer</Button>
      </div>
    </div>
  );
};
