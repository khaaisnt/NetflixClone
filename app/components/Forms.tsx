import React from "react";

export default function Forms() {
  return (
    <>
      <div className="pb-[180px]">
        <div className="w-full bg-formsPurple py-[48px] px-[330px] rounded-[30px]">
          <h1 className="font-semibold text-[20px] text-center mb-[24px]">
            Berlangganan Untuk Mendapatkan Informasi Terbaru dan Menjadi Anggota
            Kami
          </h1>
          <div className="flex justify-center gap-x-[24px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-[345px] h-[48px] bg-formsInputPurple text-[16px] text-white px-[24px] rounded-[15px] focus:outline-none"
            />
            <button className="py-[9px] px-[28px] font-medium text-[16px] text-white bg-gradient-to-br from-RedOne to-RedTwo shadow-lg shadow-red-800/80 rounded-[15px] hover:bg-gradient-to-tl hover:from-RedOne hover:to-RedTwo duration-200">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
