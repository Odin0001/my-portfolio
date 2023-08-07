import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <div
      className={`${
        time >= 12 && time < 16
          ? "bg-noonLightOrange"
          : time >= 16 && time < 20
          ? "bg-sunsetOrange"
          : time >= 20 || time < 6
          ? "bg-nightBlack"
          : time >= 6 && time < 12 && "bg-morningBeige"
      }`}
    >
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
