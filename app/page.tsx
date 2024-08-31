import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="bg-primaryBlack w-full h-full px-[80px]">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
