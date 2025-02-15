import React from "react";
import Image from "next/image";
import Star from "/public/rate-star.png";
import Peaky from "/public/peaky.png";
import SpiderMan from "/public/spiderman-way.png";
import Arcane from "/public/arcane.png";
import Joker from "/public/joker.png";
import { Volkhov } from "next/font/google";

// Mengimpor dan mengkonfigurasi font Volkhov
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] });

export default function Popular() {
  return (
    <>
      <div className="pb-[60px] md:pb-[180px]">
        <div className="md:flex justify-between items-end text-white mb-[32px]">
          <div className="mb-5 md:mb-0 text-center md:text-start">
            <h1 className={`font-bold text-[28px] md:text-[40px] ${volkhov.className}`}>
              Film dan Acara TV
            </h1>
            <h1 className={`font-bold text-[28px] md:text-[40px] ${volkhov.className}`}>
              Populer Bulan Ini
            </h1>
          </div>
          <div>
            <button className="py-[9px] w-full px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
              Lihat Semua
            </button>
          </div>
        </div>

        {/* card */}
        <div className="grid-cols-1 space-y-10 md:space-x-0 md:flex justify-between gap-x-[40px] text-white">
          <div className="p-[24px] bg-secondaryBlack duration-200 shadow hover:shadow-slate-600/80 hover:shadow-lg border border-borderGray rounded-[30px]">
            <Image src={Peaky} className="w-full" alt="peaky blinders" />
            <p className="mt-[16px] font-medium text-[18px] mb-[6px]">
              Peaky Blinders
            </p>
            <p className="text-[16px] mb-[7px]">Crime, Drama</p>
            <div className="flex items-center">
              <Image src={Star} alt="star" />
              <p className="text-[16px] ml-[8px]">8.8/10 IMDb</p>
            </div>
          </div>
          <div className="p-[24px] bg-secondaryBlack duration-200 shadow hover:shadow-slate-600/80 hover:shadow-lg border border-borderGray rounded-[30px]">
            <Image src={SpiderMan} className="w-full" alt="peaky blinders" />
            <p className="mt-[16px] font-medium text-[18px] mb-[6px]">
              Spider-Man: No Way Home
            </p>
            <p className="text-[16px] mb-[7px]">Action, Adventure, Fantasy</p>
            <div className="flex items-center">
              <Image src={Star} alt="star" />
              <p className="text-[16px] ml-[8px]">8.8/10 IMDb</p>
            </div>
          </div>
          <div className="p-[24px] bg-secondaryBlack duration-200 shadow hover:shadow-slate-600/80 hover:shadow-lg border border-borderGray rounded-[30px]">
            <Image src={Arcane} className="w-full" alt="peaky blinders" />
            <p className="mt-[16px] font-medium text-[18px] mb-[6px]">
              Arcane: League of Legends
            </p>
            <p className="text-[16px] mb-[7px]">Animation, Action, Adventure</p>
            <div className="flex items-center">
              <Image src={Star} alt="star" />
              <p className="text-[16px] ml-[8px]">9.2/10 IMDb</p>
            </div>
          </div>
          <div className="p-[24px] bg-secondaryBlack duration-200 shadow hover:shadow-slate-600/80 hover:shadow-lg border border-borderGray rounded-[30px]">
            <Image src={Joker} className="w-full" alt="peaky blinders" />
            <p className="mt-[16px] font-medium text-[18px] mb-[6px]">Joker</p>
            <p className="text-[16px] mb-[7px]">Crime, Drama, Thriller</p>
            <div className="flex items-center">
              <Image src={Star} alt="star" />
              <p className="text-[16px] ml-[8px]">8.4/10 IMDb</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
