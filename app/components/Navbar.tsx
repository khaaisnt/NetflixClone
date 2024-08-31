import React from "react";
import Image from "next/image";
import Netflix from "/public/logo-netflix.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-primaryBlack py-[30px] flex justify-between items-center">
        <div>
          <Image src={Netflix} alt="icon" />
        </div>
        <div className="text-white font-medium text-[16px] gap-[24px] flex">
          <a href="">Movies</a>
          <a href="">TV Shows</a>
          <a href="">New & Popular</a>
        </div>
        <div>
          <button className="py-[9px] px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px]">
            Masuk
          </button>
        </div>
      </nav>
    </>
  );
}
