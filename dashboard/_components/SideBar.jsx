"use client"
import { CourseCountContext } from "@/app/_context/CourseCountContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LayoutDashboard, Menu, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

function SideBar() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
  ]

  const {totalCourse, setTotalCourse}=useContext(CourseCountContext)
  const path=usePathname();
  return (
    <div className="h-screen shadow-md p-5">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-xl">ClassEngine.ai</h2>
      </div>
      <div className="mt-10">
        <Link href={'/create'} className="w-full">
        <Button className="w-full">+ Buat Baru</Button>
        </Link>
        <div className="mt-5">
          {MenuList.map((menu, index) => (
            <div key={index} className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3 ${path==menu.path&&`bg-slate-200`}`}>
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]">
        <h2 className="text-lg mb-2">Total Kursus mu : {totalCourse}</h2>
        <p>Ayo buat lagi!</p>
      </div>
    </div>
  );
}

export default SideBar;
