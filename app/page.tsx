import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-primaryBlack w-full h-full px-[80px]">
      <Navbar />
      <Hero />
    </main>
  );
}
