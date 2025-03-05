import type React from "react";
import { Sidebar } from '@/components/Sidebar'

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-10 h-screen bg-[#141430] min-[900px]:fixed relative w-full overflow-y-hidden">
      <Sidebar />
      <div className="xl:col-span-8 min-[900px]:col-span-9 col-span-full sm:px-8 px-5 py-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
