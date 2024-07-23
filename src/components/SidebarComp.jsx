import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/kkn.png";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SidebarContext } from "@/components/HeaderComp";

const Sidebar = () => {
  const router = useRouter();
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  return (
    <div
      className={`bg-neutral-100 text-white   h-screen z-[999]  pb-5 pt-4 z-[10] fixed right-0 top-0 transition-all duration-300 ${
        showSidebar ? "w-[200px] sm:w-64" : "w-0 "
      }`}
    >
      <div className="flex justify-between items-center px-3 mb-4 w-full ">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-[#697786] transition easy-in hover:text-[#303943]  font-bold w-[30px] sm:w-[40px] h-[40px] mr-2"
        >
          X
        </button>
      </div>
      <div
        className={`flex flex-col w-full justify-start 
         h-[120px] px-3`}
      >
        <Link
          href="/"
          className="text-[#697786] hover:text-[#303943] pl-3 pt-4  px-full w-full  rounded-xl font-semibold"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
