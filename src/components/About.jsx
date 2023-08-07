import { useState } from "react";
import MainPic from "../assets/main-pic1.png";
import { GiLaurelsTrophy, GiProcessor } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { SiOpslevel } from "react-icons/si";
import AboutCard from "./AboutCard";

const About = () => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <section id="About">
      <h5
        className={`${
          time >= 12 && time < 16
            ? "text-gray-800"
            : time >= 16 && time < 20
            ? "text-sunsetPurple"
            : time >= 20 || time < 6
            ? "text-nightLightBlue"
            : time >= 6 && time < 12 && "text-morningPurple"
        }`}
      >
        Get to Know
      </h5>
      <h1
        className={`${
          time >= 12 && time < 16
            ? "text-noonDarkOrange"
            : time >= 16 && time < 20
            ? "text-gray-800"
            : time >= 20 || time < 6
            ? "text-nightBlue"
            : time >= 6 && time < 12 && "text-gray-800"
        }`}
      >
        About Me
      </h1>
      <div className="container grid grid-cols-1 gap-0 md:w-4/5 xl:grid-cols-2 md:gap-16">
        <div className="w-full mx-auto md:mb-[4rem] mb-[3rem] h-max grid">
          <div
            className={`rounded-[2rem] ${
              time >= 12 && time < 16
                ? "noon-bg"
                : time >= 16 && time < 20
                ? "sunset-bg"
                : time >= 20 || time < 6
                ? "night-bg"
                : time >= 6 && time < 12 && "morning-bg"
            } `}
          >
            <img src={MainPic} alt="My Photo" className="rounded-[2rem]" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <AboutCard
              title="Experience"
              desc="2+ Years Working Experience"
              icon={
                <GiLaurelsTrophy
                  size={25}
                  className="mx-auto mb-[1rem] text-white"
                />
              }
            />
            <AboutCard
              title="Clients"
              desc="Who Gained their Trust"
              icon={
                <RiUserStarFill
                  size={25}
                  className="mx-auto mb-[1rem] text-white"
                />
              }
            />
            <AboutCard
              title="Projects"
              desc="10+ Working Projects"
              icon={
                <SiOpslevel
                  size={25}
                  className="mx-auto mb-[1rem] text-white"
                />
              }
            />
          </div>
          <p
            className={`my-[1.5rem] mx-10 sm:mt-[1rem] sm:mx-0 sm:mb-[1.5rem] md:mt-[2rem] md:mx-0 md:mb-[2.6rem] text-justify ${
              time >= 12 && time < 16
                ? "text-gray-800"
                : time >= 16 && time < 20
                ? "text-gray-800"
                : time >= 20 || time < 6
                ? "text-nightLightBlue"
                : time >= 6 && time < 12 && "text-gray-800"
            }`}
          >
            I'm a dedicated 25 years old self-taught full stack web developer
            and graduated from the school of finance and banking. Later, I
            discovered my passion in web development and decided to shift my
            career. I dedicated my time and effort to learn web development
            online by my own until I obtained multiple certificates and managed
            to build small projects during the previous process.
            <br />
            In the present, I'm continuing my never-ending learning journey
            because in this field, you are always a student. My skills and and
            certificates are various including HTML 5, CSS 3, Vanilla Java
            Script, Bootstrap, tailwind CSS, React JS, Next JS 13, Node JS,
            Express JS, Firebase, MongoDB, mySQL, Git, Next-Auth, JWT and OAuth.
            I am flexible to work on various types of projects and perfect
            timing to provide the best quality for my clients. If you are
            interested to have your own project, feel free to contact with me!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
