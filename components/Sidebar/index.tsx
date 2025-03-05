"use client";

import { useEffect, useRef, useState } from "react";
import { useMenu } from "@/hooks/use-menu";
import { IMenu } from "@/model/interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QuestionIcon, MoonIcon } from "@/public/icons";
import Avatar from "@/public/images/avatar.png";
import { GoTriangleDown } from "react-icons/go";
import { HiBars2 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";


export const Sidebar = () => {
  const pathname = usePathname();
  const { menu } = useMenu();
  const [showBar, setShowBar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navIconRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        navIconRef.current &&
        !navIconRef.current.contains(event.target as Node)
      ) {
        setShowBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside as EventListener);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, []);

  return (
    <>
      <button
        className="absolute left-5 top-10 border border-secondary-1 size-6 grid place-items-center rounded-sm"
        ref={navIconRef}
        onClick={() => setShowBar(true)}
      >
        <HiBars2 color="#fff" size={20} />
      </button>
      <div
        ref={sidebarRef}
        className={`bg-primary-1 h-screen p-5 flex flex-col duration-100 transform justify-between xl:col-span-2 col-span-1 font-karla min-[900px]:static fixed z-40 min-[900px]:left-0 min-[900px]:w-auto w-[300px] left-0 ${
          showBar
            ? "max-[900px]:translate-x-0"
            : "max-[900px]:-translate-x-full"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <Image
                src="/images/logo.svg"
                alt="Uify Logo"
                height={30}
                width={97}
                className="my-5 w-[97px] h-[30px]"
              />
              <button
                onClick={() => setShowBar(false)}
                ref={navIconRef}
                className="flex min-[900px]:hidden justify-end"
              >
                <span className="border border-secondary-1 size-6 grid place-items-center rounded-sm">
                  <LiaTimesSolid />
                </span>
              </button>
            </div>
            {menu.map((item: IMenu) => {
              const isActive = pathname === item.link;
              return (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors  ${
                      isActive
                        ? "bg-secondary-1 text-primary-1"
                        : "text-white hover:bg-secondary-1/10"
                    }`}
                  >
                    {isActive ? item.selectedLogo : item.logo}
                    <span className="xl:block min-[900px]:hidden block">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="border-t border-[#4B4B99] mt-5">
            <li>
              <button className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
                <QuestionIcon color="#fff" />
                <span className="xl:block min-[900px]:hidden block">
                  Help center
                </span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors">
                <MoonIcon color="#fff" />
                <span className="xl:block min-[900px]:hidden block">
                  Dark theme
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Image
              src={Avatar}
              alt="Avatar"
              className="size-10 rounded-full object-cover"
            />
            <div className="xl:flex flex-col min-[900px]:hidden flex">
              <span className="font-bold text-base">Ali Riaz</span>
              <span className="font-normal text-sm">Web developer</span>
            </div>
          </div>
          <button>
            <GoTriangleDown className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};
