import { VscCheckAll } from "react-icons/vsc";
import { useState } from "react";

const Services = () => {
  const [time, setTime] = useState(new Date().getHours());

  return (
    <section id="Services">
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
        What I Offer
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
        Services
      </h1>
      <div className="w-3/4 mx-auto md:grid md:grid-cols-2 md:gap-[3rem] sm:grid sm:grid-cols-1 sm:gap-[2rem] grid grid-cols-1 gap-[1.5rem]">
        <article
          className={`${
            time >= 12 && time < 16
              ? "bg-transparent hover:bg-noonBeige border-noonBeige"
              : time >= 16 && time < 20
              ? "bg-transparent hover:bg-sunsetPurple border-sunsetPurple"
              : time >= 20 || time < 6
              ? "bg-transparent hover:bg-nightBlue border-nightPurple"
              : time >= 6 &&
                time < 12 &&
                "bg-transparent hover:bg-morningGray border-morningPurple"
          } rounded-b-[2rem] border md:h-fit sm:h-auto transition duration-300 ease`}
        >
          <div
            className={`${
              time >= 12 && time < 16
                ? "bg-noonOrange"
                : time >= 16 && time < 20
                ? "bg-sunsetPurple"
                : time >= 20 || time < 6
                ? "bg-nightLightBlue"
                : time >= 6 && time < 12 && "bg-morningDarkBeige"
            } p-[2rem] rounded-b-[2rem] shadow-2xl`}
          >
            <h3
              className={`${
                time >= 12 && time < 16
                  ? "text-noonDarkOrange"
                  : time >= 16 && time < 20
                  ? "text-gray-800"
                  : time >= 20 || time < 6
                  ? "text-nightBlack"
                  : time >= 6 && time < 12 && "text-morningGray"
              } text-white text-3xl text-center`}
            >
              UI/UX Design
            </h3>
          </div>

          <ul className="p-[2rem]">
            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Information Architecture
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                User Interface Design
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Prototyping
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Design Systems
              </p>
            </li>
          </ul>
        </article>

        <article
          className={`${
            time >= 12 && time < 16
              ? "bg-transparent hover:bg-noonBeige border-noonBeige"
              : time >= 16 && time < 20
              ? "bg-transparent hover:bg-sunsetPurple border-sunsetPurple"
              : time >= 20 || time < 6
              ? "bg-transparent hover:bg-nightBlue border-nightPurple"
              : time >= 6 &&
                time < 12 &&
                "bg-transparent hover:bg-morningGray border-morningPurple"
          } rounded-b-[2rem] border md:h-fit sm:h-auto transition duration-300 ease`}
        >
          <div
            className={`${
              time >= 12 && time < 16
                ? "bg-noonOrange"
                : time >= 16 && time < 20
                ? "bg-sunsetPurple"
                : time >= 20 || time < 6
                ? "bg-nightLightBlue"
                : time >= 6 && time < 12 && "bg-morningDarkBeige"
            } p-[2rem] rounded-b-[2rem] shadow-2xl`}
          >
            <h3
              className={`${
                time >= 12 && time < 16
                  ? "text-noonDarkOrange"
                  : time >= 16 && time < 20
                  ? "text-gray-800"
                  : time >= 20 || time < 6
                  ? "text-nightBlack"
                  : time >= 6 && time < 12 && "text-morningGray"
              } text-white text-3xl text-center`}
            >
              Web Development
            </h3>
          </div>

          <ul className="p-[2rem]">
            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Web Application Development
              </p>
            </li>
            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Database Design & Development
              </p>
            </li>
            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Deployment & Hosting
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Maintenance & Support
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                E-commerce Development
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Content Management System Development
              </p>
            </li>

            <li className="flex items-center gap-[1rem] mb-3.5">
              <VscCheckAll className="mt-0.5" size={25} />
              <p
                className={`text-sm ${
                  time >= 12 && time < 16
                    ? "text-gray-800"
                    : time >= 16 && time < 20
                    ? "text-gray-800"
                    : time >= 20 || time < 6
                    ? "text-nightLightBlue"
                    : time >= 6 && time < 12 && "text-morningPurple"
                }`}
              >
                Search Engine Optimization (SEO)
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
