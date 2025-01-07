import Image from "next/image";
import "./styles/global.css";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <div className="main-page">
      <Navbar></Navbar>
      <About></About>





    </div>
  );
}
