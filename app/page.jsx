import Image from "next/image";
import hero from "../public/hero.png";
import HeroText from "@/components/HeroText";
import { HiOutlineDownload } from "react-icons/hi";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <>
      <Transition />
      <main className="flex items-center text-white w-full min-h-screen">
        <div className="w-full h-full inline-block z-0 px-32 md:px-16 pb-32">
          <div className="flex items-center justify-between gap-12 w-full lg:flex-col lg:gap-4">
            <div className="w-1/2 md:w-full">
              <Image
                src={hero}
                alt="Philip Jobran"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-with: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <HeroText
                text="Turning Vision Into Virtual Reality"
                className="xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-xl w-full text-left lg:text-center dark:text-white text-gray-800 light">
                Greetings! I am Philip Jobran, a Full Stack Web Developer
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <a
                  href="/my-cv.pdf"
                  download="my-cv.pdf"
                  className="flex items-center bg-gray-800 dark:bg-white dark:text-gray-800 text-white py-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition duration-300 ease"
                >
                  My Resume <HiOutlineDownload size={20} className="ml-1" />
                </a>
                <a
                  href="mailto:philipjobran009@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-bold capitalize dark:text-white text-gray-800 underline"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
