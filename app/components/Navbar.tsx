"use client";
import React, { useState } from "react";
import Image from "next/image";
import Netflix from "/public/logo-netflix.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-primaryBlack py-[30px] flex justify-between items-center">
        <div>
          <Image src={Netflix} alt="icon" />
        </div>
        <div className="hidden text-white font-medium text-[16px] gap-[24px] md:flex">
          <a href="" className="hover:text-slate-300 duration-200">
            Movies
          </a>
          <a href="" className="hover:text-slate-300 duration-200">
            TV Shows
          </a>
          <a href="" className="hover:text-slate-300 duration-200">
            New & Popular
          </a>
        </div>
        <div>
          <button className="hidden md:block py-[9px] px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
            Masuk
          </button>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white text-[20px]">
            ☰
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden transition-all bg-primaryBlack text-white font-medium text-[16px] flex flex-col gap-[24px] p-[20px]">
          <a href="" className="hover:text-slate-300 duration-200">
            Movies
          </a>
          <a href="" className="hover:text-slate-300 duration-200">
            TV Shows
          </a>
          <a href="" className="hover:text-slate-300 duration-200">
            New & Popular
          </a>
          <button className="py-[9px] px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
            Masuk
          </button>
        </div>
      )}
    </>
  );
}
