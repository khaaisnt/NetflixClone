import React from "react";
import Image from "next/image";
import TV from "/public/ilustration-tv.png";

export default function Jargon() {
  return (
    <>
      <div className="flex pb-[180px] justify-between items-center gap-x-[110px]">
        <Image src={TV} alt="tv" />
        <h1 className="text-white font-bold text-[40px]">
          Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
        </h1>
      </div>
    </>
  );
}
