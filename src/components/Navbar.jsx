import { useState } from "react";
import { Link } from "react-scroll";
import { BiHomeAlt2, BiUserCircle } from "react-icons/bi";
import { BsBookmarkCheck } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import NavItem from "./NavItem";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");
  const [time, setTime] = useState(new Date().getHours());

  return (
    <div>
      <nav className="bg-[rgba(255, 255, 255, 0.1)] w-max flex py-3 px-7 fixed z-20 left-1/2 -translate-x-1/2 bottom-8 gap-3.5 rounded-[48px] backdrop-blur-lg">
        {/* HOME LINK */}
        <NavItem
          location="header"
          isActive={() => setActiveNav("/")}
          icon={<BiHomeAlt2 size={20} />}
        />

        {/* ABOUT LINK */}
        <NavItem
          location="About"
          isActive={() => setActiveNav("/about")}
          icon={<BiUserCircle size={20} />}
        />

        {/* EXPERIENCES LINK */}
        <NavItem
          location="Experience"
          isActive={() => setActiveNav("/experience")}
          icon={<BsBookmarkCheck size={20} />}
        />

        {/* SERVICES LINK */}
        <NavItem
          location="Services"
          isActive={() => setActiveNav("/services")}
          icon={<MdDesignServices size={20} />}
        />

        {/* PORTFOLIO LINK */}
        <NavItem
          location="Portfolio"
          isActive={() => setActiveNav("/portfolio")}
          icon={<TfiGallery size={20} />}
        />

        {/* CONTACTS LINK */}
        <NavItem
          location="Contacts"
          isActive={() => setActiveNav("/contacts")}
          icon={<TiMessages size={20} />}
        />
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <Link
          to="header"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setActiveNav("/")}
          className={`${
            activeNav === "/" ? "active" : ""
          } bg-transparent p-3 rounded-full flex ${
            time >= 12 && time < 16
              ? "text-noonOrange bg-red-300 bg-black/[0.3]"
              : time >= 16 && time < 20
              ? "text-sunsetPurple bg-red-300 bg-black/[0.3]"
              : time >= 20 && time < 6
              ? "text-nightBlue bg-red-300 bg-black/[0.3]"
              : time >= 6 && time < 12 && "text-morningDarkBeige bg-black/[0.3]"
          } cursor-pointer`}
        >
          <BiHomeAlt2 size={20} />
        </Link>
        {/* ABOUT LINK */
}
// <Link
//   to="About"
//   spy={true}
//   smooth={true}
//   offset={-100}
//   duration={500}
//   onClick={() => setActiveNav("/About")}
//   className={`${
//     activeNav === "/About" ? "active" : ""
//   } bg-transparent p-3 rounded-full flex ${
//     time >= 12 && time < 16
//       ? "text-noonOrange bg-red-300 bg-black/[0.3]"
//       : time >= 16 && time < 20
//       ? "text-sunsetPurple bg-red-300 bg-black/[0.3]"
//       : time >= 20 && time < 6
//       ? "text-nightBlue bg-red-300 bg-black/[0.3]"
//       : time >= 6 && time < 12 && "text-morningDarkBeige bg-black/[0.3]"
//   } cursor-pointer`}
// >
//   <BiUserCircle size={20} />
// </Link>
// {/* EXPERIENCE LINK */}
// <Link
//   to="Experience"
//   spy={true}
//   smooth={true}
//   offset={-100}
//   duration={500}
//   onClick={() => setActiveNav("/Experience")}
//   className={`${
//     activeNav === "/Experience" ? "active" : ""
//   } bg-transparent p-3 rounded-full flex ${
//     time >= 12 && time < 16
//       ? "text-noonOrange bg-red-300 bg-black/[0.3]"
//       : time >= 16 && time < 20
//       ? "text-sunsetPurple bg-red-300 bg-black/[0.3]"
//       : time >= 20 && time < 6
//       ? "text-nightBlue bg-red-300 bg-black/[0.3]"
//       : time >= 6 && time < 12 && "text-morningDarkBeige bg-black/[0.3]"
//   } cursor-pointer`}
// >
//   <BsBookmarkCheck size={20} />
// </Link>
// {/* SERVICES LINK */}
// <Link
//   to="Services"
//   spy={true}
//   smooth={true}
//   offset={-100}
//   duration={500}
//   onClick={() => setActiveNav("/Services")}
//   className={`${
//     activeNav === "/Services" ? "active" : ""
//   } bg-transparent p-3 rounded-full flex ${
//     time >= 12 && time < 16
//       ? "text-noonOrange bg-red-300 bg-black/[0.3]"
//       : time >= 16 && time < 20
//       ? "text-sunsetPurple bg-red-300 bg-black/[0.3]"
//       : time >= 20 && time < 6
//       ? "text-nightBlue bg-red-300 bg-black/[0.3]"
//       : time >= 6 && time < 12 && "text-morningDarkBeige bg-black/[0.3]"
//   } cursor-pointer`}
// >
//   <MdDesignServices size={20} />
// </Link>
// {/* PORTFOLIO LINK */}
// <Link
//   to="Portfolio"
//   spy={true}
//   smooth={true}
//   offset={-100}
//   duration={500}
//   onClick={() => setActiveNav("/Portfolio")}
//   className={`${
//     activeNav === "/Portfolio" ? "active" : ""
//   } bg-transparent p-3 rounded-full flex ${
//     time >= 12 && time < 16
//       ? "text-noonOrange bg-red-300 bg-black/[0.3]"
//       : time >= 16 && time < 20
//       ? "text-sunsetPurple bg-red-300 bg-black/[0.3]"
//       : time >= 20 && time < 6
//       ? "text-nightBlue bg-red-300 bg-black/[0.3]"
//       : time >= 6 && time < 12 && "text-morningDarkBeige bg-black/[0.3]"
//   } cursor-pointer`}
// >
//   <TfiGallery size={20} />
// </Link>
// {/* CONTACTS LINK */}
// <Link
//   to="Contacts"
//   spy={true}
//   smooth={true}
//   offset={-100}
//   duration={500}
//   onClick={() => setActiveNav("/Contacts")}
//   className={`${
//     activeNav === "/Contacts" ? "active" : ""
//   } bg-transparent p-3 rounded-full flex ${
//     time >= 12 && time < 16
//       ? "text-noonOrange bg-red-300 bg-black/[0.3]"
//       : time >= 16 && time < 20
//       ? "text-sunsetPurple bg-red-300 bg-black/[0.3]"
//       : time >= 20 && time < 6
//       ? "text-nightBlue bg-red-300 bg-black/[0.3]"
//       : time >= 6 && time < 12 && "text-morningDarkBeige bg-black/[0.3]"
//   } cursor-pointer`}
// >
//   <TiMessages size={20} />
// </Link> */}
