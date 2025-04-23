"use client";
import { LoginForm } from "@/components/login-form";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-4xl font-chivo h-screen bg-white">
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
            Welcome back
          </h3>
          <p className="font-karla text-input text-base text-center">
            Login to access your Techrity account
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
