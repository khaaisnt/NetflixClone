import React from "react";
import Image from "next/image";
import Check from "/public/cheklist.png";
import { Volkhov } from "next/font/google";

// Mengimpor dan mengkonfigurasi font Volkhov
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] });

export default function Subscribe() {
  return (
    <>
      <div className="text-white pb-[60px] md:pb-[180px]">
        <div className="md:mx-[430px] mx-auto text-center mb-[24px]">
          <h1 className={`font-bold text-[28px] md:text-[40px] ${volkhov.className}`}>
            Pilih Paket yang Cocok Untukmu
          </h1>
        </div>
        <div className="md:flex grid-cols-1 space-y-10 md:space-y-0 justify-center md:justify-between gap-x-[40px]">
          <button className="w-full h-[600px] bg-secondaryBlack hover:bg-gradient-to-br hover:from-secondaryBlack hover:via-gradientGray hover:scale-105 duration-200 hover:to-secondaryBlack hover:border hover:border-borderGray rounded-[30px] px-[24px] py-[36px]">
            <div className="text-center">
              <p className="font-semibold text-[20px]">Basic</p>
              <p className="text-RedTwo font-semibold my-[24px] text-[32px]">
                Rp 120,000
                <span className="text-white text-[16px] font-normal">
                  /bulan
                </span>
              </p>
            </div>
            <div className="mb-[49px]">
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Ponsel, Tablet, Komputer, TV</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">No Ads</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Batalkan Kapan Saja</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Kualitas Video Baik</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 480p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} className="hidden" alt="check" />
                <p className="ml-[36px]">Resolusi 720p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} className="hidden" alt="check" />
                <p className="ml-[36px]">Resolusi 1080p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} className="hidden" alt="check" />
                <p className="ml-[36px]">Resolusi 4K+HDR</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-[9px] px-[28px] font-medium text-[16px] text-white border border-white shadow-lg hover:shadow-red-800/80 hover:border-none rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
                Pilih Paket
              </button>
            </div>
          </button>
          {/* standart */}
          <button className="w-full h-[600px] bg-secondaryBlack hover:bg-gradient-to-br hover:from-secondaryBlack hover:via-gradientGray hover:scale-105 duration-200 hover:to-secondaryBlack hover:border hover:border-borderGray rounded-[30px] px-[24px] py-[36px]">
            <div className="text-center">
              <p className="font-semibold text-[20px]">Standart</p>
              <p className="text-RedTwo font-semibold my-[24px] text-[32px]">
                Rp 153,000
                <span className="text-white text-[16px] font-normal">
                  /bulan
                </span>
              </p>
            </div>
            <div className="mb-[49px]">
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Ponsel, Tablet, Komputer, TV</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">No Ads</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Batalkan Kapan Saja</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Kualitas Video Baik</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 480p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 720p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 1080p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} className="hidden" alt="check" />
                <p className="ml-[36px]">Resolusi 4K+HDR</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-[9px] px-[28px] font-medium text-[16px] text-white border border-white shadow-lg hover:shadow-red-800/80 hover:border-none rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
                Pilih Paket
              </button>
            </div>
          </button>
          <button className="w-full h-[600px] bg-secondaryBlack hover:bg-gradient-to-br hover:from-secondaryBlack hover:via-gradientGray hover:scale-105 duration-200 hover:to-secondaryBlack hover:border hover:border-borderGray rounded-[30px] px-[24px] py-[36px]">
            <div className="text-center">
              <p className="font-semibold text-[20px]">Premium</p>
              <p className="text-RedTwo font-semibold my-[24px] text-[32px]">
                Rp 186,000
                <span className="text-white text-[16px] font-normal">
                  /bulan
                </span>
              </p>
            </div>
            <div className="mb-[49px]">
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Ponsel, Tablet, Komputer, TV</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">No Ads</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Batalkan Kapan Saja</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Kualitas Video Baik</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 480p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 720p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 1080p</p>
              </div>
              <div className="flex mb-[14px]">
                <Image src={Check} alt="check" />
                <p className="ml-[12px]">Resolusi 4K+HDR</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-[9px] px-[28px] font-medium text-[16px] text-white border border-white shadow-lg hover:shadow-red-800/80 hover:border-none rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
                Pilih Paket
              </button>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
