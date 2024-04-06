import HeroText from "@/components/HeroText";
import Numbers from "@/components/Numbers";
import Skills from "@/components/Skills";
import Transition from "@/components/Transition";
import Image from "next/image";
import profile from "../../public/hero-img.png";

export const metadata = {
  title: "PJ | About Page",
  description: "About Philip",
};

const About = () => {
  return (
    <>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center">
        <div className="w-full h-full inline-block z-0 px-32 md:px-16 py-8">
          <HeroText
            text="Passion Fuels Purpose!"
            className="text-center mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-white text-gray-800 light">
                Biography
              </h2>
              <p className="text-justify light dark:text-white text-gray-800">
                I am a dedicated 26 years old self-taught full stack web
                developer and graduated from the school of finance and banking.
                Later, I discovered my passion in web development and decided to
                shift my career.
              </p>
              <p className="my-4 text-justify light dark:text-white text-gray-800">
                I dedicated my time and effort to learn web development online
                by my own until I obtained multiple certificates and managed to
                build small projects during the previous process.
              </p>
              <p className="text-justify light dark:text-white text-gray-800">
                In the present, I am continuing my never-ending learning journey
                because in this field, you are always a student. My skills and
                and certificates are various including HTML 5, CSS 3, Vanilla
                Java Script, Bootstrap, tailwind CSS, React JS, Next JS 13, Node
                JS, Express JS, Firebase, MongoDB, mySQL, Git, Next-Auth, JWT
                and OAuth. I am flexible to work on various types of projects
                and perfect timing to provide the best quality for my clients.
                If you are interested to have your own project, feel free to
                contact with me!
              </p>
            </div>
            <div className="col-span-3 shadow shadow-lg shadow-black h-max rounded-2xl pic-bg xl:col-span-4 md:order-1 md:col-span-8">
              <Image
                src={profile}
                alt="Profile Image"
                className="w-full h-auto rounded-2xl"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-with: 1200px) 50vw, 33vw"
              />
            </div>
            <Numbers />
          </div>
        </div>
        <Skills />
      </main>
    </>
  );
};

export default About;
