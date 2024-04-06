"use client";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((prev) => !prev);
  }

  const MobileLinks = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
      toggle();
      router.push(href);
    };

    return (
      <button
        onClick={handleClick}
        href={href}
        className={`${className} dark:text-black text-white my-2 extra-light font-bold`}
      >
        {title}
      </button>
    );
  };

  return (
    <header className="w-full px-32 md:px-16 py-8 font-medium flex items-center justify-between relative">
      <button onClick={handleMenu} className="hidden lg:flex">
        {!isOpen ? (
          <CiMenuFries size={25} className="dark:text-white text-black" />
        ) : (
          <TfiClose size={25} className="dark:text-white text-black" />
        )}
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <Link
            href="/"
            className="mr-4 extra-light font-bold dark:text-white text-gray-800"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mx-4 extra-light font-bold dark:text-white text-gray-800"
          >
            About
          </Link>
          <Link
            href="/services"
            className="ml-4 extra-light font-bold dark:text-white text-gray-800"
          >
            Servcies
          </Link>
          <Link
            href="/projects"
            className="mx-4 extra-light font-bold dark:text-white text-gray-800"
          >
            Projects
          </Link>
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-3">
          <a
            href="https://www.facebook.com/philip.jobran"
            target="_blank"
            title="Facebook"
            className="hover:translate-y-[-5px] dark:text-white text-gray-800 transition duration-300 ease"
          >
            <AiFillFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/philip.j1/"
            target="_blank"
            title="Instagram"
            className="hover:translate-y-[-5px] dark:text-white text-gray-800 transition duration-300 ease"
          >
            <AiFillInstagram size={30} />
          </a>
          <a
            href="https://github.com/Odin0001"
            target="_blank"
            title="Github"
            className="hover:translate-y-[-5px] dark:text-white text-gray-800 transition duration-300 ease"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/philip-jobran-75bb3a21b/"
            target="_blank"
            title="Linkedin"
            className="hover:translate-y-[-5px] dark:text-white text-gray-800 transition duration-300 ease"
          >
            <AiFillLinkedin size={30} />
          </a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            title="Dark/Light Mode"
            className="ml-3 flex items-center justify-center rounded-full p-1 dark:text-white text-gray-800"
          >
            {mode === "dark" ? (
              <BsFillSunFill size={20} />
            ) : (
              <BsFillMoonFill size={20} />
            )}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-white/50 bg-black/50 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center flex-wrap">
            <MobileLinks href="/" title="Home" toggle={handleMenu} />
            <MobileLinks href="/about" title="About" toggle={handleMenu} />
            <MobileLinks
              href="/services"
              title="Services"
              toggle={handleMenu}
            />
            <MobileLinks
              href="/projects"
              title="Projects"
              toggle={handleMenu}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-3 mt-10">
            <a
              href="https://www.facebook.com/philip.jobran"
              target="_blank"
              title="Facebook"
              className="hover:translate-y-[-5px] dark:text-gray-800 text-white transition duration-300 ease"
            >
              <AiFillFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/philip.j1/"
              target="_blank"
              title="Instagram"
              className="hover:translate-y-[-5px] dark:text-gray-800 text-white transition duration-300 ease"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              href="https://github.com/Odin0001"
              target="_blank"
              title="Github"
              className="hover:translate-y-[-5px] dark:text-gray-800 text-white transition duration-300 ease"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/philip-jobran-75bb3a21b/"
              target="_blank"
              title="Linkedin"
              className="hover:translate-y-[-5px] dark:text-gray-800 text-white transition duration-300 ease"
            >
              <AiFillLinkedin size={30} />
            </a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              title="Dark/Light Mode"
              className="ml-3 flex items-center justify-center rounded-full p-1 dark:text-gray-800 text-white"
            >
              {mode === "dark" ? (
                <BsFillSunFill size={20} />
              ) : (
                <BsFillMoonFill size={20} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <div className="flex items-center justify-center mt-2">
          <Link
            href="/"
            className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold hover:bg-white hover:text-black transition duration-300 ease"
          >
            PJ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
