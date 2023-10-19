import React, { useCallback, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Banner() {
  const slides = [
    {
      url: "https://i.ibb.co/qFwpwQ7/Banner.jpg",
    },
    {
      url: "https://i.ibb.co/hcmDKFj/Banner3.jpg",
    },
    {
      url: "https://i.ibb.co/48GmJpF/Banner2.jpg",
    },

    {
      url: "https://i.ibb.co/6XhCf0t/Banner4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);
  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 1000ms = 1 second

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className=" h-[680px] w-screen m-auto relative group">
      <div className=" z-10 absolute top-1/5 left-1/2 transform -translate-x-1/2 lg:text-4xl      text-green-800  md:text-2xl extraSm:text-xs">
        House Painting Service
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  opacity-70   bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl  bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center ">
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
