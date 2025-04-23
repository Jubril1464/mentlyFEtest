"use client";

import { useEffect, useRef, useState } from "react";
import { useMenu } from "@/hooks/use-menu";
import { IMenu } from "@/model/interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars2 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { LogoutIcon, OutlineUserIcon, SidebarIcon } from "@/public/icons";
import { Switch } from "../ui/switch";

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
        className="absolute left-5 top-7  bg-secondary-1 size-6 grid place-items-center rounded-sm z-10"
        ref={navIconRef}
        onClick={() => setShowBar(true)}
      >
        <HiBars2 color="#fff" size={20} />
      </button>
      <div
        ref={sidebarRef}
        className={`bg-primary-1 overflow-y-auto h-screen p-5 flex flex-col duration-100 transform justify-between col-span-2 font-karla min-[900px]:static fixed z-40 min-[900px]:left-0 min-[900px]:w-auto w-[300px] left-0 ${
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
              <button>
                <SidebarIcon />
              </button>
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
                        ? "bg-white text-text-2"
                        : "text-gray-primary hover:bg-secondary-1/10"
                    }`}
                  >
                    {item.logo}
                    <span className="xl:block min-[900px]:hidden block">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="flex items-center text-gray-primary gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-secondary-1/10 cursor-pointer">
              <LogoutIcon /> Logout
            </li>
          </ul>
        </nav>

        <div className="mt-10 bg-[#FFFFFF1F] rounded-lg p-3 flex flex-col gap-3 w-full">
          <OutlineUserIcon />
          <h3 className="font-bold">
            Got some questions, enquiries or need help?
          </h3>
          <Link href="/" className="text-[#F0C074] underline text-[10px]">
            Visit Mently Help Desk Here
          </Link>
        </div>
        <div className="mt-5">
          <Switch label="Switch To Classic Mode" />
        </div>
      </div>
    </>
  );
};
