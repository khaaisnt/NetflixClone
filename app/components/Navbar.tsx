import React from "react";
import Image from "next/image";
import Netflix from "/public/logo-netflix.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-primaryBlack py-[30px] flex justify-between">
        <div>
          <Image src={Netflix} alt="gambar" />
        </div>
      </nav>
    </>
  );
}
