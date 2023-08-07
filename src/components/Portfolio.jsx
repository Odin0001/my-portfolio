import { useState } from "react";
import project1 from "../assets/lha-nutritionists.jpg";
import project2 from "../assets/lha-kitchen.jpg";
import project3 from "../assets/imdb.jpg";

const portData = [
  {
    id: 1,
    image: project1,
    title: "LHA Nutritionists",
    github: "https://github.com/Odin0001/LHA-Nutritionists",
    demo: "http://lha-nutritionists.rf.gd/",
  },
  {
    id: 2,
    image: project2,
    title: "LHA Kitchen",
    github: "https://github.com/Odin0001/LHA-Kitchen",
    demo: "http://lha-kitchen.rf.gd/",
  },
  {
    id: 3,
    image: project3,
    title: "IMDB Clone",
    github: "https://github.com/Odin0001/IMDB",
    demo: "https://imdb-philipjobran009-gmailcom.vercel.app/",
  },
];

const Portfolio = () => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <section id="Portfolio">
      <h5
        className={`${
          time >= 12 && time < 16
            ? "text-text-gray-800"
            : time >= 16 && time < 20
            ? "text-sunsetPurple"
            : time >= 20 || time < 6
            ? "text-nightLightBlue"
            : time >= 6 && time < 12 && "text-morningPurple"
        }`}
      >
        My Recent Work
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
        Portfolio
      </h1>
      <div className="w-3/4 mx-auto xl:grid xl:grid-cols-3 xl:gap-[2.5rem] lg:grid lg:grid-cols-2 lg:gap[1.2rem] grid grid-cols-1 gap-[1rem]">
        {portData.map(({ id, image, title, github, demo }) => {
          return (
            <article
              key={id}
              className={`${
                time >= 12 && time < 16
                  ? "bg-transparent hover:bg-noonBeige border-noonBeige"
                  : time >= 16 && time < 20
                  ? "bg-transparent hover:bg-sunsetPurple border-sunsetPurple"
                  : time >= 20 || time < 6
                  ? "bg-transparent hover:bg-nightBlue border-nightPurple"
                  : time >= 6 &&
                    time < 12 &&
                    "bg-morningPurple hover:bg-morningGray border-morningDarkBeige"
              } p-[1.2rem] rounded-[2rem] border transition duration-300 ease`}
            >
              <div className="rounded-[1.5rem] overflow-hidden">
                <img src={image} alt={title} />
              </div>
              <h3 className="mt-[1.5rem] mx-0 mb-[2rem] text-white">{title}</h3>
              <div className="flex gap-[1rem] mb-[1rem]">
                <a
                  href={github}
                  className={`w-max block py-3 px-5 rounded-[1rem] cursor-pointer border transition duration-300 ease ${
                    time >= 12 && time < 16
                      ? "bg-noonDarkOrange hover:bg-noonOrange"
                      : time >= 16 && time < 20
                      ? "bg-sunsetDarkOrange hover:bg-sunsetOrange"
                      : time >= 20 || time < 6
                      ? "bg-nightBlue hover:bg-nightLightBlue"
                      : time >= 6 &&
                        time < 12 &&
                        "bg-morningDarkBeige hover:bg-morningBeige"
                  } text-gray-800 border border-transparent`}
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className={`${
                    time >= 12 && time < 16
                      ? "hover:bg-noonOrange"
                      : time >= 16 && time < 20
                      ? "hover:bg-sunsetOrange"
                      : time >= 20 || time < 6
                      ? "hover:bg-nightLightBlue text-nightPurple"
                      : time >= 6 && time < 12 && "hover:bg-morningBeige"
                  } bg-transparent w-max block bg-transparent py-3 px-5 rounded-[1rem] cursor-pointer border transition duration-300 ease`}
                  target="_blank"
                >
                  Preview
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
