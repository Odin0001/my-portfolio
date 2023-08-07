import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { TbSql, TbBrandNextjs } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { DiGit } from "react-icons/di";
import ExpItem from "./ExpItem";

const Experience = () => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <section id="Experience">
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
        Skills I Have
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
        My Experiences
      </h1>
      <div className="w-3/4 mx-auto grid xl:grid xl:grid-cols-2 grid-cols-1 xl:gap-[2rem] gap-[1rem]">
        <div
          className={`bg-transparent xl:py-[2.4rem] xl:px-[3rem] p-[2rem] mx-auto xl:w-4/5 w-full rounded-[2rem] border ${
            time >= 12 && time < 16
              ? "border-noonBeige  hover:bg-noonBeige"
              : time >= 16 && time < 20
              ? "border-sunsetPurple hover:bg-sunsetPurple"
              : time >= 20 || time < 6
              ? "border-nightBlue hover:bg-nightBlue"
              : time >= 6 &&
                time < 12 &&
                "border-morningGray hover:bg-morningGray"
          } transition duration-300 ease`}
        >
          <h3
            className={`text-center mb-[2rem] ${
              time >= 12 && time < 16
                ? "text-noonDarkOrange"
                : time >= 16 && time < 20
                ? "text-gray-300"
                : time >= 20 || time < 6
                ? "text-nightLightBlue"
                : time >= 6 && time < 12 && "text-morningPurple"
            }`}
          >
            Frontend Development
          </h3>
          <div className="sm:grid sm:grid-cols-2 grid grid-cols-1 sm:justify-items-start justify-items-center gap-y-[2rem] p-[1rem] xl:p-0">
            <ExpItem
              icon={<AiOutlineHtml5 size={25} className="xl:mx-1.5 mx-0" />}
              desc="HTML"
            />
            <ExpItem
              icon={<SiCss3 size={25} className="xl:mx-1.5 mx-0" />}
              desc="CSS"
            />
            <ExpItem
              icon={<IoLogoJavascript size={25} className="xl:mx-1.5 mx-0" />}
              desc="JavaScript"
            />
            <ExpItem
              icon={<FaBootstrap size={25} className="xl:mx-1.5 mx-0" />}
              desc="Bootstrap"
            />
            <ExpItem
              icon={<SiTailwindcss size={25} className="xl:mx-1.5 mx-0" />}
              desc="TailwindCSS"
            />
            <ExpItem
              icon={<FaReact size={25} className="xl:mx-1.5 mx-0" />}
              desc="React JS"
            />
            <ExpItem
              icon={<TbBrandNextjs size={25} className="xl:mx-1.5 mx-0" />}
              desc="Next JS"
            />
          </div>
        </div>
        <div
          className={`bg-transparent xl:py-[2.4rem] xl:px-[3rem] p-[2rem] mx-auto xl:w-4/5 w-full rounded-[2rem] border ${
            time >= 12 && time < 16
              ? "border-noonBeige  hover:bg-noonBeige"
              : time >= 16 && time < 20
              ? "border-sunsetPurple hover:bg-sunsetPurple"
              : time >= 20 || time < 6
              ? "border-nightBlue hover:bg-nightBlue"
              : time >= 6 &&
                time < 12 &&
                "border-morningGray hover:bg-morningGray"
          } transition duration-300 ease`}
        >
          <h3
            className={`text-center mb-[2rem] ${
              time >= 12 && time < 16
                ? "text-noonDarkOrange"
                : time >= 16 && time < 20
                ? "text-gray-300"
                : time >= 20 || time < 6
                ? "text-nightLightBlue"
                : time >= 6 && time < 12 && "text-morningPurple"
            }`}
          >
            Backend Development & Other Experiences
          </h3>
          <div className="sm:grid sm:grid-cols-2 grid grid-cols-1 sm:justify-items-start justify-items-center gap-y-[2rem] p-[1rem] xl:p-0">
            <ExpItem
              icon={<SiNodedotjs size={25} className="xl:mx-1.5 mx-0" />}
              desc="Node JS"
            />
            <ExpItem
              icon={<SiExpress size={25} className="xl:mx-1.5 mx-0" />}
              desc="Express JS"
            />
            <ExpItem
              icon={<SiMongodb size={25} className="xl:mx-1.5 mx-0" />}
              desc="MongoDB"
            />
            <ExpItem
              icon={<TbSql size={25} className="xl:mx-1.5 mx-0" />}
              desc="MySQL"
            />
            <ExpItem
              icon={<SiFirebase size={25} className="xl:mx-1.5 mx-0" />}
              desc="Firebase"
            />
            <ExpItem
              icon={<TbBrandNextjs size={25} className="xl:mx-1.5 mx-0" />}
              desc="Next-Auth"
            />
            <ExpItem
              icon={<SiJsonwebtokens size={25} className="xl:mx-1.5 mx-0" />}
              desc="JWT"
            />
            <ExpItem
              icon={<MdEmail size={25} className="xl:mx-1.5 mx-0" />}
              desc="OAuth"
            />
            <ExpItem
              icon={<DiGit size={25} className="xl:mx-1.5 mx-0" />}
              desc="Git"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
