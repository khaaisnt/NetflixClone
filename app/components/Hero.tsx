import React from "react";
import Image from "next/image";
import SpiderMan from "/public/Img-hero.png";
import { Volkhov } from "next/font/google";

// Mengimpor dan mengkonfigurasi font Volkhov
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] });

export default function Hero() {
  return (
    <>
      <div className="flex justify-between items-center gap-[40px] pt-[40px]">
        {/* text head */}
        <div className="text-white max-w-[640px]">
          <h1 className={`text-[56px] font-bold ${volkhov.className}`}>
            {/* Menggunakan Volkhov hanya pada h1 */}
            Nikmati Tontonan Dimana Saja, dan Kapan Saja
          </h1>
          <p className="text-[16px] font-light mt-[12px] mb-[24px] tracking-wider">
            Tonton apa saja secara online dari komputer pribadi atau di
            perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix,
            dan gunakan download untuk menonton saat kamu di perjalanan dan
            tidak punya koneksi Internet.
          </p>
          <button className="py-[9px] px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
            Daftar Sekarang
          </button>
        </div>
        {/* hero image */}
        <div className="max-w-[617px]">
          <Image src={SpiderMan} alt="SpiderMan Image" />
        </div>
      </div>
    </>
  );
}
