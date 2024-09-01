import React from "react";
import Image from "next/image";
import TV from "/public/ilustration-tv.png";
import { Volkhov } from "next/font/google";

// Mengimpor dan mengkonfigurasi font Volkhov
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] });

export default function Jargon() {
  return (
    <>
      <div className="flex pb-[180px] justify-between items-center gap-x-[110px]">
        <Image src={TV} alt="tv" />
        <h1 className={`text-white font-bold text-[40px] ${volkhov.className}`}>
          Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
        </h1>
      </div>
    </>
  );
}
