import React from "react";
import { useState } from "react";

const ExpItem = ({ icon, desc }) => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <article
      className={`flex gap-[1rem] ${
        time >= 12 && time < 16
          ? "text-noonDarkOrange"
          : time >= 16 && time < 20
          ? "text-gray-300"
          : time >= 20 || time < 6
          ? "text-nightLightBlue"
          : time >= 6 && time < 12 && "text-morningPurple"
      }`}
    >
      {icon}
      <h4>{desc}</h4>
    </article>
  );
};

export default ExpItem;
