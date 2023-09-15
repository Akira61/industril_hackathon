import Image from "next/image";
import Navbar from "./components/Navbar";
import "./style/Home.css"
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <main id="Home" className="">
        <Navbar />
        <Banner />
      </main>
    </>
  );
}
