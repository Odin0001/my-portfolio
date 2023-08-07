import React from "react";
import { useState } from "react";

const AboutCard = ({ icon, title, desc }) => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <article
      className={`border ${
        time >= 12 && time < 16
          ? "border-noonDarkOrange hover:bg-noonDarkOrange"
          : time >= 16 && time < 20
          ? "border-sunsetPurple hover:bg-sunsetPurple"
          : time >= 20 || time < 6
          ? "border-nightPurple hover:bg-nightPurple"
          : time >= 6 && time < 12 && "border-morningGray hover:bg-morningGray"
      } w-max md:w-full mx-auto rounded-2xl p-8 text-center transition duration-300 ease`}
    >
      {icon}
      <h5
        className={`text-base ${
          time >= 12 && time < 16
            ? "text-white"
            : time >= 16 && time < 20
            ? "text-gray-800"
            : time >= 20 || time < 6
            ? "text-nightLightBlue"
            : time >= 6 && time < 12 && "text-morningPurple"
        }`}
      >
        {title}
      </h5>
      <small
        className={`text-xs ${
          time >= 12 && time < 16
            ? "text-white"
            : time >= 16 && time < 20
            ? "text-gray-800"
            : time >= 20 || time < 6
            ? "text-nightLightBlue"
            : time >= 6 && time < 12 && "text-morningPurple"
        }`}
      >
        {desc}
      </small>
    </article>
  );
};

export default AboutCard;
