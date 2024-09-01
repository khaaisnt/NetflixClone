import React from "react";
import Image from "next/image";
import TV from "/public/tv-icon.png";
import Mobile from "/public/phone-tablet.png";
import Share from "/public/share-icon.png";
import Child from "/public/child-icon.png";
import { Volkhov } from "next/font/google";

// Mengimpor dan mengkonfigurasi font Volkhov
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] });

export default function Services() {
  return (
    <>
      <div className="py-[180px]">
        <h1
          className={`text-center font-bold text-[40px] mb-[24px] text-white mx-[430px] ${volkhov.className}`}
        >
          Layanan Terbaik yang Tidak Mengecewakan
        </h1>
        <div className="flex justify-between gap-x-[40px] text-white">
          <div className="w-[290px] h-[288px] bg-secondaryBlack p-[24px] rounded-[30px] border-slate-300">
            <Image src={TV} alt="tv" />
            <p className="mt-[20px] mb-[8px] font-medium text-[18px]">
              Tonton langsung di TV
            </p>
            <p className="font-light text-[13px] tracking-widest">
              Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV,
              pemutar Blu-ray, dan banyak lagi
            </p>
          </div>
          <div className="w-[290px] h-[288px] bg-secondaryBlack p-[24px] rounded-[30px] border-slate-300">
            <Image src={Mobile} alt="tv" />
            <p className="mt-[20px] mb-[8px] font-medium text-[18px]">
              Download untuk offline
            </p>
            <p className="font-light text-[13px] tracking-widest">
              Simpan dengan mudah agar selalu ada acara TV dan film yang bisa
              ditonton
            </p>
          </div>
          <div className="w-[290px] h-[288px] bg-secondaryBlack p-[24px] rounded-[30px] border-slate-300">
            <Image src={Share} alt="tv" />
            <p className="mt-[20px] mb-[8px] font-medium text-[18px]">
              Akses berbagai perangkat
            </p>
            <p className="font-light text-[13px] tracking-widest">
              Streaming film dan acara TV tak terbatas di ponsel, tablet,
              laptop, dan TV-mu
            </p>
          </div>
          <div className="w-[290px] h-[288px] bg-secondaryBlack p-[24px] rounded-[30px] border-slate-300">
            <Image src={Child} alt="tv" />
            <p className="mt-[20px] mb-[8px] font-medium text-[18px]">
              Buat profil untuk anak
            </p>
            <p className="font-light text-[13px] tracking-widest">
              Profil anak dilengkapi kontrol orang tua yang dilindungi PIN
              sehingga kamu bisa membatasi rating usia konten yang bisa ditonton
              anak
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
