"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnumatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Numbers = () => {
  return (
    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
      <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-white text-gray-800">
          <AnumatedNumbers value={10} />+
        </span>
        <h2 className="text-xl font-medium xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-white text-gray-800 light">
          Satisfied Clients
        </h2>
      </div>

      <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-white text-gray-800">
          <AnumatedNumbers value={8} />+
        </span>
        <h2 className="text-xl font-medium xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-white text-gray-800 light">
          Projects Completed
        </h2>
      </div>

      <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-white text-gray-800">
          <AnumatedNumbers value={4} />+
        </span>
        <h2 className="text-xl font-medium xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-white text-gray-800 light">
          Years of Experience
        </h2>
      </div>
    </div>
  );
};

export default Numbers;
