import React from "react";
import { useState } from "react";

const MainSocials = ({ link, icon }) => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <div>
      <a
        href={link}
        target="_blank"
        className={`${
          time >= 12 && time < 16
            ? "text-noonOrange hover:text-noonLightOrange"
            : time >= 16 && time < 20
            ? "text-sunsetOrange hover:text-sunsetPink"
            : time >= 20 || time < 6
            ? "text-nightBlue hover:text-nightPurple"
            : time >= 6 &&
              time < 12 &&
              "text-morningDarkBeige hover:text-morningPurple"
        } transition duration-300 ease`}
      >
        {icon}
      </a>
    </div>
  );
};

export default MainSocials;
