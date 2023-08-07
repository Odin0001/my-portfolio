import { useState } from 'react'
import { Link } from "react-scroll";

const NavItem = ({location, icon, isActive}) => {

  const [time, setTime] = useState(new Date().getHours());
  const [activeNav, setActiveNav] = useState("/");

  return (
    <Link
          to={location}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={isActive}
          className={`${
            activeNav === "/" ? "active" : ""
          } bg-transparent p-3 rounded-full flex ${
            time >= 12 && time < 16
              ? "text-noonOrange"
              : time >= 16 && time < 20
              ? "text-white"
              : time >= 20 || time < 6
              ? "text-nightBlue"
              : time >= 6 && time < 12 && "text-morningDarkBeige"
          } cursor-pointer`}
        >
          {icon}
        </Link>
  )
}

export default NavItem