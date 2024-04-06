"use client";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useEffect, useCallback } from "react";

const Skills = () => {
  const data = [
    {
      title: "FRONTEND",
      desc: [
        "HTML 5",
        "CSS 3",
        "Javascript",
        "React JS",
        "Next JS",
        "Framer Motion",
        "Bootstrap",
        "Tailwind CSS",
      ],
      img: "https://wallpaperaccess.com/full/2109964.jpg"
    },
    {
      title: "BACKEND",
      desc: [
        "Node JS",
        "Express JS",
        "Axios",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "JWT",
        "Django",
      ],
      img: "https://src.n-ix.com/uploads/2023/10/10/ce4ea3a1-1181-4b56-ae0a-dc2cd9d31846.webp"
    },
    {
      title: "OTHER SKILLS",
      desc: ["GIT", "Github", "MVC", "Figma"],
      img: "https://images.pexels.com/photos/7546979/pexels-photo-7546979.jpeg?cs=srgb&dl=pexels-abdul-a-7546979.jpg&fm=jpg"
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let next = document.querySelector(".next");
      let prev = document.querySelector(".prev");

      const appending = () => {
        let items = document.querySelectorAll(".item");
        document.querySelector(".slide").appendChild(items[0]);
      };

      const prepending = () => {
        let items = document.querySelectorAll(".item");
        document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
      };

      next.addEventListener("click", appending);
      prev.addEventListener("click", prepending);

      return () => {
        next.removeEventListener("click", appending);
        prev.removeEventListener("click", prepending);
      };
    }
  }, []);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-16 md:text-6xl md:mt-32 dark:text-white text-gray-800">
        Skills
      </h2>
      <div className="relative w-full h-screen">
        <div className="container lg:w-full">
          <div className="slide">
            {data.map((item, index) => (
              <div
              key={index}
              className="item md:w-[120px] md:h-[80px]"
              style={{
                backgroundImage: `url(${item.img})`
              }}
              >
                <div className="content">
                  <div className="name">{item.title}</div>
                  <div className="des">
                    <ul>
                      {item.desc.map((word, index) => (
                        <li key={index} className='text-xl extra-light'>- {word}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          <div className="button">
            <button className="prev">
              <MdKeyboardDoubleArrowLeft size={30} className="mx-auto" />
            </button>
            <button className="next">
              <MdKeyboardDoubleArrowRight size={30} className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;