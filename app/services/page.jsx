import Transition from "@/components/Transition";
import Service from "@/components/Service";
import HeroText from "@/components/HeroText";

export const metadata = {
  title: "PJ | Services Page",
  description: "Services Provided by Philip",
};

const Services = () => {
  return (
    <>
      <Transition />
      <HeroText
        text="What I Offer"
        className="text-center lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <div className="w-[70vw]">
          <Service />
        </div>
      </div>
    </>
  );
};

export default Services;
