import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Jargon from "./components/Jargon";
import Popular from "./components/Popular";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <main className="bg-primaryBlack w-full h-full px-[80px]">
      <Navbar />
      <Hero />
      <Services />
      <Jargon />
      <Popular />
      <Subscribe />
    </main>
  );
}
