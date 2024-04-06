import HeroText from "@/components/HeroText";
import Transition from "@/components/Transition";
import Project from "@/components/Project";

export const metadata = {
  title: "PJ | Projects Page",
  description: "Philip Jobran's Projects",
};

const Projects = () => {
  return (
    <>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <div className="w-full h-full inline-block z-0 px-32 md:px-16 py-8">
          <HeroText
            text="Imagination Trumps Knowledge!"
            className="text-center mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="w-[70vw] mx-auto">
            <Project />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
