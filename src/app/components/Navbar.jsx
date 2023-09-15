"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBarsStaggered,
  faXmark,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const [icon, setIcon] = useState(faBarsStaggered);
  const [menu, setMenu] = useState("top-[-100%]");

  function ToggleMenu(event) {
    //icon toggle
    icon == faBarsStaggered ? setIcon(faXmark) : setIcon(faBarsStaggered);
    //show and hide menu
    menu == "top-[-100%]" ? setMenu("top-[9%]") : setMenu("top-[-100%]");
  }

  return (
    <>
      <header className="font-[Exo 2] md:sticky top-0">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
          <div className="flex items-center gap-6 text-white">
            <FontAwesomeIcon
              className="text-3xl cursor-pointer md:hidden"
              icon={icon}
              onClick={(e) => ToggleMenu(e)}
            />
            <a className="hover:underline hover:cursor-pointer">تسجيل دخول</a>
            <a className="cta" href="/dashboard">
                <button className=" bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-sm hover:bg-slate-700">
                  أنظم الينا
                </button>
            </a>
          </div>
          <div
            className={
              "md:static absolute duration-500 md:bg-inherit bg-gray-800 md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 shadow-xl " +
              menu
            }
          >
            <ul className="flex text-gray-400 md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li>
                <a className="hover:text-white" href="#">
                  الرائيسية
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  الدعم الفني
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  تعرف علينا
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <a href="/">
              <img className="h-24 mr-3" src="/logo.png" alt="Albrmagawi" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
