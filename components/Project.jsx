"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import nutritionists from "../public/lha-nutritionists.png";
import kitchen from "../public/lha-kitchen.png";
import imdb from "../public/imdb.png";
import gigachat from '../public/gigachat.jpg'

const projectData = [
  {
    title: "LHA Nutritionists",
    img: nutritionists,
    desc: "Multilingual Website",
    link: "http://lha-nutritionists.rf.gd",
    github: "https://github.com/Odin0001/LHA-Nutritionists",
  },
  {
    title: "LHA Kitchen",
    img: kitchen,
    desc: "CRUD Operations with Authentication",
    link: "https://lhakitchen.000webhostapp.com/",
    github: "https://github.com/Odin0001/LHA-Kitchen",
  },
  {
    title: "IMDB Clone",
    img: imdb,
    desc: "IMDB API with Next JS",
    link: "https://imdb-philipjobran009-gmailcom.vercel.app",
    github: "https://github.com/Odin0001/IMDB",
  },
  {
    title: "Gigachat",
    img: gigachat,
    desc: "Websockets With Express Server",
    link: "https://gigachat-5ug4.onrender.com",
    github: "https://github.com/Odin0001/Gigachat",
  },
];

const Project = () => {
  return (    
    <Swiper
      spacebetween={10}
      freemode='true'
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[500px] sm:h-[400px] w-[50vw] sm:w-full"
      style={{
        "--swiper-pagination-color": "#075985",
        "--swiper-pagination-bullet-inactive-color": "#fff",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "15px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      {projectData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-[50vh] sm:h-[20vh] sm:mt-28 rounded-md flex justify-center items-center overflow-hidden sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer relative"
          >
            <div className="flex items-center justify-center relative overflow-hidden w-full h-full group">
              <Image
                src={item.img}
                alt={item.title}
                fill
                objectFit="cover"
                loading="eager"
                className="rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-800 to-[#4a22bd] opacity-0 rounded-md group-hover:opacity-80 transition-all duration-300"></div>
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-28 group-hover:xl:-translate-y-0 transition-all duration-300">
                <div className="flex items-center justify-center gap-x-2 text-lg sm:text-sm tracking-[0.2em] sm:tracking-wide">
                  <a
                    href={item.link}
                    target="_blank"
                    className="delay-100 light bg-gray-300 text-black py-3 px-6 sm:py-2 sm:px-4 rounded-lg"
                  >
                    Live
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 light bg-black text-white py-3 px-6 sm:py-2 sm:px-4 rounded-lg"
                  >
                    Github
                  </a>
                </div>
                <h2 className="text-center text-2xl sm:text-lg my-3 light tracking-wider">
                  {item.title}
                </h2>
                <h3 className="text-center text-2xl sm:text-sm tracking-wider">
                  {item.desc}
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Project;
