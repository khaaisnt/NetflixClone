import React from "react";

export default function Forms() {
  return (
    <>
      <div className="pb-[60px] md:pb-[180px]">
        <div className="w-full bg-formsPurple p-[24px] md:py-[48px] md:px-[330px] rounded-[30px]">
          <h1 className="font-semibold text-[16px] md:text-[20px] text-center mb-[24px]">
            Berlangganan Untuk Mendapatkan Informasi Terbaru dan Menjadi Anggota
            Kami
          </h1>
          <div className="md:flex justify-center gap-x-[24px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full md:w-[345px] mb-4 md:mb-0 h-[48px] bg-formsInputPurple text-[16px] text-white px-[24px] rounded-[15px] focus:outline-none"
            />
            <button className="py-[9px] w-full md:max-w-[180px] px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
