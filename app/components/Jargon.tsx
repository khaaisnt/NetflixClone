import React from "react";
import Image from "next/image";
import TV from "/public/ilustration-tv.png";
import { Volkhov } from "next/font/google";

// Mengimpor dan mengkonfigurasi font Volkhov
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] });

export default function Jargon() {
  return (
    <>
      <div className="md:flex mx-auto md:mx-0 justify-center grid-cols-1 pb-[180px] md:justify-between gap-x-[110px] items-center">
        <Image src={TV} alt="tv" />
        <h1 className={`text-white font-bold text-[28px] mt-5 md:mt-0 md:text-[40px] ${volkhov.className} text-center`}>
          Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
        </h1>
      </div>
    </>
  );
}
