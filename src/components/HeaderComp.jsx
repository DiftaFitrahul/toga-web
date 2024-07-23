import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/kkn.png";
import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import Sidebar from "./SidebarComp";

export const SidebarContext = createContext();
export default function HeaderComp() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className=" w-creen h-[70px]  ">
      <div className="flex w-screen h-[70px] flex-row items-center justify-evenly">
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Picture of the author"
              unoptimized
              className=" w-[70px] pr-[10px]"
            />
          </Link>
          <p className="text-[#212b35] text-3xl font-bold">myTOGA</p>
        </div>

        <button
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          className="block xl:hidden ml-10 items-center justify-center flex h-[30px] min-[700px]:h-[0]"
        >
          <FiMenu className="text-[#697786] hover:text-[#303943] absolute text-[32px] right-[20px]  " />
        </button>

        <div className="flex flex-shrink-0 gap-5 items-center justify-center hidden xl:block ">
          <Link
            href="/"
            className="text-[#697786] my-10 mx-5 hover:cursor-pointer hover:text-[#303943] hover:font-semibold transition ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>
      <SidebarContext.Provider
        value={{ showSidebar: showSidebar, setShowSidebar }}
      >
        <Sidebar />
      </SidebarContext.Provider>
    </nav>
  );
}
