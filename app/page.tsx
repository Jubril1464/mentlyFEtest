'use client'
import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/data";
import { IoStarSharp } from "react-icons/io5";
export default function Home() {
  return (
    <div className="text-4xl grid md:grid-cols-2 grid-cols-1 font-grotesk h-screen">
      <div className="bg-primary-1 h-full flex flex-col items-center gap-5 pt-20 px-5">
        <div className="flex flex-col gap-3 items-center">
          <Image
            src="/images/logo.svg"
            alt="Uifry logo"
            height={31}
            width={97}
            className="w-[97px] h-[30px]"
          />
          <h3 className="font-bold text-2xl text-center">
            Welcome back, Ali Riaz 🙇🏾‍♀️
          </h3>
          <p className="font-karla text-input text-base text-center">
            Login to access your Uifry account
          </p>
        </div>

        <LoginForm />
      </div>
      <div className="p-10 relative md:block hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-6 font-karla">
              <div className="flex items-center space-x-1 mb-3 ">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <IoStarSharp
                      key={i}
                      size={18}
                      className="text-yellow-400"
                    />
                  ))}
              </div>
              <p className="lg:text-4xl text-2xl font-bold">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-lg text-secondary-1">
                  {testimonial.name}
                </h4>
                <p className="text-base text-secondary-1">
                  {testimonial.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Image
          src="/images/auth-image.svg"
          alt="Uifry dashboard"
          width={400}
          height={100}
          className="absolute right-0 bottom-0 xl:w-[500px] w-[300px]"
        />
      </div>
    </div>
  );
}
