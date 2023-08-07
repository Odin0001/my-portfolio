import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import night from "../../public/night-bg.jpg";
import morning from "../../public/morning-bg.jpg";
import noon from "../../public/noon-bg.jpg";
import sunset from "../../public/sunset-bg.jpg";
import MainSocials from "./MainSocials";
import cv from "../assets/philip jobran cv.pdf";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp, BsTelegram } from "react-icons/bs";

const Header = () => {
  const [time, setTime] = useState(new Date().getHours());

  const [clockTime, setClockTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setClockTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative" id="header">
      {/* NOON TIME MODE */}
      {time >= 12 && time < 16 ? (
        <div>
          <img
            src={noon}
            className="w-full h-full absolute top-0 left-0 object-cover"
          />
          <div className="absolute z-10 flex flex-col w-full gap-5 top-16 md:top-56">
            <div className="flex flex-col-reverse justfiy-center text-center items-center md:flex md:flex-row w-full md:items-center   md:justify-around md:text-left">
              <h1 className="text-2xl md:text-4xl text-white">
                Good day, <br /> <br />
                I'm Philip Jobran, <br /> <br />
                Full Stack Web Developer
              </h1>
              <div className="md:w-96 md:mb-0 w-full mb-10">
                <h2 className="text-4xl md:text-6xl text-transparent bg-gradient-to-r from-noonOrange to-noonLightOrange bg-clip-text animate-neon-noon">
                  {clockTime.toLocaleTimeString()}
                </h2>
                <p className="text-center mt-5 text-gray-800 text-xl italic">
                  next theme at 4 PM
                </p>
              </div>
            </div>
            <div className="text-white md:flex md:flex-row justify-center items-center gap-5 mt-8 flex flex-col">
              <a href={cv} download>
                <button className="w-52 h-14 border border-transparent rounded-md bg-noonLightOrange hover:bg-noonBeige transition duration-300 ease text-gray-800">
                  Download CV
                </button>
              </a>
              <Link
                to="Contacts"
                offset={0}
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="w-52 h-14 border border-white rounded-md hover:bg-noonBeige hover:border-transparent transition duration-300 ease text-gray-800">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : // SUNSET TIME MODE
      time >= 16 && time < 20 ? (
        <div>
          <img
            src={sunset}
            className="w-full h-full absolute top-0 left-0 object-cover"
          />
          <div className="absolute z-10 flex flex-col w-full gap-5 top-16 md:top-56">
            <div className="flex flex-col-reverse justfiy-center text-center items-center md:flex md:flex-row w-full md:items-center   md:justify-around md:text-left">
              <h1 className="text-2xl md:text-4xl text-sunsetDarkOrange">
                Good afternoon, <br /> <br />
                I'm Philip Jobran, <br /> <br />
                Full Stack Web Developer
              </h1>
              <div className="w-96">
                <h2 className="text-4xl md:text-6xl text-transparent bg-gradient-to-r from-sunsetOrange to-sunsetPink bg-clip-text animate-neon-sunset">
                  {clockTime.toLocaleTimeString()}
                </h2>
                <p className="text-center mt-5 md:text-white text-gray-800 text-xl italic">
                  next theme at 8 PM
                </p>
              </div>
            </div>
            <div className="text-white md:flex md:flex-row justify-center items-center gap-5 mt-8 flex flex-col">
              <a href={cv} download>
                <button className="w-52 h-14 border border-transparent rounded-md bg-sunsetDarkOrange hover:bg-sunsetOrange transition duration-300 ease text-gray-800">
                  Download CV
                </button>
              </a>
              <Link
                to="Contacts"
                offset={0}
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="w-52 h-14 border border-sunsetDarkOrange rounded-md hover:bg-sunsetOrange hover:text-gray-800 hover:border-transparent transition duration-300 ease text-sunsetDarkOrange">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : // NIGHT TIME MODE
      time >= 20 || time < 6 ? (
        <div>
          <img
            src={night}
            className="w-full h-full absolute top-0 left-0 object-cover"
          />
          <div className="absolute z-10 flex flex-col w-full gap-5 top-16 md:top-56">
            <div className="flex flex-col-reverse justfiy-center text-center items-center md:flex md:flex-row w-full md:items-center   md:justify-around md:text-left">
              <h1 className="text-2xl md:text-4xl text-white">
                Good evening, <br /> <br />
                I'm Philip Jobran, <br /> <br />
                Full Stack Web Developer
              </h1>
              <div className="w-96">
                <h2 className="text-4xl md:text-6xl text-transparent bg-gradient-to-r from-nightBlue to-nightPurple bg-clip-text animate-neon-night">
                  {clockTime.toLocaleTimeString()}
                </h2>
                <p className="text-center mt-5 text-white text-xl italic">
                  next theme at 6 AM
                </p>
              </div>
            </div>
            <div className="text-white md:flex md:flex-row justify-center items-center gap-5 mt-8 flex flex-col">
              <a href={cv} download>
                <button className="w-52 h-14 border border-transparent rounded-md bg-nightBlue hover:bg-nightLightBlue transition duration-300 ease text-gray-800">
                  Download CV
                </button>
              </a>
              <Link
                to="Contacts"
                offset={0}
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="w-52 h-14 border border-white rounded-md hover:bg-nightLightBlue hover:text-gray-800 hover:border-transparent transition duration-300 ease text-white">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // MORNING TIME MODE
        time >= 6 &&
        time < 12 && (
          <div>
            <img
              src={morning}
              className="w-full h-full absolute top-0 left-0 object-cover"
            />
            <div className="absolute z-10 flex flex-col w-full gap-5 top-16 md:top-56">
              <div className="flex flex-col-reverse justfiy-center text-center items-center md:flex md:flex-row w-full md:items-center md:justify-around md:text-left">
                <h1 className="text-2xl md:text-4xl text-white">
                  Good morning, <br /> <br />
                  I'm Philip Jobran, <br /> <br />
                  Full Stack Web Developer
                </h1>
                <div className="w-96">
                  <h2 className="text-4xl md:text-6xl text-transparent bg-gradient-to-r from-morningPurple to-morningDarkBeige bg-clip-text animate-neon-morning">
                    {clockTime.toLocaleTimeString()}
                  </h2>
                  <p className="text-center mt-5 text-white text-xl italic">
                    next theme at 12 PM
                  </p>
                </div>
              </div>
              <div className="text-white md:flex md:flex-row justify-center items-center gap-5 mt-8 flex flex-col">
                <a href={cv} download>
                  <button className="w-52 h-14 border border-transparent rounded-md bg-morningDarkBeige hover:bg-morningBeige transition duration-300 ease text-gray-800">
                    Download CV
                  </button>
                </a>
                <Link
                  to="Contacts"
                  offset={0}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="w-52 h-14 border border-white rounded-md hover:bg-morningBeige hover:text-gray-800 hover:border-transparent transition duration-300 ease text-white">
                    Let's Talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )
      )}

      <div
        className={`flex flex-col absolute bottom-[calc(20%-6rem)] left-[2rem] z-30 items-center gap-3.5 text-2xl after:content[''] after:w-[1px] after:h-[3rem] ${
          time >= 12 && time < 16
            ? "after:bg-noonOrange"
            : time >= 16 && time < 20
            ? "after:bg-sunsetDarkOrange"
            : time >= 20 || time < 6
            ? "after:bg-nightBlue"
            : time >= 6 && time < 12 && "after:bg-morningDarkBeige"
        }`}
      >
        <MainSocials
          link="https://www.github.com/Odin0001"
          icon={<BsGithub />}
        />
        <MainSocials
          link="https://www.linkedin.com/in/philip-jobran-75bb3a21b/"
          icon={<BsLinkedin />}
        />
        <MainSocials
          link="https://www.facebook.com/philip.jobran"
          icon={<BsFacebook />}
        />
        <MainSocials
          link="https://www.instagram.com/philip.j1/"
          icon={<BsInstagram />}
        />
        <MainSocials link="https://wa.me/963964596819" icon={<BsWhatsapp />} />
        <MainSocials link="https://t.me/Philip00lps" icon={<BsTelegram />} />
      </div>
    </div>
  );
};

export default Header;
