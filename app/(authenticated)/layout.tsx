import type React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 h-screen bg-gray-100 min-[900px]:fixed relative w-full overflow-y-hidden">
      <Sidebar />
      <div className="min-[900px]:col-span-10 col-span-full overflow-y-auto">
        <Header />
        <div className="sm:px-8 px-5 py-8">{children}</div>
      </div>
    </div>
  );
}
