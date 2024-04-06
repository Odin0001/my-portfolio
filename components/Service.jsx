"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RxArrowTopRight } from "react-icons/rx";
import { useEffect, useState } from "react";

const slidesData = [
  {
    title: "Web Development",
    id: "s1",
    idNum: "1",
    cardNum: "card-1",
  },
  {
    title: "Database Design & Development",
    id: "s2",
    idNum: "2",
    cardNum: "card-2",
  },
  {
    title: "Deployment & Hosting",
    id: "s3",
    idNum: "3",
    cardNum: "card-3",
  },
  {
    title: "Maintenance & Support",
    id: "s4",
    idNum: "4",
    cardNum: "card-4",
  },
  {
    title: "Ecommerce Development",
    id: "s5",
    idNum: "5",
    cardNum: "card-5",
  },
  {
    title: "Search Engine Optimization",
    id: "s6",
    idNum: "6",
    cardNum: "card-6",
  },
];

const Service = () => {
  const [width, setWidth] = useState(0);
  const breakPoint = 1023;

  useEffect(() => {
    const handleResizeWidth = () => setWidth(window.innerWidth);
    // Ensure window is defined (i.e., we're running in the browser)
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResizeWidth);
      // Update the state to the current window width
      handleResizeWidth();
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResizeWidth);
      }
    };
  }, []);

  return (
    <>
      {width > breakPoint ? (
        <div className="w-full min-h-screen flex item-center justify-center my-20">
          <div className="h-[400px] lg:h-full flex flex-nowrap justify-start lg:flex-col lg:gap-8">
            {slidesData.map((item) => (
              <div key={item.idNum}>
                <input
                  type="radio"
                  name="slide"
                  id={item.id}
                  className="hidden"
                />
                <label
                  htmlFor={item.id}
                  className={`w-[80px] lg:w-3/4 h-full rounded-xl bg-cover cursor-pointer overflow-hidden mx-[10px] lg:mx-0 flex items-end transition-all duration-300 shadow-lg shadow-black ${item.cardNum}`}
                >
                  <div className="text-white flex flex-nowrap items-center">
                    <div className="dark:bg-white bg-gray-800 font-bold text-white dark:text-gray-800 rounded-full w-[50px] h-[50px] flex justify-center items-center m-[15px]">
                      {item.idNum}
                    </div>
                    <div className="flex justify-center flex-col overflow-hidden h-[100px] w-[520px] transition-all duration-300 delay-300">
                      <h4 className="text-4xl capitalize font-semibold">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          freemode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[350px] sm:h-[340px] "
          style={{
            "--swiper-pagination-color": "#075985",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="dark:bg-[rgba(255,255,255,0.2)] bg-[rgba(65,67,123,0.4)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300">
                <h2 className="text-2xl ">{item.title}</h2>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Service;
