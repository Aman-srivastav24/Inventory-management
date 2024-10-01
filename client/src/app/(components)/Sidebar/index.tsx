"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollasped } from "@/state";
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface sidebarLinksProps{
    href:string;
    icon:LucideIcon;
    label:string;
    isCollasped:boolean;
}

const SidebarLink = ({href,icon:Icon,label,isCollasped}:sidebarLinksProps)=>{
    const pathname = usePathname();
    const isActive = pathname===href || (pathname==="/" && href==="/dashboard");

    return (
        <Link href={href}>
        <div className={`cursor-pointer flex items-center ${isCollasped?"justify-center py-4":"justify-start px-8 py-4"} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive?"bg-blue-200 text-white":""}`}>
            <Icon className="w-6 h-6 !text-gray-700"/>
            <span className={`${isCollasped?"hidden":"block"} font-medium text-gray-700`}>{label}</span>
        </div>
        </Link>
    )

}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollasped = useAppSelector(
    (state) => state.global.isSidebarCollasped
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollasped(!isSidebarCollasped));
  };

  const sidebarClassNames = `flex flex-col fixed ${
    isSidebarCollasped ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* Top Logo */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollasped ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollasped ? "hidden" : "block"
          }`}
        >
          DayStock
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollasped={isSidebarCollasped}/>
        <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollasped={isSidebarCollasped}/>
        <SidebarLink href="/products" icon={Clipboard} label="Products" isCollasped={isSidebarCollasped}/>
        <SidebarLink href="/users" icon={User} label="Users" isCollasped={isSidebarCollasped}/>
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollasped={isSidebarCollasped}/>
        <SidebarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isCollasped={isSidebarCollasped}/>
      </div>
      {/* footer */}
      <div className={`${isSidebarCollasped?"hidden":"block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Daystock
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
