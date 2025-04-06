import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  const handleTransitionEnd = () => {
    if (currentIndex === items.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else if (currentIndex === -1) {
      setIsTransitioning(false);
      setCurrentIndex(items.length - 1);
    }
  };

  const nextSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
    setIsTransitioning(true);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex transition-transform ${
          isTransitioning ? "duration-300 ease-in-out" : "duration-0"
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[items[items.length - 1], ...items, items[0]].map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={item}
              alt={`Slide ${index}`}
              className="w-full  object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400 cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowRight} className="rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-klein-900 text-white p-2 rounded-full hover:bg-klein-600 cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Carousel;
